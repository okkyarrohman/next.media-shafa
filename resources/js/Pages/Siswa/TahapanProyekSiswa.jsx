import BackButton from "@/Components/General/BackButton";
import SubLayout from "@/Layouts/SubLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { url } from "../../../utility/url";
import Upload from "@/Components/General/Upload";

export default function TahapanProyekSiswa({ auth }) {
    const { proyeks, hasilProyeks } = usePage().props;
    const currentStep = localStorage.getItem("CURRENT_STEP_PROYEK");

    const filteredHasilProyeksById = hasilProyeks.filter(
        (hasilProyek) => hasilProyek.user_id == auth.user.id
    );

    const { data, setData, post, patch } = useForm({
        user_id: auth.user.id,
        proyek_id: proyeks[0].id,
        answer1:
            filteredHasilProyeksById.length != 0
                ? filteredHasilProyeksById[0].answer1
                : "",
        answer2:
            filteredHasilProyeksById.length != 0
                ? filteredHasilProyeksById[0].answer2
                : null,
        answer3:
            filteredHasilProyeksById.length != 0
                ? filteredHasilProyeksById[0].answer3
                : null,
        answer4:
            filteredHasilProyeksById.length != 0
                ? filteredHasilProyeksById[0].answer4
                : null,
    });

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (index, files) => {
        const fieldName = `answer${index}`;
        setData(fieldName, files[0]);
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const handleProyekStore = (e) => {
        e.preventDefault();
        post(route("proyek.store"));
    };

    const handleProyekUpdate = (e) => {
        e.preventDefault();
        patch(route("proyek.update", filteredHasilProyeksById[0].id));
    };

    useEffect(() => {
        console.log("Proyek", proyeks);
        console.log("Hasil By User", filteredHasilProyeksById);
    }, [currentStep]);

    return (
        <SubLayout auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    TAHAP {currentStep} <br />
                    {proyeks[0][`proses${currentStep}`]}
                </h1>
            </div>
            <embed
                className="rounded-xl w-4/5 h-[60rem] mx-auto mb-24"
                src={`${url}/Proyek/file${currentStep}/${
                    proyeks[0][`file${currentStep}`]
                }`}
                type="application/pdf"
            />

            <form className="w-4/5 mx-auto">
                <textarea
                    className="w-4/5 block mx-auto border border-black rounded-lg"
                    placeholder="Masukkan Jawaban..."
                    name="answer1"
                    id="answer1"
                    rows="10"
                    value={data.answer1}
                    onChange={(e) => setData("answer1", e.target.value)}
                ></textarea>
                <div className="flex gap-12 justify-center mt-16">
                    <Link
                        href={route("proyek.index")}
                        as="button"
                        className="border border-first bg-white font-semibold py-4 px-16 rounded-lg text-first"
                    >
                        Batal
                    </Link>
                    <button
                        type="button"
                        className="bg-first font-semibold py-4 px-16 rounded-lg text-white"
                        onClick={
                            filteredHasilProyeksById.length != 0
                                ? handleProyekUpdate
                                : handleProyekStore
                        }
                    >
                        Kirim
                    </button>
                </div>
            </form>

            <form className="w-4/5 mx-auto">
                {/* {currentStep == 1 && ( */}
                <textarea
                    className="w-4/5 block mx-auto border border-black rounded-lg"
                    placeholder="Masukkan Jawaban..."
                    name="answer1"
                    id="answer1"
                    rows="10"
                    value={data.answer1}
                    onChange={(e) => setData("answer1", e.target.value)}
                ></textarea>
                {/* )} */}
                {/* {currentStep == 2 && ( */}
                <Upload
                    onDrop={(files) => handleDrop(2, files)}
                    uploadedFiles={uploadedFiles}
                />
                {/* )} */}
                {/* {currentStep == 3 && ( */}
                <Upload
                    onDrop={(files) => handleDrop(3, files)}
                    uploadedFiles={uploadedFiles}
                />
                {/* )} */}
                {/* {currentStep == 4 && ( */}
                <Upload
                    onDrop={(files) => handleDrop(4, files)}
                    uploadedFiles={uploadedFiles}
                />
                {/* )} */}
                <div className="flex gap-12 justify-center mt-16">
                    <Link
                        href={route("proyek.index")}
                        as="button"
                        className="border border-first bg-white font-semibold py-4 px-16 rounded-lg text-first"
                    >
                        Batal
                    </Link>
                    <button
                        type="button"
                        className="bg-first font-semibold py-4 px-16 rounded-lg text-white"
                        onClick={
                            filteredHasilProyeksById.length != 0
                                ? handleProyekUpdate
                                : handleProyekStore
                        }
                    >
                        Kirim
                    </button>
                </div>
            </form>
        </SubLayout>
    );
}
