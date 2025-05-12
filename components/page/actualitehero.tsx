// components/ActualiteHero.tsx
"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function ActualiteHero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/africa-humanitarian.jpg?height=600&width=1920')",
          filter: "brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <h5 className="text-base md:text-xl font-bold bg-blue-600 text-white px-4 py-2 mb-4 w-fit animate__animated animate__fadeIn">
            ACTUALITÉS MÉDICALES
          </h5>
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-extrabold animate__animated animate__fadeIn animate__delay-1s">
            Restez informé des <br />
            <span className="text-blue-600">dernières actualités</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Découvrez nos dernières interventions, congrès et événements en
            médecine du travail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate__animated animate__fadeIn animate__delay-3s">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#actualites" className="w-full">
                Voir les actualités
              </Link>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
