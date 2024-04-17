import { Head, usePage } from "@inertiajs/react";
import BackButton from "@/Components/General/BackButton";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { url } from "../../../utility/url";

export default function LihatMateriSiswa({ auth }) {
    const { materis: materi } = usePage().props;

    console.log(materi);

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Materi" />
            <div className="flex items-start mb-24">
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
            <embed
                className="rounded-xl w-4/5 h-[30rem] mx-auto mt-12"
                src={`${url}/Materi/video/${materi[0].video}`}
            />
        </SubLayoutGuru>
    );
}
