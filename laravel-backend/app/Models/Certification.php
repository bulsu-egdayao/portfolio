<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'issuer',
        'date',
        'credential_id',
        'verify_url',
        'skills',
        'sort_order'
    ];

    protected $casts = [
        'skills' => 'array',
        'sort_order' => 'integer'
    ];
}
