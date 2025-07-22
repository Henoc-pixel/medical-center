"use client";

import Image from "next/image";

type RelatedPost = {
  title: string;
  date: string;
  image: string;
  link: string;
};

const relatedPosts: RelatedPost[] = [
  {
    title: "Visites annuelles chez JUMIA",
    date: "Juin 15, 2024",
    image:
      "https://emr.ci/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-17-at-12.09.34-wpp1730115313275-440x267.jpeg",
    link: "#",
  },
  {
    title: "Visites médicales à l’ANAC",
    date: "Juin 28, 2024",
    image:
      "https://emr.ci/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-25-at-11.15.40-7-wpp1724299897220-440x267.jpeg",
    link: "#",
  },
  {
    title:
      "Médecine du travail : Notre participation au 3ème Congrès Scientifique à Grand-Bassam",

    date: "14 Fév 2024",

    image:
      "https://emr.ci/wp-content/uploads/2024/02/IMG-20240214-WA0064-440x267.jpg",
    link: "#",
  },
  {
    title: "Médecine du travail : Interventions en entreprise",

    date: "07 Fév 2024",

    image:
      "https://emr.ci/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-28-at-10.22.54-440x297.jpeg",
    link: "#",
  },
  {
    title:
      "Participation de l'Espace Médical la Rotonde au 3ème Congrès Scientifique de la SMIT",

    date: "07 Fév 2024",

    image:
      "https://emr.ci/wp-content/uploads/2024/02/IMG-20240214-WA0064-440x267.jpg",
    link: "#",
  },
];

export default function RelatedPosts() {
  return (
    <div className="mt-16">
      {/* Titre */}
      <h2 className="text-center text-2xl font-bold text-blue-800 mb-2">
        Related posts
      </h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-6 rounded"></div>

      {/* Conteneur vertical scrollable */}
      <div
        style={{
          maxHeight: "600px",
          overflowY: "auto",
          paddingRight: "4px",
          scrollbarWidth: "thin",
        }}
        className="space-y-6"
      >
        {relatedPosts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden block"
            style={{
              border: "1px solid #e5e7eb",
              paddingBottom: "8px",
            }}
          >
            <div className="relative w-full h-[160px]">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="font-semibold text-blue-900 hover:text-blue-600 text-base">
                {post.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
