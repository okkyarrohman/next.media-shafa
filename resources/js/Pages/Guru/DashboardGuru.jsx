import { Head, Link } from "@inertiajs/react";
import {
    iconAbsen,
    iconData,
    iconMateri,
    iconReferensi,
    iconTest,
    logoNextMedia,
} from "../../../assets";
import MainLayoutGuru from "@/Layouts/MainLayoutGuru";

export default function DashboardGuru({ auth }) {
    return (
        <MainLayoutGuru auth={auth}>
            <Head title="Dashboard" />
            <img
                className="w-52 absolute right-0 top-0"
                src={logoNextMedia}
                alt="logo next media"
            />
            <h1 className="font-medium text-4xl text-center mb-16">
                EVALUASI AKADEMIK
            </h1>
            <div className="flex justify-around">
                <Link href={route("absen-guru")}>
                    <button>
                        <img className="w-36 mb-10" src={iconAbsen} alt="" />
                        <span>ABSEN</span>
                    </button>
                </Link>
                <Link href={route("data-siswa.index")}>
                    <button>
                        <img className="w-40 mb-10" src={iconData} alt="" />
                        <span>DATA MASTER</span>
                    </button>
                </Link>
                <Link href={route("test-guru")}>
                    <button>
                        <img className="w-36 mb-10" src={iconTest} alt="" />
                        <span>TEST</span>
                    </button>
                </Link>
            </div>
            <h1 className="font-medium text-4xl text-center my-16">
                SUMBER BELAJAR
            </h1>
            <div className="flex justify-around">
                <Link href={route("materi-guru.index")}>
                    <button>
                        <img className="w-36 mb-10" src={iconMateri} alt="" />
                        <span>MATERI</span>
                    </button>
                </Link>
                <Link href={route("referensi-guru.index")}>
                    <button>
                        <img
                            className="w-36 mb-10"
                            src={iconReferensi}
                            alt=""
                        />
                        <span>REFERENSI LOGO</span>
                    </button>
                </Link>
            </div>
        </MainLayoutGuru>
    );
}
