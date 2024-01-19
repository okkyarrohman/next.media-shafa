<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\Soal;
use App\Models\Kategori;



class SoalGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soals = Soal::all();

        return Inertia::render('Guru/Soal', [
            'soals' => $soals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/TambahSoal', [
            'kategoris' => Kategori::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $soals = new Soal();
        $soals->kategori_id = $request->kategori_id;
        $soals->nama = $request->nama;

        // Request column input type file
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('YmdHis') . "." . $extension;
            $gambar->move(storage_path('app/public/Soal/gambar/'), $gambarName);
            $soals->gambar = $gambarName;
        }

        $soals->save();

        return redirect()->route('soal-kuis.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        $soals = Soal::find($id)->get();

        if (Storage::exists('public/Soal/gambar/' . $soals->gambar)) {
            Storage::delete('public/Soal/gambar/' . $soals->gambar);
        }

        $soals->delete();

        return redirect()->route('soal-kuis.index');
    }
}
