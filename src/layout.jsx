import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Layout() {
    return (
        <>
            <Header />
            <section style={{ flex: 1 }}>
                <Outlet />
            </section>
            <Footer />
        </>
    );
}