import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, usePage } from "@inertiajs/react";

export default function TestGuru({ auth }) {
    const { kuis, proyeks } = usePage().props;

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Test" />
            <h1 className="font-medium text-4xl text-center mb-24">TEST</h1>
            {/* Container Kuis */}
            <div className="flex justify-evenly">
                <div className="w-[30rem]">
                    <div className="flex items-center justify-between h-56 bg-[#A3A3A3] px-8">
                        <div className="text-white flex flex-col justify-center gap-6">
                            <h1 className="text-5xl">{kuis}</h1>
                            <h1 className="text-5xl">KUIS</h1>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                        </svg>
                    </div>
                    <Link href={route("kategori-kuis.index")}>
                        <button className="flex justify-around items-center bg-[#4E4747] py-6 w-full text-white text-lg">
                            Daftar Kuis
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-16 h-16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
                {/* Container Proyek */}
                <div className="w-[30rem]">
                    <div className="flex items-center justify-between h-56 bg-[#F26969] px-8">
                        <div className="text-white flex flex-col justify-center gap-6">
                            <h1 className="text-5xl">{proyeks}</h1>
                            <h1 className="text-5xl">PROYEK</h1>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-24 h-24 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                    </div>
                    <Link href={route("proyek-guru.index")}>
                        <button className="flex justify-around items-center bg-[#CD3E46] py-6 w-full text-white text-lg">
                            Daftar Proyek
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-16 h-16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </SubLayoutGuru>
    );
}
