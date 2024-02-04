import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";
import { placeholderQR } from "../../../assets";

export default function AbsenSiswa({ auth }) {
    return (
        <SubLayout auth={auth}>
            <Head title="Absen" />
            <h1 className="font-medium text-4xl text-center mb-24">ABSENSI</h1>
            <img className="w-80 mx-auto mb-12" src={placeholderQR} alt="" />
            <p className="font-medium text-4xl text-center">
                Setiap kehadiran adalah langkah menuju kesuksesan
            </p>
        </SubLayout>
    );
}
