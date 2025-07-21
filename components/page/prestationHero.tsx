"use client";

export function PrestationHero() {
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
                        NOS PRESTATIONS
                    </h5>
                    <h1 className="text-4xl md:text-5xl text-white mb-6 font-extrabold animate__animated animate__fadeIn animate__delay-1s">
                        Mettre au service de votre entreprise notre <span className="text-blue-600">expertise confirmée</span>
                        <span className="text-blue-600"> et l’expérience éprouvée</span> de nos équipes.
                    </h1>
                </div>
            </div>
        </section>
    );
}
