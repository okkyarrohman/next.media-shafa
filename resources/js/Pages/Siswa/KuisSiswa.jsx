import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { imageSoal1 } from "../../../assets";
import BackButton from "@/Components/General/BackButton";

export default function KuisSiswa() {
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
        <SubLayout>
            <Head title="Kuis" />
            <div className="flex items-center mb-10">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    KUIS 1
                </h1>
            </div>
            {data.foto_soal !== null && (
                <img
                    className="w-2/5 mx-auto mb-8"
                    src={data.foto_soal}
                    alt=""
                />
            )}
            <p className="text-2xl text-center w-4/5 mx-auto mb-12">
                {data.soal}
            </p>
            <div className="flex flex-col gap-4">
                <label
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
                    <span>{data.opsi_a}</span>
                </label>
                <label
                    className={`w-full px-8 py-5 rounded ${
                        selectedOption === data.opsi_b
                            ? "bg-first"
                            : "bg-[#D1D1D1]"
                    }`}
                    htmlFor="opsi_b"
                >
                    <input
                        id="opsi_b"
                        name="opsi_b"
                        type="radio"
                        value={data.opsi_b}
                        checked={selectedOption === data.opsi_b}
                        onChange={handleOptionChange}
                        className="hidden"
                    />
                    <span>{data.opsi_b}</span>
                </label>
                <label
                    className={`w-full px-8 py-5 rounded ${
                        selectedOption === data.opsi_c
                            ? "bg-first"
                            : "bg-[#D1D1D1]"
                    }`}
                    htmlFor="opsi_c"
                >
                    <input
                        id="opsi_c"
                        name="opsi_c"
                        type="radio"
                        value={data.opsi_c}
                        checked={selectedOption === data.opsi_c}
                        onChange={handleOptionChange}
                        className="hidden"
                    />
                    <span>{data.opsi_c}</span>
                </label>
                <label
                    className={`w-full px-8 py-5 rounded ${
                        selectedOption === data.opsi_d
                            ? "bg-first"
                            : "bg-[#D1D1D1]"
                    }`}
                    htmlFor="opsi_d"
                >
                    <input
                        id="opsi_d"
                        name="opsi_d"
                        type="radio"
                        value={data.opsi_d}
                        checked={selectedOption === data.opsi_d}
                        onChange={handleOptionChange}
                        className="hidden"
                    />
                    <span>{data.opsi_d}</span>
                </label>
                <label
                    className={`w-full px-8 py-5 rounded ${
                        selectedOption === data.opsi_e
                            ? "bg-first"
                            : "bg-[#D1D1D1]"
                    }`}
                    htmlFor="opsi_e"
                >
                    <input
                        id="opsi_e"
                        name="opsi_e"
                        type="radio"
                        value={data.opsi_e}
                        checked={selectedOption === data.opsi_e}
                        onChange={handleOptionChange}
                        className="hidden"
                    />
                    <span>{data.opsi_e}</span>
                </label>
            </div>
            <div className="flex justify-between mt-16">
                <button className="flex items-center gap-2 bg-[#D1D1D1] py-4 px-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 rotate-180"
                    >
                        <path
                            fillEule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipEule="evenodd"
                        />
                    </svg>
                    Previous
                </button>
                <button className="flex items-center gap-2 bg-[#D1D1D1] py-4 px-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillEule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipEule="evenodd"
                        />
                    </svg>
                    Next
                </button>
            </div>
        </SubLayout>
    );
}
