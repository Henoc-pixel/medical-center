import Link from "next/link";

export function PresentationHero() {
    return (
        <section className="relative h-[500px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/presentation.png?height=1500&width=1920')",
                    filter: "brightness(0.7)",
                }}
            />
            {/* Hero Content */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
            <div className="flex items-center justify-center mx-auto px-4 h-full relative z-10 mt-4">
                <div className="text-center text-white max-w-5xl animate__animated animate__backInUp animate__delay-3s">
                    {/* Main Title with Border */}
                    <div className="border-2 border-white p-8 inline-block mb-6">
                        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold leading-tight">
                            <span className="text-indigo-800">Cabinet spécialisé en </span>
                            <br/>
                            <Link href="#" className="text-indigo-800 underline hover:text-green-600">
                                Médecine du Travail
                            </Link> <span className="text-indigo-800"> en Côte</span>{" "}
                            <br/>
                            <span className="text-indigo-800"> d'Ivoire</span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <h2 className="text-xl md:text-xl lg:text-3xl font-bold leading-tight antialiased mb-5">
                        Médecine du travail en Côte d'Ivoire -<br/>
                        Présentation de PCM
                    </h2>

                    {/* Description */}
                    <div className="text-sm md:text-sm lg:text-sm leading-relaxed max-w-4xl mx-auto antialiased font-bold">
                        <p className="">Cabinet spécialisé en médecine du travail et Santé et Sécurité au Travail
                            exercant</p>
                        <p>
                            avec expertise dans plusieurs secteurs d'activités dont les secteurs{" "}
                            <span className="text-red-600/100">
                                Minier,
                            </span>
                            <br/>
                            <span className="text-red-600/100">
                                Pétrolier,
                                Agroalimentaire,
                                BTP,
                                Agro-industriel,
                                Pharmaceutiques,
                            </span>
                            <br/>
                            <span className="text-red-600/100">
                                Phytosanitaires,
                                Commerces & Services,
                                Grandes distributions,
                                etc...
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}