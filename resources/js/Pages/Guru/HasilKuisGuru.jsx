import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { formatDate } from "../../../utility/formatDate";

export default function HasilKuisGuru({ auth }) {
    const { kategoris, hasils } = usePage().props;
    const kategoriId = localStorage.getItem("ID_KATEGORI_KUIS");

    const filteredKategoriById = kategoris.filter(
        (kategori) => kategori.id == kategoriId
    );

    const filteredHasilById = hasils.filter(
        (hasil) => hasil.kategori_id == kategoriId
    );

    useEffect(() => {
        console.log(filteredHasilById);
        console.log("Kategoris", kategoris);
    }, []);

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Kuis" />
            <div className="flex items-start mb-24">
                <Link href={route("kategori-kuis.index")} as="button">
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
                <h1 className="font-medium text-4xl text-center w-full uppercase">
                    HASIL KUIS <br />
                    {filteredKategoriById[0].kuis}
                </h1>
            </div>
            {filteredHasilById.length > 0 ? (
                filteredHasilById.map((hasil, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full py-4 border-b-2 border-[#A4A4A4]"
                        >
                            <div className="px-8  flex items-center justify-between">
                                <div className="flex items-center gap-12">
                                    <div className="size-14 rounded-full bg-yellow-500 flex justify-center items-center font-semibold text-lg">
                                        {index + 1}
                                    </div>
                                    <Link
                                        href={route(
                                            "hasil-kuis.show",
                                            hasil.id
                                        )}
                                    >
                                        <p className="text-lg uppercase">
                                            {hasil.user.name}
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex gap-20">
                                    <p className="text-lg py-2 px-4 flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                            />
                                        </svg>
                                        {formatDate(hasil.created_at)}
                                    </p>
                                    <p className="text-lg py-2 px-4 bg-first rounded-full">
                                        {hasil.total_points}/100
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-32 h-32 mx-auto"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <h1 className="text-5xl font-semibold text-center">
                        Belum Ada Yang Mengerjakan Kuis!
                    </h1>
                </div>
            )}
        </SubLayoutGuru>
    );
}
