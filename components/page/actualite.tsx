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
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ActualitesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);

  // Données des actualités complètes comme sur l'image
  const newsItems = [
    {
      title: "Formation aux gestes de premiers secours",
      description: "Médiathèque",
      date: "03 Fév 2024",
      tag: "Formation",
      image:
        "https://emr.ci/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-25-at-11.15.40-7-wpp1724299897220-440x297.jpeg",
    },
    {
      title: "Visite médicale annuelle à l'ANAC",
      description: "Actualités",
      date: "07 Fév 2024",
      tag: "Visite",
      image:
        "https://emr.ci/wp-content/uploads/2024/03/medical-team-440x297.jpg",
    },
    {
      title:
        "Médecine du travail : Notre participation au 3ème Congrès Scientifique à Grand-Bassam",
      description: "Actualités",
      date: "14 Fév 2024",
      tag: "Événement",
      image:
        "https://emr.ci/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-17-at-12.09.34-wpp1730115313275-440x297.jpeg",
    },
    {
      title: "Médecine du travail : Interventions en entreprise",
      description: "Médiathèque",
      date: "07 Fév 2024",
      tag: "Intervention",
      image:
        "https://emr.ci/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-28-at-10.22.54-440x297.jpeg",
    },
    {
      title:
        "Participation de l'Espace Médical la Rotonde au 3ème Congrès Scientifique de la SMIT",
      description: "Actualités",
      date: "07 Fév 2024",
      tag: "Événement",
      image:
        "https://emr.ci/wp-content/uploads/2024/02/worker-health-check-440x297.jpg",
    },
    {
      title: "Visite annuelle chez JAMA",
      description: "Actualités",
      date: "14 Fév 2024",
      tag: "Visite",
      image:
        "https://emr.ci/wp-content/uploads/2023/12/safety-protocols-440x297.jpg",
    },
  ];

  // Données des prestations (categuories)
  const prestations = [
    {
      name: "ACTUALITÉS",
      link: "/prestations/medecine-sociale",
      description: "Programmes de santé publique en entreprise",
    },
    {
      name: "MÉDIATHÈQUE",
      link: "/prestations/examens-medicaux",
      description: "Visites médicales et bilans de santé",
    }
  ];

  // Articles populaires avec images
  const popularArticles = [
    {
      title: "Formation aux gestes de premiers secours",
      date: "28 Fév 2024",
      image:
        "https://emr.ci/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-25-at-11.15.40-7-wpp1724299897220-440x297.jpeg",
    },
    {
      title: "Visites annuelles chez JAMA",
      date: "23 Sept 2024",
      image:
        "https://emr.ci/wp-content/uploads/2024/03/medical-team-440x297.jpg",
    },
    {
      title: "Visites médicales annuelles à l'ANAC",
      date: "31 Jan 2024",
      image:
        "https://emr.ci/wp-content/uploads/2024/02/worker-health-check-440x297.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-white">
      <div className="max-w-5xl w-full">
        {/* En-tête */}
        <div className="text-center mb-12" id="actualites">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">ACTUALITÉS</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toutes les dernières actualités de notre cabinet médical
          </p>
        </div>

        <div className="mt-6 flex gap-6 flex-col md:flex-row">
          {/* Partie principale avec les cartes d'actualités */}
          <div className="w-full md:w-2/3">
            {/* Grille des cartes d'actualités */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="overflow-hidden h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.tag}
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
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3 space-y-8">
            {/* Section Catégories */}
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

            {/* Section Recherche */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                RECHERCHE
              </h3>
              <div className="space-y-4">
                <input
                  placeholder="Rechercher un article..."
                  className="border p-3 w-full rounded focus:ring-2 focus:ring-green-800"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Rechercher
                </Button>
              </div>
            </div>

            {/* Section Articles populaires avec images */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                ARTICLES POPULAIRES
              </h3>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-4 border-b last:border-0"
                  >
                    <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 hover:text-blue-600 cursor-pointer">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Section Articles populaires avec images */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-xl mb-6 text-blue-800">TAGS</h3>
              <div className="space-y-4">
                <div className="flex-shrink-0  overflow-hidden rounded-lg">
                  <img
                src="https://emr.ci/wp-content/uploads/2018/10/african-american-team-working-checkup-reports-hospital-reception-desk-analyzing-patients-appointments-papers-doctor-receptionist-using-medical-forms-help-people-with-disease-scaled-770x480.jpg"
                  
                    alt="Tag Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
