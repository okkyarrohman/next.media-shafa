import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, router, usePage } from "@inertiajs/react";

export default function SoalKuisGuru({ auth }) {
    const { soals } = usePage().props;
    const kategoriId = localStorage.getItem("ID_KATEGORI_KUIS");

    const filteredSoalsById = soals.filter(
        (soal) => soal.kategori_id == kategoriId
    );

    const handleSoalClick = (id) => {
        localStorage.setItem("ID_SOAL_KUIS", id);
        router.visit("/opsi-kuis");
    };

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Kuis" />
            <div className="flex items-center">
                <Link href={route("kategori-kuis.index")}>
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
                <h1 className="font-medium text-4xl text-center w-full">
                    SOAL KUIS
                </h1>
            </div>
            <Link href={route("soal-kuis.create")}>
                <button className="bg-first text-white py-3 px-10 rounded-full font-medium text-lg w-fit mx-auto block my-12">
                    Tambah Soal Kuis Baru
                </button>
            </Link>
            {filteredSoalsById.length > 0 ? (
                filteredSoalsById.map((soal, index) => {
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
                                    <button
                                        type="button"
                                        onClick={() => handleSoalClick(soal.id)}
                                    >
                                        <p className="text-lg uppercase">
                                            {soal.nama}
                                        </p>
                                    </button>
                                </div>
                                <div className="flex items-center gap-20">
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
                                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                        {soal.gambar == null
                                            ? "Tidak Ada Gambar"
                                            : soal.gambar}
                                    </p>
                                    <Link
                                        method="DELETE"
                                        href={route(
                                            "soal-kuis.destroy",
                                            soal.id
                                        )}
                                        as="button"
                                        className="flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Delete
                                    </Link>
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
                        Belum Ada Soal Segera Tambahkan!
                    </h1>
                </div>
            )}
        </SubLayoutGuru>
    );
}
