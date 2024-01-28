import BackButton from "@/Components/General/BackButton";
import SubLayout from "@/Layouts/SubLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { url } from "../../../utility/url";

export default function TahapanProyekSiswa({ auth }) {
    const { proyeks, hasilProyeks } = usePage().props;
    const currentStep = localStorage.getItem("CURRENT_STEP_PROYEK");

    const filteredHasilProyeksById = hasilProyeks.filter(
        (hasilProyek) => hasilProyek.user_id == auth.user.id
    );

    const { data, setData, post } = useForm({
        user_id: auth.user.id,
        proyek_id: proyeks[0].id,
        answer1: hasilProyeks ? hasilProyeks[0].answer1 : "",
        answer2: hasilProyeks ? hasilProyeks[0].answer2 : null,
        answer3: hasilProyeks ? hasilProyeks[0].answer3 : null,
        answer4: hasilProyeks ? hasilProyeks[0].answer4 : null,
    });

    const handleProyekStore = () => {
        post(route("proyek.store"));
    };

    const handleProyekUpdate = () => {
        post(route("proyek.update"));
    };

    useEffect(() => {
        console.log("Proyek", proyeks);
        console.log("Hasil By User", filteredHasilProyeksById);
    }, []);

    return (
        <SubLayout auth={auth}>
            <Head title="Proyek" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    TAHAP {currentStep} <br />
                    {proyeks[0][`proses${currentStep}`]}
                </h1>
            </div>
            <embed
                className="rounded-xl w-4/5 h-[60rem] mx-auto mb-24"
                src={`${url}/Proyek/file${currentStep}/${
                    proyeks[0][`file${currentStep}`]
                }`}
                type="application/pdf"
            />
            <form className="w-4/5 mx-auto">
                {currentStep == 1 && (
                    <textarea
                        className="w-4/5 block mx-auto border border-black rounded-lg"
                        placeholder="Masukkan Jawaban..."
                        name="answer1"
                        id="answer1"
                        rows="10"
                        value={data.answer1}
                        onChange={(e) => setData("answer1", e.target.value)}
                    ></textarea>
                )}
                {currentStep == 2 && <p>Piw2</p>}
                {currentStep == 3 && <p>Piw3</p>}
                {currentStep == 4 && <p>Piw2</p>}
                <div className="flex gap-12 justify-center mt-16">
                    <button
                        type="button"
                        className="border border-first bg-white font-semibold py-4 px-16 rounded-lg text-first"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        className="bg-first font-semibold py-4 px-16 rounded-lg text-white"
                    >
                        Kirim
                    </button>
                </div>
            </form>
        </SubLayout>
    );
}
