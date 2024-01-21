import SubLayout from "@/Layouts/SubLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { bgSekolah } from "../../../assets";
import { useEffect } from "react";

export default function MateriSiswa({ auth }) {
    const { materis } = usePage().props;

    useEffect(() => {
        console.log(materis);
    }, []);

    return (
        <SubLayout auth={auth}>
            <Head title="Materi" />
            <h1 className="font-medium text-4xl text-center mb-4">
                MATERI DESAIN LOGO
            </h1>
            <p className="text-xl mb-24 text-center">
                Mari belajar bersama menciptakan identitas visual yang
                menginspirasi melalui desain logo
            </p>
            <div className="grid grid-cols-3 justify-items-center gap-y-12">
                {materis.map((materi, index) => {
                    return (
                        <Link href={route("materi.show", materi.id)}>
                            <div
                                key={index}
                                className="h-80 w-72 bg-red-500 relative"
                            >
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
                    );
                })}
            </div>
        </SubLayout>
    );
}
