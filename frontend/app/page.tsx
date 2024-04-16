import Navbar from "@/components/used/Navbar";
import InspoPage from "@/components/used/inspo";
import Footer from "@/components/used/Footer";
import AboutPage from "@/components/used/About";
import DemoPage from "@/components/used/Demo";
import TrustPage from "@/components/used/Trust";
import { BuiltWith } from "@/components/used/Built";


export default function Page() {
    return (
        <>
            <Navbar />
            <InspoPage />
            <BuiltWith />
            <AboutPage />
            <DemoPage />
            <TrustPage />
            <Footer />
        </>
    )
}