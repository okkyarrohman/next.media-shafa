import Upload from "@/Components/General/Upload";
import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TambahSoalKuisGuru({ auth }) {
    const kategoriId = localStorage.getItem("ID_KATEGORI_KUIS");

    const { data, setData, post } = useForm({
        kategori_id: kategoriId,
        nama: "",
        gambar: null,
    });

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (files) => {
        setUploadedFiles(files);
        setData((prevData) => ({
            ...prevData,
            gambar: files[0],
        }));
        console.log(uploadedFiles);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("soal-kuis.store"));
    };

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Kuis" />
            <h1 className="font-medium text-4xl text-center mb-24">
                TAMBAH SOAL KUIS BARU
            </h1>
            <form className="w-4/5 mx-auto">
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="nama"
                    >
                        Soal
                    </label>
                    <TextInput
                        id="nama"
                        type="text"
                        name="nama"
                        placeholder="Masukkan Soal..."
                        className="w-full border-[#353535] bg-transparent"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                    />
                </div>
                <label
                    className="block text-3xl font-semibold mb-2"
                    htmlFor="gambar"
                >
                    Gambar Soal (Opsional)
                </label>
                <Upload onDrop={handleDrop} uploadedFiles={uploadedFiles} />
                <button
                    className="bg-first text-white py-3 px-24 rounded font-semibold text-2xl w-fit mx-auto block my-12"
                    onClick={handleFormSubmit}
                >
                    Kirim
                </button>
            </form>
        </SubLayoutGuru>
    );
}
