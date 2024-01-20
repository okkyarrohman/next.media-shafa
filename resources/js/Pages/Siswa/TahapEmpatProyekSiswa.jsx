import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";
import { placeholderPDF } from "../../../assets";
import BackButton from "@/Components/General/BackButton";
import { useState } from "react";
import Upload from "@/Components/General/Upload";

export default function TahapEmpatProyekSiswa() {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (files) => {
        setUploadedFiles(files);
        // setFormData((prevData) => ({
        //   ...prevData,
        //   dokumen_surat_tugas: files[0],
        // }));
        console.log(uploadedFiles);
    };

    return (
        <SubLayout>
            <Head title="Proyek" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    TAHAP 4 <br />
                    PENGEMBANGAN PROYEK
                </h1>
            </div>
            <embed
                className="rounded-xl w-4/5 h-[60rem] mx-auto"
                src={placeholderPDF}
                type="application/pdf"
            />
            <div className="w-4/5 mx-auto">
                <Upload onDrop={handleDrop} uploadedFiles={uploadedFiles} />
            </div>
            <div className="flex gap-12 justify-center mt-16">
                <button
                    type="button"
                    className="border border-first bg-white font-semibold py-4 px-16 rounded-lg text-first"
                >
                    Batal
                </button>
                <button
                    type="submit"
                    className="bg-first font-semibold py-4 px-16 rounded-lg text-white"
                >
                    Kirim
                </button>
            </div>
        </SubLayout>
    );
}
