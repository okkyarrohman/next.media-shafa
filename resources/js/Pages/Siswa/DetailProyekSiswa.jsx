import BackButton from "@/Components/General/BackButton";
import ProgressBar from "@/Components/General/ProgressBar";
import StatusIcon from "@/Components/General/StatusIcon";
import SubLayout from "@/Layouts/SubLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function DetailProyekSiswa({ auth }) {
    const { proyeks } = usePage().props;

    const filteredProyekResultById = proyeks[0].hasil_proyek.filter(
        (hasil) => hasil.user_id == auth.user.id
    );

    useEffect(() => {
        console.log(proyeks);
    }, []);

    const handleStepProyekClick = (step, id) => {
        localStorage.setItem("CURRENT_STEP_PROYEK", step);
        router.visit(`/proyek/${id}/edit`);
    };

    let percentage = 0;
    if (filteredProyekResultById.length > 0) {
        filteredProyekResultById.map((resultItem) => {
            const totalAnswers = ["answer1", "answer2", "answer3", "answer4"];
            const filledAnswers = totalAnswers.filter(
                (answer) => resultItem[answer]
            );

            percentage = (filledAnswers.length / totalAnswers.length) * 100;
        });
    }

    return (
        <SubLayout auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    {proyeks[0].nama}
                </h1>
            </div>
            <div className="w-1/4 ml-auto mb-8">
                <ProgressBar persentase={percentage} />
            </div>
            <table className="w-full">
                <thead className="bg-white">
                    <tr className="*:py-6 *:text-xl *:border-2">
                        <th>Tahapan</th>
                        <th>Proses</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Row Tahap 1 */}
                    <tr className="*:py-4 bg-abu *:border-2">
                        <td className="text-center">1</td>
                        <td className="pl-8">{proyeks[0].proses1}</td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Diterima"
                                    decline="Ditolak"
                                    process="Diproses"
                                    status={
                                        filteredProyekResultById.length != 0
                                            ? filteredProyekResultById[0]
                                                  .answer1 != null
                                                ? "Diterima"
                                                : "Ditolak"
                                            : "Diproses"
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            {/* <Link href={route("tahap-1-proyek-siswa")}> */}
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(1, proyeks[0].id)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </button>
                            {/* </Link> */}
                        </td>
                    </tr>
                    {/* Row Tahap 2 */}
                    <tr className="*:py-4 bg-white *:border-2">
                        <td className="text-center">2</td>
                        <td className="pl-8">{proyeks[0].proses2}</td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Diterima"
                                    decline="Ditolak"
                                    process="Diproses"
                                    status={
                                        filteredProyekResultById.length != 0
                                            ? filteredProyekResultById[0]
                                                  .answer2 != null
                                                ? "Diterima"
                                                : "Ditolak"
                                            : "Diproses"
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(2, proyeks[0].id)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    {/* Row Tahap 3 */}
                    <tr className="*:py-4 bg-abu *:border-2">
                        <td className="text-center">3</td>
                        <td className="pl-8">{proyeks[0].proses3}</td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Diterima"
                                    decline="Ditolak"
                                    process="Diproses"
                                    status={
                                        filteredProyekResultById.length != 0
                                            ? filteredProyekResultById[0]
                                                  .answer3 != null
                                                ? "Diterima"
                                                : "Ditolak"
                                            : "Diproses"
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(3, proyeks[0].id)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    {/* Row Tahap 4 */}
                    <tr className="*:py-4 bg-white *:border-2">
                        <td className="text-center">4</td>
                        <td className="pl-8">{proyeks[0].proses4}</td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Diterima"
                                    decline="Ditolak"
                                    process="Diproses"
                                    status={
                                        filteredProyekResultById.length != 0
                                            ? filteredProyekResultById[0]
                                                  .answer4 != null
                                                ? "Diterima"
                                                : "Ditolak"
                                            : "Diproses"
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(4, proyeks[0].id)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </SubLayout>
    );
}
