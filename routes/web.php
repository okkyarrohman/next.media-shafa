<?php

use App\Http\Controllers\Guru\DashboardGuruController;
use App\Http\Controllers\Guru\KategoriGuruController;
use App\Http\Controllers\Guru\MateriGuruController;
use App\Http\Controllers\Guru\ProyekGuruController;
use App\Http\Controllers\Guru\ReferensiGuruController;
use App\Http\Controllers\Guru\SoalGuruController;
use App\Http\Controllers\Guru\OpsiGuruController;
use App\Http\Controllers\Guru\HasilGuruController;
use App\Http\Controllers\Siswa\DashboardController;
use App\Http\Controllers\Siswa\KuisController;
use App\Http\Controllers\Siswa\MateriController;
use App\Http\Controllers\Siswa\ProyekController;
use App\Http\Controllers\Siswa\ReferensiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Landing', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Landing');
});

Route::get('/masuk', function () {
    return Inertia::render('Auth/Masuk');
});

Route::get('/daftar', function () {
    return Inertia::render('Auth/Daftar');
});

Route::get('/profil', function () {
    return Inertia::render('Profile');
});

Route::get('/dashboard-siswa', function () {
    return Inertia::render('Siswa/DashboardSiswa');
})->name('dashboard');

Route::get('/referensi-siswa', function () {
    return Inertia::render('Siswa/ReferensiSiswa');
})->name('referensi-siswa');

Route::get('/absen-siswa', function () {
    return Inertia::render('Siswa/AbsenSiswa');
})->name('absen-siswa');

Route::get('/materi-siswa', function () {
    return Inertia::render('Siswa/MateriSiswa');
})->name('materi-siswa');

Route::get('/detail-materi-siswa', function () {
    return Inertia::render('Siswa/DetailMateriSiswa');
})->name('detail-materi');

Route::get('/test-siswa', function () {
    return Inertia::render('Siswa/TestSiswa');
})->name('test-siswa');

Route::get('/kuis-siswa', function () {
    return Inertia::render('Siswa/KuisSiswa');
})->name('kuis-siswa');

Route::get('/tugas-siswa', function () {
    return Inertia::render('Siswa/TugasSiswa');
})->name('tugas-siswa');


Route::group(['middleware' => 'role:guru'], function () {
    Route::resources([
        'dashboard-guru' => DashboardGuruController::class,
        'materi-guru' => MateriGuruController::class,
        'referensi-guru' => ReferensiGuruController::class,
        'proyek-guru' => ProyekGuruController::class,

        // Make Kuis Start Here
        'kategori-kuis' => KategoriGuruController::class,
        'soal-kuis' => SoalGuruController::class,
        'opsi-kuis' => OpsiGuruController::class,
        'hasil-kuis' => HasilGuruController::class,
    ]);
});

Route::group(['middleware' => 'role:siswa'], function () {
    Route::resources([
        'dashboard' => DashboardController::class,
        'materi' => MateriController::class,
        'referensi' => ReferensiController::class,
        'proyek' => ProyekController::class,
        'kuis' => KuisController::class,

    ]);
});






// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Siswa/DashboardSiswa');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
