<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Materi;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MateriGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materis = Materi::all();

        return Inertia::render('Guru/MateriGuru', [
            'materis' => $materis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Guru/TambahMateriGuru');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $materis = new Materi();
        $materis->nama = $request->nama;

        // Request column input type file
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/Materi/file/'), $fileName);
            $materis->file = $fileName;
        }

        if ($request->hasFile('video')) {
            $video = $request->file('video');
            $extension = $video->getClientOriginalName();
            $videoName = date('YmdHis') . "." . $extension;
            $video->move(storage_path('app/public/Materi/video/'), $videoName);
            $materis->video = $videoName;
        }

        $materis->save();

        return redirect()->route('materi-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $materis = Materi::where('id', $id)->get();

        return Inertia::render('Guru/LihatMateriGuru', [
            'materis' => $materis
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
        $materis = Materi::find($id);

        if (Storage::exists('public/Materi/file/' . $materis->file)) {
            Storage::delete('public/Materi/file/' . $materis->file);
        }

        if (Storage::exists('public/Materi/video/' . $materis->video)) {
            Storage::delete('public/Materi/video/' . $materis->video);
        }

        $materis->delete();

        return redirect()->route('materi-guru.index');
    }
}
