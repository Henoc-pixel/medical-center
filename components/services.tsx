"use client"; // Directive nécessaire pour utiliser les interactions côté client

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react"; // Import de useState pour gérer les états de hover
import {ChevronRight} from "lucide-react";
import Link from "next/link";


export function Services() {
    // États pour gérer les interactions hover
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);

    // Données des services avec des images distinctes
    const services = [
        {
            image:
                "https://emr.ci/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-14.03.14-wpp1706744925811-370x277.jpeg",
            title: "Examens médicaux",
            description:
                "Examens d'embauche, périodiques, de reprise et de pré-reprise du travail.",
        },
        {
            image:
                "https://emr.ci/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-14.03.15-2-wpp1706744878364-370x277.jpeg",
            title: "Visites des lieux de travail",
            description:
                "Visites des lieux de travail pour identifier les risques professionnels.",
        },
        {
            image:
                "https://emr.ci/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-14.03.15-wpp1706744820131-370x277.jpeg",
            title: "Éducation sanitaire",
            description: "Sensibilisation et éducation sanitaire des travailleurs.",
        },
        {
            image:
                "https://emr.ci/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-14.03.14-1-wpp1706745006736-370x277.jpeg",
            title: "Évaluation des risques",
            description:
                "Évaluation des risques professionnels et mise en place de mesures préventives.",
        },
    ];

    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* En-tête de la section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-4 hover:text-indigo-600">
                        NOS PRESTATIONS
                    </h2>
                    <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
                    <h4 className="max-w-2xl mx-auto text-gray-600">
                        Prestations de services en matière de Médecine du Travail
                    </h4>
                </div>

                {/* Grille des services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className={`
                border-none shadow-lg transition-all duration-300 ease-in-out
                ${
                                hoveredCard === index
                                    ? "ring-2 ring-blue-500 scale-[1.02] relative z-10 -translate-y-4 shadow-xl" // Effet lorsque la carte est survolée
                                    : "hover:shadow-xl" // Effet de base au survol
                            }
              `}
                            onMouseEnter={() => setHoveredCard(index)} // Active l'effet au survol
                            onMouseLeave={() => setHoveredCard(null)} // Désactive l'effet
                        >
                            {/* Image du service */}
                            <div className="overflow-hidden rounded-t-md">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="block object-cover w-full h-[200px] bg-gray-200"
                                />
                            </div>

                            {/* En-tête de la carte */}
                            <CardHeader className="pb-2 pt-6">
                                <CardTitle
                                    className={`
                    text-xl text-center transition-colors duration-200
                    ${
                                        hoveredTitle === index
                                            ? "text-green-800"
                                            : "text-indigo-800"
                                    }
                  `}
                                    onMouseEnter={() => setHoveredTitle(index)}
                                    onMouseLeave={() => setHoveredTitle(null)}
                                >
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            {/* Contenu de la carte */}
                            <CardContent className="text-center pb-6">
                                <CardDescription className="text-gray-400 font-medium text-base">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* Bouton "Voir toutes les prestations" */}
                <div className="text-center mt-12">
                    <Link href="/prestation">
                        <Button size="lg" className="bg-red-600 hover:bg-indigo-700">
                            Découvrez nos prestations
                            <ChevronRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </Link>

                </div>
            </div>
        </section>
    );
}
