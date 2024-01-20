import SidebarGuru from "@/Components/General/SidebarGuru";

export default function MainLayoutGuru({ children }) {
    return (
        <main className="min-h-screen bg-background">
            <section>
                <aside>
                    <SidebarGuru />
                </aside>
                <section className="ml-96">
                    <article className="px-14 py-20">{children}</article>
                </section>
            </section>
        </main>
    );
}
