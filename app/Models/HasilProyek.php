<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HasilProyek extends Model
{
    use HasFactory;

    protected $table = 'hasil_proyeks';

    protected $fillable = [
        'user_id',
        'proyek_id',
        'answer1',
        'konfirmasi1',
        'answer2',
        'konfirmasi2',
        'answer3',
        'konfirmasi3',
        'answer4',
        'konfirmasi4',
        'nilai',
        'catatan',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function proyek()
    {
        return $this->belongsTo(Proyek::class, 'proyek_id');
    }
}
