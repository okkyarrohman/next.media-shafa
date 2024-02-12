<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru = User::create([
            'name' => 'guru',
            'email' => 'guru@media.com',
            'password' => bcrypt('guru123'),
        ]);
        $guru->syncRoles('guru');

        $guru1 = User::create([
            'name' => 'Shaffa Salsabila',
            'email' => 'shaffa@media.com',
            'password' => bcrypt('shaffa123'),
        ]);
        $guru1->syncRoles('guru');


        $siswa = User::create([
            'name' => 'siswa',
            'email' => 'siswa@media.com',
            'password' => bcrypt('siswa123'),
        ]);

        $siswa->syncRoles('siswa');
    }
}
