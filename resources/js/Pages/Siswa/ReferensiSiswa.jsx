import SubLayout from "@/Layouts/SubLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function ReferensiSiswa({ auth }) {
    const { referensis } = usePage().props;

    useEffect(() => {
        console.log(referensis);
    }, []);

    return (
        <SubLayout auth={auth}>
            <Head title="Referensi" />
            <h1 className="font-medium text-4xl text-center mb-24">
                REFERENSI DESIGN LOGO
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-7">
                {referensis.map((referensi, index) => {
                    return (
                        <img
                            key={index}
                            className="max-h-80"
                            src={referensi.gambar}
                            alt={`referensi logo ${index}`}
                        />
                    );
                })}
            </div>
        </SubLayout>
    );
}
