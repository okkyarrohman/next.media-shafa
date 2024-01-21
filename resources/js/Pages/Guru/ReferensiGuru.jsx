import Upload from "@/Components/General/Upload";
import SubLayoutGuru from "@/Layouts/SubLayoutGuru";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { url } from "../../../utility/url";

export default function ReferensiGuru({ auth }) {
    const { referensis } = usePage().props;

    const { data, setData, post } = useForm({
        gambar: null,
    });

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (files) => {
        setUploadedFiles(files);
        setData((prevData) => ({
            ...prevData,
            gambar: files[0],
        }));
        console.log(uploadedFiles);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("referensi-guru.store"));
    };

    return (
        <SubLayoutGuru auth={auth}>
            <Head title="Referensi" />
            <h1 className="font-medium text-4xl text-center mb-24">
                REFERENSI DESIGN LOGO
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-7 mb-24">
                {referensis.map((referensi, index) => {
                    return (
                        <div
                            key={index}
                            className="relative max-h-80 inline-block"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                className="max-h-80"
                                src={`${url}/Referensi/gambar/${referensi.gambar}`}
                                alt={`referensi logo ${index}`}
                            />
                            {hoveredIndex === index && (
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                    <Link
                                        href={route(
                                            "referensi-guru.destroy",
                                            referensi.id
                                        )}
                                    >
                                        <button className="text-white px-8 py-3 bg-first rounded-full cursor-pointer flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Delete
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <form className="w-4/5 mx-auto">
                <label
                    className="block text-3xl font-semibold mb-2"
                    htmlFor="gambar"
                >
                    File Gambar
                </label>
                <Upload onDrop={handleDrop} uploadedFiles={uploadedFiles} />
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
