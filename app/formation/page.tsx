import "@/styles/globals.css";
import FormationsPage from "@/components/page/formation";
import {HeroFormation} from "@/components/page/formationhero";

export default function Formation() {
    return (
        <main>
            <HeroFormation/>
            <FormationsPage/>
        </main>
    );
}
