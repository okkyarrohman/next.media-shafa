import SubLayout from "@/Layouts/SubLayout";
import { Head, usePage } from "@inertiajs/react";
import { placeholderPDF } from "../../../assets";
import BackButton from "@/Components/General/BackButton";
import { useEffect } from "react";
import { url } from "../../../utility/url";

export default function LihatMateriSiswa({ auth }) {
    const { materis: materi } = usePage().props;

    useEffect(() => {
        console.log(materi);
    }, []);

    return (
        <SubLayout auth={auth}>
            <Head title="Materi" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    {materi[0].nama}
                </h1>
            </div>
            <embed
                className="rounded-xl w-4/5 h-[60rem] mx-auto"
                src={`${url}/Materi/file/${materi[0].file}`}
                type="application/pdf"
            />
        </SubLayout>
    );
}
