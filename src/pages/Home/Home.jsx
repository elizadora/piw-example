import "./Home.css"

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container">
                <HeroSection />
            </main>
            <Footer />
        </>
    )
}