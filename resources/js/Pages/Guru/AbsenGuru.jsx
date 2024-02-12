import { Head } from "@inertiajs/react";
import { QRAbsensi, placeholderQR } from "../../../assets";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";

export default function AbsenGuru({ auth }) {
    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Absen" />
            <h1 className="mb-24 text-4xl font-medium text-center">ABSENSI</h1>
            <img className="mx-auto mb-6 w-80" src={QRAbsensi} alt="" />
            <a
                className="inline-block w-full mb-6 text-2xl font-medium text-center text-blue-600"
                href="http://bit.ly/absensiDASJURSMKN6"
                target="_blank"
            >
                http://bit.ly/absensiDASJURSMKN6
            </a>
            <p className="text-4xl font-medium text-center">
                Setiap kehadiran adalah langkah menuju kesuksesan
            </p>
        </SubLayoutGuru>
    );
}
