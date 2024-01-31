import SubLayout from "@/Layouts/SubLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function KuisSiswa({ auth }) {
    const { kategoris, hasils } = usePage().props;

    useEffect(() => {
        console.log(kategoris);
        console.log("Hasil", hasils);
    }, []);

    return (
        <SubLayout auth={auth}>
            <Head title="Kuis" />
            <h1 className="font-medium text-4xl text-center mb-24">KUIS</h1>
            {kategoris.map((kategori, index) => {
                const filteredHasilKuis = hasils
                    .filter((hasil) => hasil.kategori_id == kategori.id)
                    .find((hasil) => hasil.user_id == auth.user.id);

                console.log(filteredHasilKuis);

                return (
                    <div
                        key={index}
                        className="w-full py-4 border-b-2 border-[#A4A4A4]"
                    >
                        <div className="px-8  flex items-center justify-between">
                            <div className="flex items-center gap-12">
                                <div className="size-14 rounded-full bg-yellow-500 flex justify-center items-center font-semibold text-lg">
                                    {index + 1}
                                </div>
                                <Link href={route("kuis.show", kategori.id)}>
                                    <p className="text-lg uppercase">
                                        {kategori.kuis}
                                    </p>
                                </Link>
                            </div>
                            <p className="text-lg py-2 px-4 bg-first rounded-full">
                                {filteredHasilKuis
                                    ? filteredHasilKuis.total_points
                                    : 0}
                                /100
                            </p>
                        </div>
                    </div>
                );
            })}
        </SubLayout>
    );
}
