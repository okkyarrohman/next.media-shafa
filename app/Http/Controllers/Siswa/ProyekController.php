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
        $hasilProyeks->answer1 = $request->answer1;

        // Request column input type file
        if ($request->hasFile('answer2')) {
            $answer2 = $request->file('answer2');
            $extension = $answer2->getClientOriginalName();
            $answer2Name = date('YmdHis') . "." . $extension;
            $answer2->move(storage_path('app/public/HasilProyek/answer2/'), $answer2Name);
            $hasilProyeks->answer2 = $answer2Name;
        }

        // Request column input type file
        if ($request->hasFile('answer3')) {
            $answer3 = $request->file('answer3');
            $extension = $answer3->getClientOriginalName();
            $answer3Name = date('YmdHis') . "." . $extension;
            $answer3->move(storage_path('app/public/HasilProyek/answer3/'), $answer3Name);
            $hasilProyeks->answer3 = $answer3Name;
        }

        // Request column input type file
        if ($request->hasFile('answer4')) {
            $answer4 = $request->file('answer4');
            $extension = $answer4->getClientOriginalName();
            $answer4Name = date('YmdHis') . "." . $extension;
            $answer4->move(storage_path('app/public/HasilProyek/answer4/'), $answer4Name);
            $hasilProyeks->answer4 = $answer4Name;
        }

        $hasilProyeks->save();

        return redirect()->route('proyek.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $proyeks = Proyek::findOrFail($id)->get();

        return Inertia::render('View', [
            'proyeks' => $proyeks
        ]);
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
