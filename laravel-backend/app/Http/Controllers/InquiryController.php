<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;

class InquiryController extends Controller
{
    /**
     * Store a newly created contact inquiry in database.
     */
    public function store(Request $request): JsonResponse
    {
        // 1. Honeypot check: Bots fill the company field
        if ($request->filled('company')) {
            // Return silent 200 OK so bots think it succeeded
            return response()->json([
                'success' => true,
                'message' => 'Message received successfully.'
            ], 200);
        }

        // 2. Strict Input Validation
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'min:2', 'max:80'],
            'email' => ['required', 'email:rfc,dns', 'max:254'],
            'subject' => ['required', 'string', 'in:Project Inquiry,Job Opportunity,Collaboration'],
            'message' => ['required', 'string', 'min:20', 'max:2000'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // 3. Sanitize inputs (strip tags)
        $cleanData = [
            'name' => strip_tags(trim($request->input('name'))),
            'email' => strtolower(trim($request->input('email'))),
            'subject' => $request->input('subject'),
            'message' => strip_tags(trim($request->input('message'))),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ];

        // 4. Save to Database
        $inquiry = Inquiry::create($cleanData);

        return response()->json([
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.',
            'data' => [
                'id' => $inquiry->id,
                'email' => $inquiry->email,
                'created_at' => $inquiry->created_at->toIso8601String()
            ]
        ], 201);
    }

    /**
     * List all inquiries (Admin only).
     */
    public function index(): JsonResponse
    {
        $inquiries = Inquiry::latest()->paginate(20);
        return response()->json($inquiries);
    }

    /**
     * Delete an inquiry (Admin only).
     */
    public function destroy(int $id): JsonResponse
    {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->delete();

        return response()->json([
            'success' => true,
            'message' => 'Inquiry deleted successfully.'
        ]);
    }
}
