import {Button} from "@/components/ui/button"
import {ChevronRight} from "lucide-react"
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-[600px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/africa-humanitarian.jpg?height=600&width=1920')",
                    filter: "brightness(0.7)",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"/>
            <div className="container mx-auto px-4 h-full relative z-10">
                <div className="flex flex-col justify-center h-full max-w-2xl">
                    <h5 className="text-base md:text-3xl font-bold bg-red-600 text-white mb-4 animate__animated animate__backInRight">Médecine
                        du travail en Côte d'Ivoire</h5>
                    <p className="text-5xl text-white/90 mb-4 font-extrabold animate__animated animate__backInUp animate__delay-3s">Avec
                        PCM <span className="text-red-600">Travailler <br/> en toute sécurité</span></p>
                    <p className="text-base md:text-xl font-bold bg-white text-red-600 mb-8 animate__animated animate__backInUp animate__delay-3s">Selon
                        la norme internationale ISO 45001 version 2018</p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 animate__animated animate__backInUp animate__delay-3s">
                        <Link href="/prestation"
                              className="inline-flex items-center px-4 py-2 text-lg font-medium bg-red-600 hover:bg-indigo-800 text-white rounded-md transition-colors duration-200">
                            Nos Prestations
                            <ChevronRight className="ml-2 h-4 w-4"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
