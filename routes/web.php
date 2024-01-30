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
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Kategori;
use App\Models\Proyek;

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

require __DIR__ . '/auth.php';

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

    Route::post('/proyek/edit/answer2', [ProyekController::class, 'updateAnswer2'])->name('proyek.answer2');
    Route::post('/proyek/edit/answer3', [ProyekController::class, 'updateAnswer3'])->name('proyek.answer3');
    Route::post('/proyek/edit/answer4', [ProyekController::class, 'updateAnswer4'])->name('proyek.answer4');

    Route::get('/test-siswa', [DashboardController::class, 'countKuisProyek'])->name('test-siswa');
});





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


// SISWA
// Route::get('/dashboard-siswa', function () {
//     return Inertia::render('Siswa/DashboardSiswa');
// })->name('dashboard');

Route::get('/absen-siswa', function () {
    return Inertia::render('Siswa/AbsenSiswa');
})->name('absen-siswa');




Route::get('/kuis-siswa', function () {
    return Inertia::render('Siswa/KuisSiswa');
})->name('kuis-siswa');

Route::get('/soal-kuis-siswa', function () {
    return Inertia::render('Siswa/SoalKuisSiswa');
})->name('soal-kuis-siswa');

Route::get('/proyek-siswa/detail', function () {
    return Inertia::render('Siswa/DetailProyekSiswa');
})->name('detail-proyek-siswa');



// GURU
// Route::get('/dashboard-guru', function () {
//     return Inertia::render('Guru/DashboardGuru');
// })->name('dashboard-guru');

// Route::get('/referensi-guru', function () {
//     return Inertia::render('Guru/ReferensiGuru');
// })->name('referensi-guru');

Route::get('/absen-guru', function () {
    return Inertia::render('Guru/AbsenGuru');
})->name('absen-guru');

// Route::get('/materi-guru', function () {
//     return Inertia::render('Guru/MateriGuru');
// })->name('materi-guru');

Route::get('/detail-materi-guru', function () {
    return Inertia::render('Guru/DetailMateriGuru');
})->name('detail-materi-guru');

Route::get('/test-guru', function () {
    return Inertia::render('Guru/TestGuru');
})->name('test-guru');

Route::get('/kuis-guru', function () {
    return Inertia::render('Guru/KuisGuru');
})->name('kuis-guru');

Route::get('/tugas-guru', function () {
    return Inertia::render('Guru/TugasGuru');
})->name('tugas-guru');

Route::get('/hasil-tugas-guru', function () {
    return Inertia::render('Guru/HasilTugasSiswaGuru');
})->name('hasil-tugas');



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', function () {
//     return Inertia::render('Siswa/DashboardSiswa');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
