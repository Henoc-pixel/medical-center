import {Hero} from "@/components/hero"
import {About} from "@/components/about"
import {Services} from "@/components/services"
import {Training} from "@/components/training"
import {Appointment} from "@/components/appointment"
import {News} from "@/components/news"
import {Contact} from "@/components/contact"
import {Footer} from "@/components/footer"
import {Faq} from "@/components/faq"
import "@/styles/globals.css"

export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <News/>
            <Services/>
            <Faq/>
            <Appointment/>
            <Contact/>
            {/*
            <Training/>
            */}
        </main>
    );
}
