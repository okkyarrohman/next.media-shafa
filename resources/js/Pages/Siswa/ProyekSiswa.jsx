import ProgressBar from "@/Components/General/ProgressBar";
import SubLayout from "@/Layouts/SubLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function ProyekSiswa({ auth }) {
    const { proyeks } = usePage().props;

    const popupFeedback = (catatan) => {
        Swal.fire({
            title: "Feedback",
            text: `${catatan}`,
            showConfirmButton: false,
            customClass: {
                title: "block text-xl w-[90%] mx-auto pb-4 text-left text-blue-500 border-b-2",
            },
        });
    };

    return (
        <SubLayout auth={auth}>
            <Head title="Proyek" />
            <h1 className="font-medium text-4xl text-center mb-24">PROYEK</h1>
            {proyeks.map((proyek, index) => {
                const filteredProyekResultById = proyek.hasil_proyek.filter(
                    (hasil) => hasil.user_id == auth.user.id
                );

                let percentage = 0;
                if (filteredProyekResultById.length > 0) {
                    filteredProyekResultById.map((resultItem) => {
                        const totalAnswers = [
                            "answer1",
                            "answer2",
                            "answer3",
                            "answer4",
                        ];
                        const filledAnswers = totalAnswers.filter(
                            (answer) => resultItem[answer]
                        );

                        percentage =
                            (filledAnswers.length / totalAnswers.length) * 100;
                    });
                }

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
                                <Link href={route("proyek.show", proyek.id)}>
                                    <p className="text-lg uppercase w-56 line-clamp-1">
                                        {proyek.nama}
                                    </p>
                                </Link>
                                <div className="w-56">
                                    <ProgressBar persentase={percentage} />
                                </div>
                            </div>
                            <div className="ml-auto flex items-center w-36 justify-between">
                                <button
                                    onClick={() =>
                                        popupFeedback(
                                            filteredProyekResultById.length != 0
                                                ? filteredProyekResultById[0]
                                                      .catatan == null
                                                    ? "Belum Ada Catatan Dari Guru"
                                                    : filteredProyekResultById[0]
                                                          .catatan
                                                : "Segera Kerjakan Proyekmu"
                                        )
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <p className="text-lg py-2 px-4 bg-first rounded-full">
                                    {filteredProyekResultById.length != 0
                                        ? filteredProyekResultById[0].nilai ==
                                          null
                                            ? 0
                                            : filteredProyekResultById[0].nilai
                                        : "0"}
                                    /100
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </SubLayout>
    );
}
