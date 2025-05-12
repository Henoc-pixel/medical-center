// app/actualites/page.tsx
"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronRight,
  Clock,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function ActualitesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);

  // Données des actualités (identique à news.tsx)
  const newsItems = [
    {
      title: "Médecine du travail : Interventions en entreprise",
      description: "Médiathèque",
      date: "15 Mars 2024",
      readTime: "5 min de lecture",
      image:
        "https://emr.ci/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-28-at-10.22.54-440x297.jpeg",
    },
    {
      title: "Participation au 3ème Congrès Scientifique de la SMIT",
      description: "Actualités",
      date: "28 Février 2024",
      readTime: "8 min de lecture",
      image:
        "https://emr.ci/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-17-at-12.09.34-wpp1730115313275-440x297.jpeg",
    },
    {
      title: "Formation aux gestes de premiers secours",
      description: "Actualités, Médiathèque",
      date: "10 Février 2024",
      readTime: "3 min de lecture",
      image:
        "https://emr.ci/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-25-at-11.15.40-7-wpp1724299897220-440x297.jpeg",
    },
  ];

  // Données des prestations (identique à formation.tsx)
  const prestations = [
    {
      name: "MÉDECINE SOCIALE",
      link: "/prestations/medecine-sociale",
      description: "Programmes de santé publique en entreprise",
    },
    {
      name: "MÉDICALE - EXAMEN",
      link: "/prestations/examens-medicaux",
      description: "Visites médicales et bilans de santé",
    },
    {
      name: "SANTÉ PUBLIQUE - SUIVI",
      link: "/prestations/sante-publique",
      description: "Surveillance épidémiologique",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-white">
      <div className="max-w-5xl w-full">
        {/* En-tête identique à formation.tsx */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">ACTUALITÉS</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Restez informé des dernières nouvelles et événements
          </p>
        </div>

        <div className="mt-6 flex gap-6 flex-col md:flex-row">
          {/* Partie principale avec les cartes d'actualités (comme news.tsx) */}
          <div className="w-full md:w-2/3">
            {/* Grille des cartes d'actualités (identique à news.tsx) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {newsItems.map((item, index) => (
                <Card
                  key={index}
                  className={`
                    shadow-md transition-all duration-300 ease-in-out 
                    ${
                      hoveredCard === index
                        ? "ring-2 ring-blue-500 scale-[1.02] relative z-10 -translate-y-4"
                        : "hover:shadow-lg"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image de la carte */}
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Contenu de la carte */}
                  <CardHeader>
                    <p className="text-gray-400 text-balance font-semibold hover:text-blue-800">
                      {item.description}
                    </p>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.readTime}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <CardTitle
                      className={`
                        text-xl font-extrabold 
                        ${
                          hoveredTitle === index
                            ? "text-blue-800"
                            : "text-blue-900"
                        }
                        transition-colors duration-200
                      `}
                      onMouseEnter={() => setHoveredTitle(index)}
                      onMouseLeave={() => setHoveredTitle(null)}
                    >
                      {item.title}
                    </CardTitle>
                  </CardContent>

                  <CardFooter>
                    <Button variant="link" className="text-blue-600 p-0">
                      Lire plus <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Bouton "Voir plus" */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Voir toutes les actualités
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar identique à formation.tsx */}
          <div className="w-full md:w-1/3 space-y-8">
            {/* Section Prestations */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                CATÉGORIES
              </h3>
              <div className="space-y-3">
                {prestations.map((prestation) => (
                  <Link
                    key={prestation.name}
                    href={prestation.link}
                    className="block group"
                  >
                    <div className="p-3 border rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-200">
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">
                        {prestation.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {prestation.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Section Contact */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                RECHERCHE
              </h3>
              <div className="space-y-4">
                <input
                  placeholder="Rechercher un article..."
                  className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-800"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Rechercher
                </Button>
              </div>
            </div>

            {/* Section Articles populaires */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                ARTICLES POPULAIRES
              </h3>
              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-3 border-b last:border-0"
                  >
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-lg min-w-12 text-center">
                      <Calendar className="w-4 h-4 mx-auto" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        {item.title.split("\n")[0]}
                      </h4>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
