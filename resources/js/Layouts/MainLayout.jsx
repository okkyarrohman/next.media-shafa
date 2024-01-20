import Sidebar from "@/Components/General/Sidebar";

export default function MainLayout({ children, auth }) {
    return (
        <main className="min-h-screen bg-background">
            <section>
                <aside>
                    <Sidebar auth={auth} />
                </aside>
                <section className="ml-96">
                    <article className="px-14 py-20">{children}</article>
                </section>
            </section>
        </main>
    );
}
