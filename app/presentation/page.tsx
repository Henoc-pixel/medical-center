import "@/styles/globals.css";
import {PresentationHero} from "@/components/page/presentationHero"
import {PresentationDesc} from "@/components/page/presentationDesc"


export default function Presentation() {
    return (
        <main>
            <PresentationHero/>
            {/* Description Section */}
            <PresentationDesc/>
        </main>
    )
}