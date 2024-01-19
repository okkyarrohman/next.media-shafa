<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Proyek;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProyekGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proyeks = Proyek::all();

        return Inertia::render('Guru/Proyek', [
            'proyeks' => $proyeks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/TambahProyek');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $proyeks = new Proyek();

        $proyeks->nama = $request->nama;
        $proyeks->proses = $request->proses;

        // Request column input type file
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/Proyek/file/'), $fileName);
            $proyeks->file = $fileName;
        }

        $proyeks->save();

        return redirect()->route('proyek-guru.index');
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
        $proyeks = Proyek::find($id)->get();

        if (Storage::exists('/public/Proyek/file/' . $proyeks->file)) {
            Storage::delete('/public/Proyek/file/' . $proyeks->file);
        }

        $proyeks->delete();
    }
}
