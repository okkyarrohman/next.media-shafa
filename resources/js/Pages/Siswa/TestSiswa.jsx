import SubLayout from "@/Layouts/SubLayout";
import { Head, Link } from "@inertiajs/react";

export default function TestSiswa() {
    const data = [
        {
            no: 1,
            nama: "Kuis 1",
            nilai: 80,
            link: "kuis-siswa",
        },
        {
            no: 2,
            nama: "Kuis 2",
            nilai: 100,
            link: "kuis-siswa",
        },
        {
            no: 3,
            nama: "Tugas 1",
            nilai: 0,
            link: "tugas-siswa",
        },
        {
            no: 4,
            nama: "Kuis 3",
            nilai: 10,
            link: "kuis-siswa",
        },
    ];

    return (
        <SubLayout>
            <Head title="Test" />
            <h1 className="font-medium text-4xl text-center mb-24">TEST</h1>
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="w-full py-4 border-b-2 border-[#A4A4A4]"
                    >
                        <div className="px-8  flex items-center justify-between">
                            <div className="flex items-center gap-12">
                                <div className="size-14 rounded-full bg-yellow-500 flex justify-center items-center font-semibold text-lg">
                                    {item.no}
                                </div>
                                <Link href={route(item.link)}>
                                    <p className="text-lg uppercase">
                                        {item.nama}
                                    </p>
                                </Link>
                            </div>
                            <p className="font-black text-lg">
                                {item.nilai}/100
                            </p>
                        </div>
                    </div>
                );
            })}
        </SubLayout>
    );
}
