<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Projects table
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category');
            $table->string('year', 10);
            $table->text('problem');
            $table->text('solution');
            $table->json('stack');
            $table->string('image')->nullable();
            $table->string('live_url')->nullable();
            $table->string('repo_url')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // Skills table
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->json('skills');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // Certifications table
        Schema::create('certifications', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('issuer');
            $table->string('date', 50);
            $table->string('credential_id', 100);
            $table->string('verify_url')->nullable();
            $table->json('skills');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('certifications');
        Schema::dropIfExists('skills');
        Schema::dropIfExists('projects');
    }
};
