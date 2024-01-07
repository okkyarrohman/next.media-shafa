import { Head, Link } from "@inertiajs/react";
import { logoNextMedia, logoNextMediaText } from "../../assets";

export default function Landing() {
    return (
        <div className="h-screen max-h-screen w-screen bg-sekolah bg-no-repeat bg-cover">
            <Head title="Welcome" />
            <div className="h-screen max-h-screen w-screen bg-black bg-opacity-80">
                <img
                    className="w-60 absolute right-0 top-0"
                    src={logoNextMedia}
                    alt="logo next media"
                />
                <div className="pl-[8.75rem] h-full flex flex-col justify-center">
                    <img
                        className="w-[45rem]"
                        src={logoNextMediaText}
                        alt="logo next media"
                    />
                    <p className="text-xl font-medium text-white w-1/2 mt-4 pl-2">
                        Platform media terdepan untuk menyampaikan informasi dan
                        proses pembelajaran Desain Logo yang lebih efektif dan
                        menarik
                    </p>
                    <Link className="pl-2 mt-14" href={route("login")}>
                        <button className="py-3 px-12 text-white w-fit font-medium text-2xl bg-first border border-white rounded-lg">
                            Mulai
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
