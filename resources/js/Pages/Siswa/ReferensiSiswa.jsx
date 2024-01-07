import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";

export default function ReferensiSiswa() {
    return (
        <SubLayout>
            <Head title="Referensi" />
            <h1 className="font-medium text-4xl text-center mb-24">
                REFERENSI DESIGN LOGO
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-7">
                <img
                    className="max-h-80"
                    src="https://source.unsplash.com/300x300"
                    alt=""
                />
                <img
                    className="max-h-80"
                    src="https://source.unsplash.com/700x300"
                    alt=""
                />
                <img
                    className="max-h-80"
                    src="https://source.unsplash.com/500x202"
                    alt=""
                />
                <img
                    className="max-h-80"
                    src="https://source.unsplash.com/1000x805"
                    alt=""
                />
                <img
                    className="max-h-80"
                    src="https://source.unsplash.com/1000x801"
                    alt=""
                />
            </div>
        </SubLayout>
    );
}
