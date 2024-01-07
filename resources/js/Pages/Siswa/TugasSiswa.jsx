import BackButton from "@/Components/General/BackButton";
import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";
import { placeholderPDF } from "../../../assets";
import Upload from "@/Components/General/Upload";
import { useState } from "react";

export default function TugasSiswa() {
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
            <Head title="Tugas" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    TUGAS 1
                </h1>
            </div>
            <embed
                className="rounded-xl w-4/5 h-[60rem] mx-auto mb-24"
                src={placeholderPDF}
                type="application/pdf"
            />
            <Upload onDrop={handleDrop} uploadedFiles={uploadedFiles} />
        </SubLayout>
    );
}
