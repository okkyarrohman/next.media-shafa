<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Kategori;
use App\Models\Proyek;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Siswa/DashboardSiswa');
    }

    public function countKuisProyek()
    {
        $kuis = Kategori::all()->count();
        $proyeks = Proyek::all()->count();

        return Inertia::render('Siswa/TestSiswa', [
            'kuis' => $kuis,
            'proyeks' => $proyeks
        ]);
    }
}
