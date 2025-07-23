import "@/styles/globals.css";
import RendezVousPage from "@/components/page/rendezvous";
import { RendezVousHero } from "@/components/page/rendezvoushero";
export default function Formation() {
  return (
    <main>
        <RendezVousHero />
        <RendezVousPage />
    </main>
  );
}
