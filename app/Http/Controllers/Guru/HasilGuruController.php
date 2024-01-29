<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hasil;

class HasilGuruController extends Controller
{
    /**
     * Display a listing of the resource
     */
    public function index()
    {
        $hasil = Hasil::with(['soal', 'user', 'kategori'])->get();

        return Inertia::render('Guru/HasilKuisGuru', [
            'hasils' => $hasil,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $hasil = Hasil::with(['soal', 'user', 'kategori'])->where('id', $id)->get();

        return Inertia::render('Guru/DetailHasilKuisGuru', [
            'hasils' => $hasil,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $hasil = Hasil::find($id)->first();
        $hasil->delete();

        return redirect()->route('hasil-kuis');
    }
}
