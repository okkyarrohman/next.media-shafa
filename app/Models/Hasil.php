<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hasil extends Model
{
    use HasFactory;

    protected $table = 'hasils';

    protected $fillable = [
        'user_id',
        'kategori_id',
        'total_points'
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'kategori_id');
    }

    public function soal()
    {
        return $this->belongsToMany(Soal::class)->with(['kategori', 'opsi'])->withPivot(['opsi_id', 'point']);
    }
}
