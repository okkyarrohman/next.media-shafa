import Upload from "@/Components/General/Upload";
import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TambahMateriGuru({ auth }) {
    const { data, setData, post } = useForm({
        nama: "",
        file: null,
        status: "",
    });

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (files) => {
        setUploadedFiles(files);
        setData((prevData) => ({
            ...prevData,
            file: files[0],
        }));
        console.log(uploadedFiles);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("materi-guru.store"));
    };

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Materi" />
            <h1 className="font-medium text-4xl text-center mb-24">
                TAMBAH MATERI BARU
            </h1>
            <form className="w-4/5 mx-auto">
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="nama"
                    >
                        Nama Materi
                    </label>
                    <TextInput
                        id="nama"
                        type="text"
                        name="nama"
                        placeholder="Masukkan Nama Materi..."
                        className="w-full border-[#353535] bg-transparent"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                    />
                </div>
                <label
                    className="block text-3xl font-semibold mb-2"
                    htmlFor="file"
                >
                    File Materi
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
