import Upload from "@/Components/General/Upload";
import UploadProyek from "@/Components/General/UploadProyek";
import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TambahMateriGuru({ auth }) {
    const { data, setData, post } = useForm({
        nama: "",
        file: null,
        video: null,
        status: "",
    });

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (id, files) => {
        setData(id, files[0]);
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };
    // const [uploadedVideos, setUploadedVideos] = useState([]);

    // const handleDrop = (files) => {
    //     setUploadedFiles(files);
    //     setData((prevData) => ({
    //         ...prevData,
    //         file: files[0],
    //     }));
    //     console.log(uploadedFiles);
    // };

    // const handleDropVideo = (files) => {
    //     setUploadedVideos(files);
    //     setData((prevData) => ({
    //         ...prevData,
    //         video: files[0],
    //     }));
    //     console.log(uploadedVideos);
    // };

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
                {/* <Upload onDrop={handleDrop} uploadedFiles={uploadedFiles} /> */}
                <UploadProyek
                    onDrop={(files) => handleDrop("file", files)}
                    uploadedFiles={uploadedFiles}
                    indexFiles={0}
                />
                <label
                    className="block text-3xl font-semibold mb-2 mt-4"
                    htmlFor="video"
                >
                    File Video
                </label>
                <UploadProyek
                    onDrop={(files) => handleDrop("video", files)}
                    uploadedFiles={uploadedFiles}
                    indexFiles={1}
                />
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
