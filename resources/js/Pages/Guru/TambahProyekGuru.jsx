import Upload from "@/Components/General/Upload";
import UploadProyek from "@/Components/General/UploadProyek";
import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function TambahProyekGuru({ auth }) {
    const { data, setData, post } = useForm({
        nama: "",
        proses1: "",
        file1: null,
        proses2: "",
        file2: null,
        proses3: "",
        file3: null,
        proses4: "",
        file4: null,
    });

    const [step, setStep] = useState(1);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (index, files) => {
        const fieldName = `file${index}`;
        setData(fieldName, files[0]);
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("proyek-guru.store"));
    };

    useEffect(() => {
        console.log("Semua File Terupload", uploadedFiles);
        console.log("File1 Didata", data.file1);
        console.log("File2 Didata", data.file2);
        console.log("File3 Didata", data.file3);
        console.log("File4 Didata", data.file4);
    }, [uploadedFiles]);

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Proyek" />
            <h1 className="font-medium text-4xl text-center mb-24">
                TAMBAH PROYEK BARU
            </h1>
            <form className="block">
                <div className="bg-white rounded-lg p-8 w-4/5 mx-auto">
                    {step === 1 && (
                        <>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="nama"
                                >
                                    Nama Proyek
                                </label>
                                <TextInput
                                    id="nama"
                                    type="text"
                                    name="nama"
                                    placeholder="Masukkan Nama Proyek..."
                                    className="w-full border-[#353535] bg-transparent"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                />
                            </div>
                            {/* TAHAP 1 START */}
                            <h1 className="font-semibold text-4xl my-8 text-center">
                                TAHAP 1
                            </h1>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="proses1"
                                >
                                    Proses
                                </label>
                                <TextInput
                                    id="proses1"
                                    type="text"
                                    name="proses1"
                                    placeholder="Masukkan Proses..."
                                    className="w-full border-[#353535] bg-transparent"
                                    value={data.proses1}
                                    onChange={(e) =>
                                        setData("proses1", e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="file1"
                                >
                                    File Materi
                                </label>
                                <UploadProyek
                                    onDrop={(files) => handleDrop(1, files)}
                                    uploadedFiles={uploadedFiles}
                                    indexFiles={0}
                                />
                            </div>
                            {/* TAHAP 1 END */}
                        </>
                    )}
                    {/* TAHAP 2 START */}
                    {step === 2 && (
                        <>
                            <h1 className="font-semibold text-4xl text-center">
                                TAHAP 2
                            </h1>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="proses2"
                                >
                                    Proses
                                </label>
                                <TextInput
                                    id="proses2"
                                    type="text"
                                    name="proses2"
                                    placeholder="Masukkan Proses..."
                                    className="w-full border-[#353535] bg-transparent"
                                    value={data.proses2}
                                    onChange={(e) =>
                                        setData("proses2", e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="file2"
                                >
                                    File Materi
                                </label>
                                <UploadProyek
                                    onDrop={(files) => handleDrop(2, files)}
                                    uploadedFiles={uploadedFiles}
                                    indexFiles={1}
                                />
                            </div>
                            {/* TAHAP 2 END */}
                        </>
                    )}
                    {step === 3 && (
                        <>
                            {/* TAHAP 3 START */}
                            <h1 className="font-semibold text-4xl text-center">
                                TAHAP 3
                            </h1>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="proses3"
                                >
                                    Proses
                                </label>
                                <TextInput
                                    id="proses3"
                                    type="text"
                                    name="proses3"
                                    placeholder="Masukkan Proses..."
                                    className="w-full border-[#353535] bg-transparent"
                                    value={data.proses3}
                                    onChange={(e) =>
                                        setData("proses3", e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="file3"
                                >
                                    File Materi
                                </label>
                                <UploadProyek
                                    onDrop={(files) => handleDrop(3, files)}
                                    uploadedFiles={uploadedFiles}
                                    indexFiles={2}
                                />
                            </div>
                            {/* TAHAP 3 END */}
                        </>
                    )}
                    {step === 4 && (
                        <>
                            {/* TAHAP 4 START */}
                            <h1 className="font-semibold text-4xl text-center">
                                TAHAP 4
                            </h1>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="proses4"
                                >
                                    Proses
                                </label>
                                <TextInput
                                    id="proses4"
                                    type="text"
                                    name="proses4"
                                    placeholder="Masukkan Proses..."
                                    className="w-full border-[#353535] bg-transparent"
                                    value={data.proses4}
                                    onChange={(e) =>
                                        setData("proses4", e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-3xl font-semibold mb-2"
                                    htmlFor="file4"
                                >
                                    File Materi
                                </label>
                                <UploadProyek
                                    onDrop={(files) => handleDrop(4, files)}
                                    uploadedFiles={uploadedFiles}
                                    indexFiles={3}
                                />
                            </div>
                            {/* TAHAP 4 END */}
                        </>
                    )}
                    <div className="flex justify-between mt-8 *:text-xl *:flex *:items-center *:gap-2">
                        {step !== 1 && (
                            <button
                                type="button"
                                onClick={() => setStep(step - 1)}
                                className="text-red-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                                </svg>
                                Back
                            </button>
                        )}
                        {step < 4 && (
                            <button
                                type="button"
                                onClick={() => setStep(step + 1)}
                                className="text-blue-600 ml-auto"
                            >
                                Next
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
                <button
                    type="button"
                    className="bg-first py-2 px-16 mt-8 text-white text-xl font-semibold block w-fit mx-auto"
                    onClick={handleFormSubmit}
                >
                    Kirim
                </button>
            </form>
        </SubLayoutGuru>
    );
}
