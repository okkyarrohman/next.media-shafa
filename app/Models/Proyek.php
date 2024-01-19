<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyek extends Model
{
    use HasFactory;

    protected $table = 'proyeks';

    protected $fillable = [
        'nama',
        'proses',
        'pengumpulan',
    ];

    public function hasilProyek()
    {
        return $this->hasMany(HasilProyek::class);
    }
}
