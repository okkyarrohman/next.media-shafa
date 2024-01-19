<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\HasilProyek;
use App\Models\Proyek;
use App\Models\Referensi;
use App\Models\Materi;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Kategori;
use App\Models\Soal;
use App\Models\Opsi;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);

        User::factory(20)->create();
        Referensi::factory(5)->create();
        Materi::factory(5)->create();

        Proyek::factory(5)->create();
        HasilProyek::factory(20)->create();

        Kategori::factory(3)->create();
        Soal::factory(5)->create();
        Opsi::factory(30)->create();
    }
}
