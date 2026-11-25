<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'skills',
        'sort_order'
    ];

    protected $casts = [
        'skills' => 'array',
        'sort_order' => 'integer'
    ];
}
