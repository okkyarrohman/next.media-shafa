import BackButton from "@/Components/General/BackButton";
import SubLayout from "@/Layouts/SubLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { url } from "../../../utility/url";
import UploadTes from "@/Components/General/UploadTes";

export default function TahapanProyekSiswa({ auth }) {
    const { proyeks, hasilProyeks } = usePage().props;
    const currentStep = localStorage.getItem("CURRENT_STEP_PROYEK");

    const filteredHasilProyeksById = hasilProyeks.find(
        (hasilProyek) => hasilProyek.user_id == auth.user.id
    );

    useEffect(() => {
        console.log(filteredHasilProyeksById);
    }, []);

    const { data, setData, post, patch } = useForm({
        id: filteredHasilProyeksById ? filteredHasilProyeksById.id : "",
        user_id: filteredHasilProyeksById
            ? filteredHasilProyeksById.user_id
            : auth.user.id,
        proyek_id: proyeks[0].id,
        answer1: filteredHasilProyeksById
            ? filteredHasilProyeksById.answer1
            : "",
        answer2: filteredHasilProyeksById
            ? filteredHasilProyeksById.answer2
            : null,
        answer3: filteredHasilProyeksById
            ? filteredHasilProyeksById.answer3
            : null,
        answer4: filteredHasilProyeksById
            ? filteredHasilProyeksById.answer4
            : null,
    });

    const [uploadedFiles, setUploadedFiles] = useState({
        answer2: null,
        answer3: null,
        answer4: null,
    });

    const handleDrop = (id, file) => {
        setUploadedFiles((prevFiles) => ({
            ...prevFiles,
            [id]: file,
        }));

        setData((prevData) => ({
            ...prevData,
            [id]: file,
        }));
    };

    const handleProyekStore = (e) => {
        e.preventDefault();
        console.log("STORE");
        post(route("proyek.store"));
    };

    const handleAnswer1Update = (e) => {
        e.preventDefault();
        console.log("UPDATE ANSWER 1");
        console.log("Data Yang Tersimpan", data);
        patch(route("proyek.update", filteredHasilProyeksById.id), data);
    };

    const handleAnswer2Update = (e) => {
        e.preventDefault();
        console.log("UPDATE ANSWER 2");
        post(route("proyek.answer2", filteredHasilProyeksById.id));
    };

    const handleAnswer3Update = (e) => {
        e.preventDefault();
        console.log("UPDATE ANSWER 3");
        post(route("proyek.answer3", filteredHasilProyeksById.id));
    };

    const handleAnswer4Update = (e) => {
        e.preventDefault();
        console.log("UPDATE ANSWER 4");
        post(route("proyek.answer4", filteredHasilProyeksById.id));
    };

    return (
        <SubLayout auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-start mb-24">
                <BackButton />
                <h1 className="w-full text-4xl font-medium text-center">
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
                {currentStep == 1 && (
                    <textarea
                        className="block w-4/5 mx-auto border border-black rounded-lg"
                        placeholder="Masukkan Jawaban..."
                        name="answer1"
                        id="answer1"
                        rows="10"
                        value={data.answer1}
                        onChange={(e) => setData("answer1", e.target.value)}
                    ></textarea>
                )}
                {currentStep == 2 && (
                    <UploadTes
                        onDrop={handleDrop}
                        uploadedFiles={uploadedFiles.answer2}
                        idUpload="answer2"
                    />
                )}
                {currentStep == 3 && (
                    <UploadTes
                        onDrop={handleDrop}
                        uploadedFiles={uploadedFiles.answer3}
                        idUpload="answer3"
                    />
                )}
                {currentStep == 4 && (
                    <UploadTes
                        onDrop={handleDrop}
                        uploadedFiles={uploadedFiles.answer4}
                        idUpload="answer4"
                    />
                )}
                <div className="flex justify-center gap-12 mt-16">
                    <Link
                        href={route("proyek.index")}
                        as="button"
                        className="px-16 py-4 font-semibold bg-white border rounded-lg border-first text-first"
                    >
                        Batal
                    </Link>
                    {currentStep == 1 && (
                        <button
                            type="button"
                            className={`px-16 py-4 font-semibold text-white rounded-lg ${
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi1 == "Terima"
                                    ? "bg-gray-500"
                                    : "bg-first"
                            }`}
                            disabled={
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi1 == "Terima"
                            }
                            onClick={
                                filteredHasilProyeksById
                                    ? currentStep == 1 && handleAnswer1Update
                                    : handleProyekStore
                            }
                        >
                            Kirim
                        </button>
                    )}

                    {currentStep == 2 && (
                        <button
                            type="button"
                            className={`px-16 py-4 font-semibold text-white rounded-lg ${
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi2 == "Terima"
                                    ? "bg-gray-500"
                                    : "bg-first"
                            }`}
                            disabled={
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi2 == "Terima"
                            }
                            onClick={
                                filteredHasilProyeksById &&
                                filteredHasilProyeksById != 0
                                    ? currentStep == 2 && handleAnswer2Update
                                    : handleProyekStore
                            }
                        >
                            Kirim
                        </button>
                    )}
                    {currentStep == 3 && (
                        <button
                            type="button"
                            className={`px-16 py-4 font-semibold text-white rounded-lg ${
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi3 == "Terima"
                                    ? "bg-gray-500"
                                    : "bg-first"
                            }`}
                            disabled={
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi3 == "Terima"
                            }
                            onClick={
                                filteredHasilProyeksById
                                    ? currentStep == 3 && handleAnswer3Update
                                    : handleProyekStore
                            }
                        >
                            Kirim
                        </button>
                    )}
                    {currentStep == 4 && (
                        <button
                            type="button"
                            className={`px-16 py-4 font-semibold text-white rounded-lg ${
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi4 == "Terima"
                                    ? "bg-gray-500"
                                    : "bg-first"
                            }`}
                            disabled={
                                hasilProyeks.length != 0 &&
                                hasilProyeks[0].konfirmasi4 == "Terima"
                            }
                            onClick={
                                filteredHasilProyeksById
                                    ? currentStep == 4 && handleAnswer3Update
                                    : handleProyekStore
                            }
                        >
                            Kirim
                        </button>
                    )}
                    {/* <button
                        type="button"
                        className="px-16 py-4 font-semibold text-white rounded-lg bg-first"
                        onClick={
                            filteredHasilProyeksById
                                ? currentStep == 1
                                    ? handleAnswer1Update
                                    : currentStep == 2
                                    ? handleAnswer2Update
                                    : currentStep == 3
                                    ? handleAnswer3Update
                                    : currentStep == 4
                                    ? handleAnswer4Update
                                    : handleProyekStore
                                : handleProyekStore
                        }
                    >
                        Kirim
                    </button> */}
                </div>
            </form>
        </SubLayout>
    );
}
