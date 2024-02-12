import SubLayout from "@/Layouts/SubLayout";
import { Head, usePage } from "@inertiajs/react";
import { url } from "../../../utility/url";

export default function ReferensiSiswa({ auth }) {
    const { referensis } = usePage().props;

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
                            src={`${url}/Referensi/gambar/${referensi.gambar}`}
                            alt={`referensi logo ${index}`}
                        />
                    );
                })}
            </div>
        </SubLayout>
    );
}
