<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Opsi;
use App\Models\Soal;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class OpsiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $opsis = Opsi::all();

        return Inertia::render('Guru/OpsiKuisGuru', [
            'opsis' => $opsis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/TambahOpsiKuisGuru', [
            'soals' => Soal::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $opsis = new Opsi();
        $opsis->soal_id = $request->soal_id;
        $opsis->nama = $request->nama;
        $opsis->point = $request->point;
        $opsis->save();

        return redirect()->route('opsi-kuis.index');
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
        $opsis = Opsi::findOrFail($id);

        $opsis->delete();
    }
}
