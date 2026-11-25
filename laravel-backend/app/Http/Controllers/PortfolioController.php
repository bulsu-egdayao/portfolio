<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Certification;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Get profile information.
     */
    public function getProfile(): JsonResponse
    {
        return response()->json([
            'fullName' => 'Marco Santos',
            'firstName' => 'Marco',
            'initials' => 'MS',
            'title' => 'Full-Stack Developer & Systems Builder',
            'location' => 'Quezon City, Philippines',
            'address' => 'Diliman, Quezon City, Metro Manila, Philippines',
            'mapUrl' => 'https://www.google.com/maps/search/?api=1&query=Diliman%2C+Quezon+City%2C+Philippines',
            'email' => 'marco.santos@example.com',
            'phone' => '+63 917 555 0142',
            'phoneHref' => 'tel:+639175550142',
            'whatsappUrl' => 'https://wa.me/639175550142',
            'availability' => 'Available for Freelance & Full-time Roles',
            'summary' => 'I build full-stack web products with clean, well-tested code and security treated as a feature, not an afterthought. From first schema to production deploy, I ship on schedule and leave codebases easier to work in than I found them.',
            'portrait' => '/eebbc33f-df4b-4a1f-9eed-7e69dbfb53be.jpg',
            'currently' => 'Open to new work from November 2026 — remote or on-site in Metro Manila.',
            'socials' => [
                'github' => 'https://github.com/marcosantos',
                'linkedin' => 'https://www.linkedin.com/in/marcosantos'
            ]
        ]);
    }

    /**
     * Get projects list.
     */
    public function getProjects(): JsonResponse
    {
        $projects = Project::orderBy('sort_order', 'asc')->get();
        return response()->json($projects);
    }

    /**
     * Get skill categories and skills.
     */
    public function getSkills(): JsonResponse
    {
        $skills = Skill::orderBy('sort_order', 'asc')->get();
        return response()->json($skills);
    }

    /**
     * Get certifications list.
     */
    public function getCertifications(): JsonResponse
    {
        $certifications = Certification::orderBy('sort_order', 'asc')->get();
        return response()->json($certifications);
    }
}
