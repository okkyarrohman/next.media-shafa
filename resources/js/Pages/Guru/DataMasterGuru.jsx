import BackButton from "@/Components/General/BackButton";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, usePage } from "@inertiajs/react";
import { iconUser } from "../../../assets";
import { useEffect } from "react";

export default function DataMasterGuru({ auth }) {
    const { total_login: users } = usePage().props;

    useEffect(() => {
        console.log(users);
    });

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Data Master" />
            <div className="flex items-center mb-24">
                <BackButton />
                <h1 className="font-medium text-4xl text-center w-full">
                    DATA SISWA
                </h1>
            </div>
            {users.map((user, index) => {
                return (
                    <div className="w-full py-4 border-b-2 border-[#A4A4A4]">
                        <div className="px-8  flex items-center justify-between">
                            <div className="flex items-center gap-12">
                                <div className="size-14 rounded-full bg-yellow-500 flex justify-center items-center font-semibold text-lg">
                                    <img
                                        className="size-10"
                                        src={iconUser}
                                        alt="icon user"
                                    />
                                </div>
                                <p className="text-lg text-left uppercase w-96 line-clamp-1">
                                    {user.name}
                                </p>
                            </div>
                            <div className="flex items-center gap-20">
                                <p
                                    className={`text-lg py-2 px-4 ${
                                        user.session_login_at == null
                                            ? "text-red-600"
                                            : "text-green-600"
                                    }`}
                                >
                                    {user.session_login_at == null
                                        ? "Offline"
                                        : "Online"}
                                </p>
                                <p className="text-lg py-2 px-4">
                                    {user.total_login != null
                                        ? user.total_login
                                        : 0}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </SubLayoutGuru>
    );
}
