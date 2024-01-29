import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function DetailHasilKuisGuru({ auth }) {
    const { hasils } = usePage().props;

    useEffect(() => {
        console.log(hasils);
    }, []);

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Kuis" />
            <div className="flex items-center mb-24">
                <Link href={route("hasil-kuis.index")} as="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                </Link>
                <div className="*:text-center w-full">
                    <h1 className="text-4xl font-semibold">
                        {hasils[0].kategori.kuis}
                    </h1>
                    <h1 className="text-2xl font-medium">
                        Jawaban : {hasils[0].user.name}
                    </h1>
                    <h1 className="text-2xl font-medium">
                        Nilai : {hasils[0].total_points}
                    </h1>
                </div>
            </div>
            {hasils[0].soal.map((soal, index) => {
                const highestPointOpsi = soal.opsi.reduce(
                    (maxOpsi, currentOpsi) => {
                        return currentOpsi.point > maxOpsi.point
                            ? currentOpsi
                            : maxOpsi;
                    },
                    soal.opsi[0]
                );

                const opsiIdPivot = soal.pivot.opsi_id;

                return (
                    <div key={index} className="w-4/5 mx-auto">
                        <p className="text-xl font-medium">
                            {index + 1 + ". " + soal.nama}
                        </p>
                        {soal.opsi.map((opsi, index) => {
                            const convertIndexToChar = (index) => {
                                return String.fromCharCode(65 + index);
                            };
                            return (
                                <div key={index}>
                                    <p
                                        className={`pl-10 my-2 ${
                                            opsiIdPivot == opsi.id
                                                ? opsiIdPivot ==
                                                  highestPointOpsi.id
                                                    ? "text-green-600 font-semibold"
                                                    : "text-red-600 font-semibold"
                                                : ""
                                        }`}
                                    >
                                        {convertIndexToChar(index) +
                                            ". " +
                                            opsi.nama}
                                    </p>
                                </div>
                            );
                        })}
                        <p className="my-5 pl-10 text-green-600 font-semibold">
                            {" "}
                            Jawaban Benar : {highestPointOpsi.nama}
                        </p>
                    </div>
                );
            })}
        </SubLayoutGuru>
    );
}
