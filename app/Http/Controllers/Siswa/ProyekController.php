<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Proyek;
use App\Models\HasilProyek;
use Illuminate\Support\Facades\Storage;


class ProyekController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proyeks = Proyek::all();

        return Inertia::render('Siswa/ProyekSiswa', [
            'proyeks' => $proyeks
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
        $hasilProyeks = new HasilProyek();
        $hasilProyeks->user_id = $request->user_id;
        $hasilProyeks->proyek_id = $request->proyek_id;
        $hasilProyeks->jawabanText = $request->jawabanText;
        // Request column input type file
        if ($request->hasFile('jawabanFile')) {
            $jawabanFile = $request->file('jawabanFile');
            $extension = $jawabanFile->getClientOriginalName();
            $jawabanFileName = date('YmdHis') . "." . $extension;
            $jawabanFile->move(storage_path('app/public/HasilProyek/jawabanFile/'), $jawabanFileName);
            $hasilProyeks->jawabanFile = $jawabanFileName;
        }
        $hasilProyeks->save();

        return redirect()->route('proyek.index');
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
        $hasilProyeks = HasilProyek::where('proyek_id', $id)->get();

        return Inertia::render('Siswa/EditHasilProyek', [
            'hasilProyeks' => $hasilProyeks
        ]);
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
        //
    }
}
