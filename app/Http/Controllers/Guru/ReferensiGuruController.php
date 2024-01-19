<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Referensi;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ReferensiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $referensis = Referensi::all();

        return Inertia::render('Guru/Referensi', [
            'referensis' => $referensis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/TambahReferensi');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $referensis = new Referensi();

        // Request column input type file
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('YmdHis') . "." . $extension;
            $gambar->move(storage_path('app/public/Referensi/gambar/'), $gambarName);
            $referensis->gambar = $gambarName;
        }

        $referensis->save();

        return redirect()->route('referensi-guru.index');
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
        $referensis = Referensi::find($id)->get();

        if (Storage::exists('public/Referensi/gambar/' . $referensis->gambar)) {
            Storage::delete('public/Referensi/gambar/' . $referensis->gambar);
        }

        $referensis->delete();

        return redirect()->route('referensi-guru.index');
    }
}
