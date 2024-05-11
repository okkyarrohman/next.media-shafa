import BackButton from "@/Components/General/BackButton";
import ProgressBar from "@/Components/General/ProgressBar";
import StatusIcon from "@/Components/General/StatusIcon";
import TextInput from "@/Components/TextInput";
import SubLayout from "@/Layouts/SubLayout";
import { Head, router, usePage } from "@inertiajs/react";

export default function DetailHasilProyekGuru({ auth }) {
    const { hasilProyeks } = usePage().props;
    const hasilProyekId = localStorage.getItem("ID_HASIL_PROYEK");

    const filteredHasilProyeksById = hasilProyeks.filter(
        (hasil) => hasil.id == hasilProyekId
    );

    let percentage = 0;
    if (filteredHasilProyeksById.length > 0) {
        filteredHasilProyeksById.map((resultItem) => {
            const totalAnswers = ["answer1", "answer2", "answer3", "answer4"];
            const filledAnswers = totalAnswers.filter(
                (answer) => resultItem[answer]
            );

            percentage = (filledAnswers.length / totalAnswers.length) * 100;
        });
    }

    console.log(filteredHasilProyeksById);

    const handleStepProyekClick = (step, id) => {
        localStorage.setItem("CURRENT_STEP_PROYEK", step);
        router.visit(`/hasil-proyek/${id}/edit`);
    };

    return (
        <SubLayout auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-start mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    {filteredHasilProyeksById[0].user.name}
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
                        <td className="pl-8">
                            {filteredHasilProyeksById[0].proyek.proses1}
                        </td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Terima"
                                    decline="Tolak"
                                    submit="Terkirim"
                                    process="Proses"
                                    status={
                                        filteredHasilProyeksById[0].answer1 ==
                                        null
                                            ? "Proses"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi1 == null
                                            ? "Terkirim"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi1
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(
                                        1,
                                        filteredHasilProyeksById[0].id
                                    )
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
                        <td className="pl-8">
                            {filteredHasilProyeksById[0].proyek.proses2}
                        </td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Terima"
                                    decline="Tolak"
                                    submit="Terkirim"
                                    process="Proses"
                                    status={
                                        filteredHasilProyeksById[0].answer2 ==
                                        null
                                            ? "Proses"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi2 == null
                                            ? "Terkirim"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi2
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(
                                        2,
                                        filteredHasilProyeksById[0].id
                                    )
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
                        <td className="pl-8">
                            {filteredHasilProyeksById[0].proyek.proses3}
                        </td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Terima"
                                    decline="Tolak"
                                    submit="Terkirim"
                                    process="Proses"
                                    status={
                                        filteredHasilProyeksById[0].answer3 ==
                                        null
                                            ? "Proses"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi3 == null
                                            ? "Terkirim"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi3
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(
                                        3,
                                        filteredHasilProyeksById[0].id
                                    )
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
                        <td className="pl-8">
                            {filteredHasilProyeksById[0].proyek.proses4}
                        </td>
                        <td>
                            <div className="w-fit mx-auto">
                                <StatusIcon
                                    accept="Terima"
                                    decline="Tolak"
                                    submit="Terkirim"
                                    process="Proses"
                                    status={
                                        filteredHasilProyeksById[0].answer4 ==
                                        null
                                            ? "Proses"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi4 == null
                                            ? "Terkirim"
                                            : filteredHasilProyeksById[0]
                                                  .konfirmasi4
                                    }
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w-fit mx-auto block"
                                onClick={() =>
                                    handleStepProyekClick(
                                        4,
                                        filteredHasilProyeksById[0].id
                                    )
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
            <button
                type="button"
                disabled={
                    filteredHasilProyeksById[0].answer1 == null ||
                    filteredHasilProyeksById[0].answer2 == null ||
                    filteredHasilProyeksById[0].answer3 == null ||
                    filteredHasilProyeksById[0].answer4 == null
                }
                className={`text-lg px-8 py-2.5 mt-8 rounded-full block w-fit ml-auto ${
                    filteredHasilProyeksById[0].answer1 == null ||
                    filteredHasilProyeksById[0].answer2 == null ||
                    filteredHasilProyeksById[0].answer3 == null ||
                    filteredHasilProyeksById[0].answer4 == null
                        ? "bg-gray-300 text-white cursor-not-allowed"
                        : "bg-[#F26969]"
                }`}
                onClick={() =>
                    handleStepProyekClick(
                        "nilai",
                        filteredHasilProyeksById[0].id
                    )
                }
            >
                Upload Nilai
            </button>
            <div className="bg-white rounded-xl p-8 w-3/5 mx-auto mt-16">
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="nilai"
                    >
                        Nilai
                    </label>
                    <TextInput
                        id="nilai"
                        type="text"
                        name="nilai"
                        placeholder="Masukkan Nilai..."
                        className="w-4/5 block mx-auto border border-black bg-transparent rounded-lg"
                        value={
                            filteredHasilProyeksById[0].nilai != null
                                ? filteredHasilProyeksById[0].nilai
                                : "Belum Dinilai"
                        }
                        disabled
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="catatan"
                    >
                        Catatan
                    </label>
                    <textarea
                        className="w-4/5 block mx-auto border border-black bg-transparent rounded-lg"
                        placeholder="Masukkan Catatan..."
                        name="catatan"
                        id="catatan"
                        rows="10"
                        value={
                            filteredHasilProyeksById[0].catatan != null
                                ? filteredHasilProyeksById[0].catatan
                                : "Belum Ada Catatan"
                        }
                        disabled
                    ></textarea>
                </div>
            </div>
        </SubLayout>
    );
}
