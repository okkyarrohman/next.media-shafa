import BackButton from "@/Components/General/BackButton";
import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { url } from "../../../utility/url";

export default function NilaiHasilProyek({ auth }) {
    const { hasilProyeks } = usePage().props;
    const currentStep = localStorage.getItem("CURRENT_STEP_PROYEK");

    const { data, setData, patch } = useForm({
        nilai: "",
        catatan: "",
    });

    const handleNilaiUpdate = (e) => {
        e.preventDefault();
        patch(route("hasil-proyek.update", hasilProyeks[0].id), data);
    };

    useEffect(() => {
        console.log(hasilProyeks);
    }, []);

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-start mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    TAHAP {currentStep} <br />
                    {hasilProyeks[0].proyek[`proses${currentStep}`]} <br />
                    <span className="text-2xl text-first-light">
                        {hasilProyeks[0].user.name}
                    </span>
                </h1>
            </div>
            {currentStep != 1 && (
                <embed
                    className="rounded-xl w-4/5 h-[60rem] mx-auto mb-24"
                    src={`${url}/HasilProyek/answer${currentStep}/${
                        hasilProyeks[0][`answer${currentStep}`]
                    }`}
                    type="application/pdf"
                />
            )}
            <form className="w-4/5 mx-auto">
                {currentStep == 1 && 1}
                {currentStep == 2 && 2}
                {currentStep == 3 && 3}
                {currentStep == 4 && 4}
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
