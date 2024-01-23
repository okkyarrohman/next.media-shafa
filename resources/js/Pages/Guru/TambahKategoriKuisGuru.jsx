import Upload from "@/Components/General/Upload";
import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, useForm } from "@inertiajs/react";

export default function TambahKategoriKuisGuru({ auth }) {
    const { data, setData, post } = useForm({
        kuis: "",
        tenggat: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("kategori-kuis.store"));
    };

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Kuis" />
            <h1 className="font-medium text-4xl text-center mb-24">
                TAMBAH KATEGORI KUIS BARU
            </h1>
            <form className="w-4/5 mx-auto">
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="kuis"
                    >
                        Nama Kuis
                    </label>
                    <TextInput
                        id="kuis"
                        type="text"
                        name="kuis"
                        placeholder="Masukkan Nama Kuis..."
                        className="w-full border-[#353535] bg-transparent"
                        value={data.kuis}
                        onChange={(e) => setData("kuis", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-3xl font-semibold mb-2"
                        htmlFor="tenggat"
                    >
                        Tenggat Kuis
                    </label>
                    <TextInput
                        id="tenggat"
                        type="date"
                        name="tenggat"
                        placeholder="Masukkan Tenggat Kuis..."
                        className="w-full border-[#353535] bg-transparent"
                        value={data.tenggat}
                        onChange={(e) => setData("tenggat", e.target.value)}
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
