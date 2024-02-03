<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\HasilProyek;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HasilProyekGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hasilProyeks = HasilProyek::with(['user', 'proyek'])->get();

        return Inertia::render('Guru/DetailHasilProyekGuru', [
            'hasilProyeks' => $hasilProyeks,
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $hasilProyeks = HasilProyek::where('id', $id)->with(['user','proyek'])->get();

        return Inertia::render('Guru/NilaiHasilProyekGuru', [
            'hasilProyeks' => $hasilProyeks,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $proyeks = HasilProyek::find($id);
        $proyeks->konfirmasi1 = $request->konfirmasi1;
        $proyeks->konfirmasi2 = $request->konfirmasi2;
        $proyeks->konfirmasi3 = $request->konfirmasi3;
        $proyeks->konfirmasi4 = $request->konfirmasi4;
        $proyeks->nilai = $request->nilai;
        $proyeks->catatan = $request->catatan;

        $proyeks->save();

        return redirect()->route('hasil-proyek.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
