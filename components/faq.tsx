"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {CircleMinus, CirclePlus, MessagesSquare} from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu'est-ce que la Médecine du Travail?",
      answer:
        "La Médecine du Travail est une spécialité médicale qui protège le travailleur sur son lieu de travail en le rendant sûr, salubre et sain.",
    },
    {
      question: "Pourquoi la Médecine du travail?",
      answer:
        "La médecine du travail permet de prévenir les risques professionnels et d'améliorer les conditions de travail.",
    },
    {
      question: "A qui s'adresse la Médecine du Travail?",
      answer:
        "Elle s'adresse à tous les employeurs et salariés, quel que soit le secteur d'activité.",
    },
    {
      question: "La Médecine du Travail est-elle onéreuse?",
      answer:
        "Non, c'est un investissement qui permet de réduire les coûts liés aux accidents et maladies professionnelles.",
    },
    {
      question: "Où peut-on trouver la Médecine du Travail en Côte d'Ivoire?",
      answer:
        "Nous disposons de centres médicaux dans les principales villes du pays.",
    },
  ];

  const images = {
    medicalTeam:
      "https://emr.ci/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-14.03.15-2-wpp1706744878364-370x277.jpeg",
    productivity:
      "https://emr.ci/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-14.03.15-2-wpp1706744878364-370x277.jpeg",
  };

  return (
    <section className="py-16 bg-white-200">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Partie gauche - FAQ */}
        <div className="space-y-8 lg:w-1/2 p-24">
          <div className="text-left mb-12 flex">
            <span className="text-red-600">
                <MessagesSquare className="w-14 h-14" />
            </span>
            <h2 className="text-4xl m-4 font-extrabold text-indigo-800 hover:text-indigo-600">
              FAQ
            </h2>
          </div>
          <h4 className="text-base font-medium text-gray-400 mb-4">Questions fréquemments posées</h4>
          {faqs.map((faq, index) => (
              <div
                  key={index}
                  className="border border-white bg-white shadow-lg hover:shadow-md transform hover:scale-[1.01] transition-all duration-300 ease-in-out"
              >
                <button
                    className={`flex justify-between items-center w-full text-left p-4 transition-colors duration-200 hover:bg-indigo-800 hover:text-white ${
                        openIndex === index ? "bg-indigo-800 text-white" : "bg-gray-100 text-indigo-600"
                    }`}
                    onClick={() => toggleAccordion(index)}
                >
                  <span>
                   <span className="text-2xl font-semibold text-red-600">
                    {`0${index + 1}.   `}
                  </span>
                  <span className="text-lg font-semibold  ">
                    {`${faq.question}`}
                  </span>
                  </span>

                  <span className="text-xl font-bold text-gray-300">
                    {openIndex === index ? <CircleMinus /> : <CirclePlus />}
                  </span>
                </button>
                {openIndex === index && (
                    <div className="px-4 pb-4 m-4 text-gray-500 text-lg text-extrabold leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                )}
              </div>
          ))}
        </div>

        {/* Partie droite - Images + contenu */}
        <div className="lg:w-1/2">
          {/* Ligne 1 - Image + Texte */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="bg-gray-100 overflow-hidden relative h-full">
              <Image
                  src={images.medicalTeam}
                  alt="Équipe médicale"
                  fill
                  className="object-cover"
              />
            </div>

            {/* Texte */}
            <div className="bg-red-600 p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-white mb-4">
                NOUS VOUS FACILITONS LA VIE EN ETANT
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-white mb-4">
                <li>Le conseiller SST de l'entreprise que vous êtes</li>
                <li>Le Médecin référent de vos travailleurs</li>
                <li>
                  Interlocuteur de vos partenaires sociaux (IPS-CNPS, DSST,
                  SAMU, Inspection du travail)
                </li>
              </ol>
              <p className="font-bold text-white mt-4 text-center">
                PCM, ACTEUR INCONTOURNABLE DE VOTRE ENTREPRISE
              </p>
              <div className="text-center">
                <Link
                    href="#contact"
                    className="mt-4 inline-block text-bold bg-white hover:bg-indigo-900 hover:text-white text-indigo-700 px-6 py-2 rounded text-base transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          {/* Ligne 2 - Texte + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Texte */}
            <div className="bg-indigo-900 p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-white mb-4">
                ACCROÎTRE VOTRE PRODUCTIVITÉ
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-white mb-4">
                <li>Par un accompagnement vers une bonne santé</li>
                <li>Par la réduction des Accidents du Travail (AT)</li>
                <li>Par la prévention des Maladies Professionnelles (MP)</li>
                <li>Par un système de management de la SST performant</li>
                <li>Par la lutte contre l'absentéisme de vos travailleurs</li>
                <li>Par la maîtrise de vos dépenses de santé</li>
                <li>Par l'élaboration de programmes de prévention adaptés</li>
              </ol>
              <div className="text-center">
                <Link
                    href="#en_savoire_plus"
                    className="mt-4 inline-block text-bold bg-white hover:bg-red-600 hover:text-white text-indigo-700 px-6 py-2 rounded text-base transition-colors"
                >
                  En Savoir Plus
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="bg-gray-100 overflow-hidden relative h-full">
              <Image
                  src={images.productivity}
                  alt="Productivité en entreprise"
                  fill
                  className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Animation utilitaire (à placer dans tailwind.config si besoin) */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
