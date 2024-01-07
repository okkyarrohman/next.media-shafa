<?php

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

require __DIR__.'/auth.php';
