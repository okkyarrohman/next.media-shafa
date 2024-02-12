<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opsi extends Model
{
    use HasFactory;

    protected $table = 'opsis';

    protected $fillable = [
        'soal_id',
        'nama',
        'point'
    ];


    public function soal()
    {
        return $this->belongsTo(Soal::class, 'soal_id');
    }
}
