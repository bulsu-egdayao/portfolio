<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Certification;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Seed Projects
        Project::truncate();
        Project::create([
            'title' => 'Wise Sole',
            'category' => 'E-commerce & Inquiring Platform',
            'year' => '2026',
            'problem' => 'A local sneaker reseller lost buyers in long Messenger threads about sizing and stock.',
            'solution' => 'A storefront with live inventory and a structured inquiry flow that cut response time by 70%.',
            'stack' => ['React', 'JavaScript', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
            'image' => '/ac457e77-ba96-429a-8e3c-16f8ac336d17.jpg',
            'live_url' => 'https://wise-sole-frontend-xg4l.vercel.app/',
            'repo_url' => 'https://github.com/wisey77/wise-sole',
            'sort_order' => 1
        ]);

        Project::create([
            'title' => 'Sentri',
            'category' => 'Recruitment & Management System',
            'year' => '2025',
            'problem' => 'Manual applicant paperwork, scattered records, and slow verification hindered administrative operations.',
            'solution' => 'A role-based web platform with real-time tracking, applicant management, and automated verification workflows.',
            'stack' => ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
            'image' => '/90461984-cea9-4993-beec-2a690508bb1e.jpg',
            'live_url' => 'https://sentri.website/',
            'repo_url' => 'https://github.com/wisey77/sentri',
            'sort_order' => 2
        ]);

        // 2. Seed Skills
        Skill::truncate();
        Skill::create([
            'name' => 'Frontend',
            'description' => 'Accessible, responsive interfaces that stay fast as they grow.',
            'skills' => ['React', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Vite'],
            'sort_order' => 1
        ]);
        Skill::create([
            'name' => 'Backend & Databases',
            'description' => 'Predictable APIs and schemas designed around real queries.',
            'skills' => ['PHP / Laravel', 'Firebase Firestore', 'PostgreSQL', 'MySQL', 'REST APIs'],
            'sort_order' => 2
        ]);

        // 3. Seed Certifications
        Certification::truncate();
        Certification::create([
            'title' => 'AWS Certified Developer – Associate',
            'issuer' => 'Amazon Web Services',
            'date' => 'Mar 2026',
            'credential_id' => 'AWS-DVA-7Q2K91',
            'verify_url' => 'https://aws.amazon.com/verification',
            'skills' => ['Lambda', 'DynamoDB', 'IAM', 'CI/CD'],
            'sort_order' => 1
        ]);
    }
}
