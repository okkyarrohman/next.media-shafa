import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, usePage } from "@inertiajs/react";

export default function ProyekGuru({ auth }) {
    const { proyeks } = usePage().props;

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-center">
                <Link href={route("test-guru")} as="button">
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
                    PROYEK
                </h1>
            </div>
            <Link
                href={route("proyek-guru.create")}
                as="button"
                className="bg-first text-white py-3 px-10 rounded-full font-medium text-lg w-fit mx-auto block my-12"
            >
                Tambah Proyek Baru
            </Link>
            {proyeks.map((proyek, index) => {
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
                                {/* <button
                                    onClick={() =>
                                        handleKategoriClick(proyek.id)
                                    }
                                > */}
                                <p className="text-lg text-left uppercase w-96 line-clamp-1">
                                    {proyek.nama}
                                </p>
                                {/* </button> */}
                            </div>
                            <div className="flex items-center gap-20">
                                <Link
                                    href={route("proyek-guru.show", proyek.id)}
                                    as="button"
                                    className="py-1 px-3 bg-first text-white rounded-full"
                                >
                                    Lihat Hasil
                                </Link>
                                <Link
                                    method="DELETE"
                                    href={route(
                                        "proyek-guru.destroy",
                                        proyek.id
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
            })}
        </SubLayoutGuru>
    );
}
