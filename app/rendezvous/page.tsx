import RendezVousPage from "@/components/page/rendezvous";
import "@/styles/globals.css";
import { RendezVousHero } from "@/components/page/rendezvoushero";
export default function Formation() {
  return (
    <main>
        <RendezVousHero />
        <RendezVousPage />
    </main>
  );
}
