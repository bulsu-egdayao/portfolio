<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\PortfolioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your portfolio.
|
*/

// Public portfolio endpoints
Route::get('/profile', [PortfolioController::class, 'getProfile']);
Route::get('/projects', [PortfolioController::class, 'getProjects']);
Route::get('/skills', [PortfolioController::class, 'getSkills']);
Route::get('/certifications', [PortfolioController::class, 'getCertifications']);

// Public contact inquiry submission (rate-limited: max 5 requests per minute per IP)
Route::middleware('throttle:5,1')->group(function () {
    Route::post('/inquiries', [InquiryController::class, 'store']);
});

// Admin-only inquiry endpoints (e.g. protected with Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/inquiries', [InquiryController::class, 'index']);
    Route::delete('/inquiries/{id}', [InquiryController::class, 'destroy']);
});
