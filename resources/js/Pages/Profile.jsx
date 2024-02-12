import MainLayout from "@/Layouts/MainLayout";
import SubLayout from "@/Layouts/SubLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { logoNextMedia } from "../../assets";
import TextInput from "@/Components/TextInput";

export default function Profile({ auth }) {
    const url = "https://source.unsplash.com/random/300x300";
    const user = usePage().props.auth.user;

    const { data, setData, patch } = useForm({
        id: user.id,
        name: user.name,
        email: user.email,
        tanggal_lahir: user.tanggal_lahir,
        alamat: user.alamat,
        telepon: user.telepon,
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };

    return (
        <SubLayout auth={auth}>
            <Head title="Profile" />
            <img
                className="w-60 absolute right-0 top-0"
                src={logoNextMedia}
                alt="logo next media"
            />
            <div className="w-4/5 mx-auto">
                <h1 className="font-medium text-4xl text-center mb-20">
                    PROFILE
                </h1>
                <div className="flex gap-20">
                    <div className="w-60">
                        <img src={url} alt="" />
                        <p className="font-semibold text-2xl text-center">
                            {user.name}
                        </p>
                    </div>
                    <form className="w-full">
                        <div className="mb-3">
                            <label
                                className="block mb-1 font-semibold"
                                htmlFor="tanggal_lahir"
                            >
                                Tanggal Lahir
                            </label>
                            <TextInput
                                id="tanggal_lahir"
                                type="date"
                                name="tanggal_lahir"
                                isFocused={true}
                                className="w-full bg-abu border border-[#ABABAB]"
                                value={data.tanggal_lahir}
                                onChange={(e) =>
                                    setData("tanggal_lahir", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                className="block mb-1 font-semibold"
                                htmlFor="alamat"
                            >
                                Alamat
                            </label>
                            <TextInput
                                id="alamat"
                                type="text"
                                name="alamat"
                                placeholder="Masukkan Alamat..."
                                className="w-full bg-abu border border-[#ABABAB]"
                                value={data.alamat}
                                onChange={(e) =>
                                    setData("alamat", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-16">
                            <label
                                className="block mb-1 font-semibold"
                                htmlFor="telepon"
                            >
                                No. Telepon
                            </label>
                            <TextInput
                                id="telepon"
                                type="text"
                                name="telepon"
                                placeholder="Masukkan No. Telepon..."
                                className="w-full bg-abu border border-[#ABABAB]"
                                value={data.telepon}
                                onChange={(e) =>
                                    setData("telepon", e.target.value)
                                }
                            />
                        </div>
                        <button
                            className="bg-first rounded py-2 px-16 text-white font-semibold mx-auto w-fit block"
                            onClick={handleFormSubmit}
                        >
                            Edit Profile
                        </button>
                    </form>
                </div>
            </div>
        </SubLayout>
    );
}
