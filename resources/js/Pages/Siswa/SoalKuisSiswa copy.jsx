import SubLayout from "@/Layouts/SubLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { imageSoal1 } from "../../../assets";
import BackButton from "@/Components/General/BackButton";

export default function SoalKuisSiswa({ auth }) {
    const { kategoris: kategori } = usePage().props;

    useEffect(() => {
        console.log(kategori);
    }, []);

    const [currentSoal, setCurrentSoal] = useState(0);
    const [jawaban, setJawaban] = useState([]);

    const handleJawabanChange = (event) => {
        const { name, value } = event.target;
        const updatedJawaban = { ...jawaban };
        updatedJawaban.soal = {
            ...updatedJawaban.soal,
            [name]: value,
        };
        updatedJawaban.kategori_kuis_id = data.kategori_kuis_id;
        setJawaban(updatedJawaban);
    };

    const handlePrevClick = () => {
        setCurrentSoal(currentSoal - 1);
    };

    const handleNextClick = () => {
        setCurrentSoal(currentSoal + 1);
    };

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const data = {
        soal: "An interface design application that runs in the browser with team-based collaborative design projects",
        foto_soal: imageSoal1,
        opsi_a: "A. FIGMA",
        opsi_b: "B. SKETCH",
        opsi_c: "C. ADOBE XD",
        opsi_d: "D. INVISION",
        opsi_e: "E. ADOBE PHOTOSHOP",
    };

    const opsiList = Object.keys(data)
        .filter((key) => key.startsWith("opsi_"))
        .map((key) => data[key]);

    return (
        <SubLayout auth={auth}>
            <Head title="Kuis" />
            <div className="flex items-center mb-10">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    {kategori[0].kuis}
                </h1>
            </div>
            {kategori[0].soal[currentSoal].gambar !== null && (
                <img
                    className="w-2/5 mx-auto mb-8"
                    src={kategori[0].soal[currentSoal].gambar}
                    alt="gambar soal"
                />
            )}
            <p className="text-2xl text-center w-4/5 mx-auto mb-12">
                {kategori[0].soal[currentSoal].nama}
            </p>
            <div className="flex flex-col gap-4">
                {kategori[0].soal[currentSoal].opsi.map((opsiItem, index) => {
                    return (
                        <label
                            key={index}
                            className={`w-full px-8 py-5 rounded ${
                                selectedOption === data.opsi_a
                                    ? "bg-first"
                                    : "bg-[#D1D1D1]"
                            }`}
                            htmlFor="opsi_a"
                        >
                            <input
                                id="opsi_a"
                                name="opsi_a"
                                type="radio"
                                value={data.opsi_a}
                                checked={selectedOption === data.opsi_a}
                                onChange={handleOptionChange}
                                className="hidden"
                            />
                            <span>{opsiItem.nama}</span>
                        </label>
                    );
                })}
            </div>
            <div className="flex justify-between mt-16">
                {currentSoal === 0 ? null : (
                    <button
                        type="button"
                        className="flex items-center gap-2 bg-[#D1D1D1] py-4 px-12"
                        onClick={handlePrevClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 rotate-180"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Prev
                    </button>
                )}
                {currentSoal + 1 === kategori[0].soal.length ? (
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#D1D1D1] py-4 px-12 ml-auto"
                    >
                        Submit
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                ) : (
                    <button
                        type="button"
                        className="flex items-center gap-2 bg-[#D1D1D1] py-4 px-12 ml-auto"
                        onClick={handleNextClick}
                    >
                        Next
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </SubLayout>
    );
}
