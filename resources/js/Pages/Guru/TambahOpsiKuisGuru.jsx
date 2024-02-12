import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, useForm } from "@inertiajs/react";

export default function TambahOpsiKuisGuru({ auth }) {
    const soalId = localStorage.getItem("ID_SOAL_KUIS");

    const { data, setData, post } = useForm({
        soal_id: soalId,
        nama: "",
        point: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("opsi-kuis.store"));
    };

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Kuis" />
            <h1 className="font-medium text-4xl text-center mb-24">
                TAMBAH OPSI KUIS BARU
            </h1>
            <form className="w-4/5 mx-auto">
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="nama"
                    >
                        Opsi Jawaban
                    </label>
                    <TextInput
                        id="nama"
                        type="text"
                        name="nama"
                        placeholder="Masukkan Opsi Jawaban..."
                        className="w-full border-[#353535] bg-transparent"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="point"
                    >
                        Poin Opsi
                    </label>
                    <TextInput
                        id="point"
                        type="number"
                        name="point"
                        placeholder="Masukkan Poin Opsi..."
                        className="w-full border-[#353535] bg-transparent"
                        value={data.point}
                        onChange={(e) => setData("point", e.target.value)}
                    />
                </div>
                <button
                    className="bg-first text-white py-3 px-24 rounded font-semibold text-2xl w-fit mx-auto block my-12"
                    onClick={handleFormSubmit}
                >
                    Kirim
                </button>
            </form>
        </SubLayoutGuru>
    );
}
