import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";
import { QRAbsensi, placeholderQR } from "../../../assets";

export default function AbsenSiswa({ auth }) {
    return (
        <SubLayout auth={auth}>
            <Head title="Absen" />
            <h1 className="mb-24 text-4xl font-medium text-center">ABSENSI</h1>
            <img className="mx-auto mb-12 w-80" src={QRAbsensi} alt="" />
            <p className="text-4xl font-medium text-center">
                Setiap kehadiran adalah langkah menuju kesuksesan
            </p>
        </SubLayout>
    );
}
