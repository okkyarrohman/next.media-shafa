import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";
import { placeholderPDF } from "../../../assets";
import BackButton from "@/Components/General/BackButton";

export default function DetailMateriSiswa() {
    return (
        <SubLayout>
            <Head title="Materi" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    GOLDEN RATIO
                </h1>
            </div>
            <embed
                className="rounded-xl w-4/5 h-[60rem] mx-auto"
                src={placeholderPDF}
                type="application/pdf"
            />
        </SubLayout>
    );
}
