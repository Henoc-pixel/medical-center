import "@/styles/globals.css";
import {ActualitesPage} from "@/components/page/actualite";
import {ActualiteHero} from "@/components/page/actualitehero";


export default function Formation() {
    return (
        <main>
            <ActualiteHero/>
            <ActualitesPage/>
        </main>
    );
}
