import SidebarGuru from "@/Components/General/SidebarGuru";
import { useState } from "react";

export default function SubLayoutGuru({ children, auth }) {
    const [viewSidebar, setViewSidebar] = useState(false);

    const handleViewSidebar = () => {
        setViewSidebar(!viewSidebar);
    };

    return (
        <main>
            <section>
                <aside>
                    {viewSidebar ? (
                        <>
                            <SidebarGuru auth={auth} />
                            <button
                                className="p-1 rounded-r bg-second fixed top-10 left-96"
                                onClick={handleViewSidebar}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </>
                    ) : (
                        <button
                            className="p-1 rounded border-2 border-first fixed top-10 left-10"
                            onClick={handleViewSidebar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8 text-first"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    )}
                </aside>
                <section
                    className={`min-h-screen ${
                        viewSidebar ? "bg-black bg-opacity-50" : ""
                    }`}
                >
                    <article
                        className={`px-[6.25rem] py-[6.75rem] min-h-screen bg-background ${
                            viewSidebar ? "relative -z-[2]" : ""
                        }`}
                    >
                        {children}
                    </article>
                </section>
            </section>
        </main>
    );
}
