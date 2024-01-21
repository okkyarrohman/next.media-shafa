import { Head } from "@inertiajs/react";
import { placeholderQR } from "../../../assets";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";

export default function AbsenGuru({ auth }) {
    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Absen" />
            <h1 className="font-medium text-4xl text-center mb-24">ABSENSI</h1>
            <img
                className="[w-30rem] mx-auto mb-12"
                src={placeholderQR}
                alt=""
            />
            <p className="font-medium text-4xl text-center">
                Setiap kehadiran adalah langkah menuju kesuksesan
            </p>
        </SubLayoutGuru>
    );
}
