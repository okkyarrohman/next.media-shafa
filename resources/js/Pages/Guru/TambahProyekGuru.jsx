import TextInput from "@/Components/TextInput";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, useForm } from "@inertiajs/react";

export default function TambahProyekGuru({ auth }) {
    const { data, setData, post } = useForm({
        nama: "",
        proses1: "",
        file1: null,
        proses2: "",
        file2: null,
        proses3: "",
        file3: null,
        proses4: "",
        file4: null,
    });

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Proyek" />
            <h1 className="font-medium text-4xl text-center mb-24">
                TAMBAH PROYEK BARU
            </h1>
            <div className="bg-white rounded-lg p-8 w-4/5 mx-auto">
                <form className="block">
                    <div className="mb-4">
                        <label
                            className="block text-3xl font-semibold mb-2"
                            htmlFor="nama"
                        >
                            Nama Proyek
                        </label>
                        <TextInput
                            id="nama"
                            type="text"
                            name="nama"
                            placeholder="Masukkan Nama Proyek..."
                            className="w-full border-[#353535] bg-transparent"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </SubLayoutGuru>
    );
}
