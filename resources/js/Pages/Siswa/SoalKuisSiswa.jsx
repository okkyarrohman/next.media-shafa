import SubLayout from "@/Layouts/SubLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import BackButton from "@/Components/General/BackButton";
import { url } from "../../../utility/url";

export default function SoalKuisSiswa({ auth }) {
    const { kategoris } = usePage().props;

    const { data, setData, post } = useForm({
        kategori_id: kategoris[0].id,
    });

    const [currentSoal, setCurrentSoal] = useState(0);
    const [jawaban, setJawaban] = useState([]);

    const handleJawabanChange = (event) => {
        const { name, value } = event.target;
        const updatedJawaban = { ...jawaban };
        updatedJawaban.soal = {
            ...updatedJawaban.soal,
            [name]: value,
        };
        updatedJawaban.kategori_id = data.kategori_id;
        setJawaban(updatedJawaban);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("kuis.store", jawaban));
    };

    const handlePrevClick = () => {
        setCurrentSoal(currentSoal - 1);
    };

    const handleNextClick = () => {
        setCurrentSoal(currentSoal + 1);
    };

    return (
        <SubLayout auth={auth}>
            <Head title="Kuis" />
            <div className="flex items-center mb-10">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    {kategoris[0].kuis}
                </h1>
            </div>
            <form>
                {kategoris.map((kategori, index) => {
                    return (
                        <div key={index}>
                            {kategori.soal[currentSoal].gambar !== null && (
                                <img
                                    className="w-2/5 mx-auto mb-8"
                                    src={`${url}/Soal/gambar/${kategori.soal[currentSoal].gambar}`}
                                    alt="gambar soal"
                                />
                            )}
                            <p className="text-2xl text-center w-4/5 mx-auto mb-12">
                                {kategori.soal[currentSoal].nama}
                            </p>
                            <div className="flex flex-col gap-4">
                                {kategori.soal[currentSoal].opsi.map(
                                    (opsi, opsiIndex) => {
                                        return (
                                            <label
                                                key={opsiIndex}
                                                className={`w-full px-8 py-5 rounded ${
                                                    jawaban.soal &&
                                                    jawaban.soal[
                                                        kategori.soal[
                                                            currentSoal
                                                        ].id
                                                    ] == opsi.id
                                                        ? "bg-first"
                                                        : "bg-[#D1D1D1]"
                                                }`}
                                                htmlFor={`option-${opsi.id}`}
                                            >
                                                <input
                                                    id={`option-${opsi.id}`}
                                                    name={
                                                        kategori.soal[
                                                            currentSoal
                                                        ].id
                                                    }
                                                    type="radio"
                                                    value={opsi.id}
                                                    checked={
                                                        jawaban.soal &&
                                                        jawaban.soal[
                                                            kategori.soal[
                                                                currentSoal
                                                            ].id
                                                        ] == opsi.id
                                                    }
                                                    onChange={
                                                        handleJawabanChange
                                                    }
                                                    className="hidden"
                                                />
                                                <span>{opsi.nama}</span>
                                            </label>
                                        );
                                    }
                                )}
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
                                {currentSoal + 1 === kategori.soal.length ? (
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 bg-[#D1D1D1] py-4 px-12 ml-auto"
                                        onClick={handleFormSubmit}
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
                        </div>
                    );
                })}
            </form>
        </SubLayout>
    );
}
