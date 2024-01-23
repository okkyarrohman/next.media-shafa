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
        $proyeks->proses = $request->proses1;
        $proyeks->proses = $request->proses2;
        $proyeks->proses = $request->proses3;
        $proyeks->proses = $request->proses4;

        // Request column input type file
        if ($request->hasFile('file1')) {
            $file1 = $request->file('file1');
            $extension = $file1->getClientOriginalName();
            $file1Name = date('YmdHis') . "." . $extension;
            $file1->move(storage_path('app/public/Proyek/file1/'), $file1Name);
            $proyeks->file1 = $file1Name;
        }

        if ($request->hasFile('file2')) {
            $file2 = $request->file('file2');
            $extension = $file2->getClientOriginalName();
            $file2Name = date('YmdHis') . "." . $extension;
            $file2->move(storage_path('app/public/Proyek/file2/'), $file2Name);
            $proyeks->file2 = $file2Name;
        }

        if ($request->hasFile('file3')) {
            $file3 = $request->file('file3');
            $extension = $file3->getClientOriginalName();
            $file3Name = date('YmdHis') . "." . $extension;
            $file3->move(storage_path('app/public/Proyek/file3/'), $file3Name);
            $proyeks->file3 = $file3Name;
        }

        if ($request->hasFile('file4')) {
            $file4 = $request->file('file4');
            $extension = $file4->getClientOriginalName();
            $file4Name = date('YmdHis') . "." . $extension;
            $file4->move(storage_path('app/public/Proyek/file4/'), $file4Name);
            $proyeks->file4 = $file4Name;
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
        $proyeks = Proyek::find($id)->first();

        if (Storage::exists('/public/Proyek/file/' . $proyeks->file)) {
            Storage::delete('/public/Proyek/file/' . $proyeks->file);
        }

        $proyeks->delete();
    }
}
