import { Head, Link, usePage } from "@inertiajs/react";
import { bgSekolah } from "../../../assets";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";

export default function MateriGuru({ auth }) {
    const { materis } = usePage().props;

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Materi" />
            <h1 className="font-medium text-4xl text-center mb-4">
                MATERI DESAIN LOGO
            </h1>
            <p className="text-xl text-center">
                Mari belajar bersama menciptakan identitas visual yang
                menginspirasi melalui desain logo
            </p>
            <Link href={route("materi-guru.create")}>
                <button className="bg-first text-white py-3 px-12 rounded-full font-semibold text-2xl w-fit mx-auto block my-12">
                    Unggah Materi Baru
                </button>
            </Link>
            <div className="grid grid-cols-3 justify-items-center gap-y-16">
                {materis.map((materi, index) => {
                    return (
                        <div key={index}>
                            <Link href={route("materi-guru.show", materi.id)}>
                                <div className="h-80 w-72 bg-red-500 relative">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src={bgSekolah}
                                        alt="cover image"
                                    />
                                    <div className="w-full h-28 bg-black bg-opacity-80 absolute bottom-0 py-3 px-3">
                                        <p className="text-lg font-medium text-white line-clamp-3 capitalize flex items-center justify-center h-full">
                                            {materi.nama}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                            method="DELETE"
                                href={route("materi-guru.destroy", materi.id)}
                            >
                                <button
                                    type="button"
                                    className="font-semibold flex items-center gap-2 mt-2 ml-auto"
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
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </SubLayoutGuru>
    );
}
