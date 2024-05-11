import BackButton from "@/Components/General/BackButton";
import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { url } from "../../../utility/url";
import OptionKonfirmasiProyek from "@/Components/General/OptionKonfirmasiProyek";

export default function NilaiHasilProyek({ auth }) {
    const { hasilProyeks } = usePage().props;
    const currentStep = localStorage.getItem("CURRENT_STEP_PROYEK");

    console.log(hasilProyeks);

    const { data, setData, patch } = useForm({
        konfirmasi1: hasilProyeks[0].konfirmasi1,
        konfirmasi2: hasilProyeks[0].konfirmasi2,
        konfirmasi3: hasilProyeks[0].konfirmasi3,
        konfirmasi4: hasilProyeks[0].konfirmasi4,
        nilai: hasilProyeks[0].nilai,
        catatan: hasilProyeks[0].catatan,
    });

    const handleNilaiUpdate = (e) => {
        e.preventDefault();
        patch(route("hasil-proyek.update", hasilProyeks[0].id));
    };

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-start mb-24">
                <BackButton />
                {currentStep != "nilai" && (
                    <h1 className="font-medium text-4xl text-center w-full">
                        TAHAP {currentStep} <br />
                        {hasilProyeks[0].proyek[`proses${currentStep}`]} <br />
                        <span className="text-2xl text-first-light">
                            {hasilProyeks[0].user.name}
                        </span>
                    </h1>
                )}
            </div>
            {currentStep == 1 && (
                <textarea
                    className="w-4/5 mb-24 block mx-auto border border-black bg-transparent rounded-lg"
                    placeholder="Masukkan Catatan..."
                    name="answer1"
                    id="answer1"
                    rows="10"
                    value={hasilProyeks[0].answer1}
                    disabled
                ></textarea>
            )}
            {currentStep != 1 ||
                (currentStep != "nilai" && (
                    <embed
                        className="rounded-xl w-4/5 h-[60rem] mx-auto mb-24"
                        src={`${url}/HasilProyek/answer${currentStep}/${
                            hasilProyeks[0][`answer${currentStep}`]
                        }`}
                        type="application/pdf"
                    />
                ))}
            <form className="w-4/5 mx-auto">
                {currentStep == 1 && (
                    <OptionKonfirmasiProyek
                        id="konfirmasi1"
                        selectedValue={data.konfirmasi1}
                        onChange={(e) => setData("konfirmasi1", e.target.value)}
                    />
                )}
                {currentStep == 2 && (
                    <OptionKonfirmasiProyek
                        id="konfirmasi2"
                        selectedValue={data.konfirmasi2}
                        onChange={(e) => setData("konfirmasi2", e.target.value)}
                    />
                )}
                {currentStep == 3 && (
                    <OptionKonfirmasiProyek
                        id="konfirmasi3"
                        selectedValue={data.konfirmasi3}
                        onChange={(e) => setData("konfirmasi3", e.target.value)}
                    />
                )}
                {currentStep == 4 && (
                    <OptionKonfirmasiProyek
                        id="konfirmasi4"
                        selectedValue={data.konfirmasi4}
                        onChange={(e) => setData("konfirmasi4", e.target.value)}
                    />
                )}
                {currentStep == "nilai" && (
                    <div className="bg-white rounded-xl p-8">
                        <div className="mb-4">
                            <label
                                className="block text-3xl font-semibold mb-2"
                                htmlFor="nilai"
                            >
                                Nilai
                            </label>
                            <TextInput
                                id="nilai"
                                type="number"
                                name="nilai"
                                placeholder="Masukkan Nilai..."
                                className="w-4/5 block mx-auto border border-black bg-transparent rounded-lg"
                                value={data.nilai}
                                onChange={(e) =>
                                    setData("nilai", e.target.value)
                                }
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
                                value={data.catatan}
                                onChange={(e) =>
                                    setData("catatan", e.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>
                )}
                <div className="flex gap-12 justify-center mt-16">
                    <Link
                        href={route("hasil-proyek.index")}
                        as="button"
                        className="border border-first bg-white font-semibold py-4 px-16 rounded-lg text-first"
                    >
                        Batal
                    </Link>
                    <button
                        type="button"
                        className="bg-first font-semibold py-4 px-16 rounded-lg text-white"
                        onClick={handleNilaiUpdate}
                    >
                        Kirim
                    </button>
                </div>
            </form>
        </SubLayoutGuru>
    );
}
