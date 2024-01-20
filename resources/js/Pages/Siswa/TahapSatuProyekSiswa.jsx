import SubLayout from "@/Layouts/SubLayout";
import { Head } from "@inertiajs/react";
import { placeholderPDF } from "../../../assets";
import BackButton from "@/Components/General/BackButton";

export default function TahapSatuProyekSiswa() {
    return (
        <SubLayout>
            <Head title="Proyek" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    TAHAP 1 <br />
                    DESKRIPSI PROYEK
                </h1>
            </div>
            <embed
                className="rounded-xl w-4/5 h-[60rem] mx-auto mb-24"
                src={placeholderPDF}
                type="application/pdf"
            />
            <form>
                <textarea
                    className="w-4/5 block mx-auto border border-black rounded-lg"
                    placeholder="Masukkan Jawaban..."
                    name="deskripsi"
                    id="deskripsi"
                    rows="10"
                    // value={data.deskripsi}
                    onChange={(e) => setData("deskripsi", e.target.value)}
                ></textarea>
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
