<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    use HasFactory;

    protected $table = 'kategoris';

    protected $fillable = [
        'kuis',
        'tenggat',
    ];

    public function soal()
    {
        return $this->hasMany(Soal::class);
    }

    public function hasil()
    {
        return $this->hasMany(Hasil::class);
    }
}
