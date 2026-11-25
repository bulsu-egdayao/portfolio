<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category',
        'year',
        'problem',
        'solution',
        'stack',
        'image',
        'live_url',
        'repo_url',
        'sort_order'
    ];

    protected $casts = [
        'stack' => 'array',
        'sort_order' => 'integer'
    ];
}
