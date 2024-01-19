<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
    use HasFactory;

    protected $table = 'soals';

    protected $fillable = [
        'kategori_id',
        'nama',
        'gambar'
    ];


    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'kategori_id');
    }

    public function opsi()
    {
        return $this->hasMany(Opsi::class);
    }
}
