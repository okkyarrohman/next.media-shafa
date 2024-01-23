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

        'proses1',
        'file1',
        'proses2',
        'file2',
        'proses3',
        'file3',
        'proses4',
        'file4',

    ];

    public function hasilProyek()
    {
        return $this->hasMany(HasilProyek::class);
    }
}
