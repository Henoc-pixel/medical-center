
export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/propos.jpeg?height=400&width=600"
                  alt="Medical center"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Années d'Expérience</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">À propos de nous</h2>
            <p className="text-gray-700 mb-6">
              Le <strong>CABINET PREVENT CARE MEDICAL</strong> est un centre médical spécialisé en médecine du travail qui apporte son
              expertise aux entreprises de tous secteurs d'activités en Côte d'Ivoire.
            </p>
            <p className="text-gray-700 mb-6">
              Centre spécialisé en Santé et Sécurité au Travail totalisant 10 ans d’expérience dans plusieurs secteurs d’activités dont les secteurs Minier, Pétrolier, Manutentionnaire, Btp, Agro-industriel, Pharmaceutiques, Phytosanitaires, Commerces & Services, Grandes distributions, etc…
            </p>
            <p className="text-gray-700 mb-6">
              Notre équipe est formée à la pratique internationale normative SST ISO 45001 version 2018. Nous protégeons vos travailleurs sur leurs lieux de travail en les rendant sûrs, salubres et sains conformément aux dispositions réglementaires.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900">Expertise</h3>
                  <p className="text-sm text-gray-600">Équipe de médecins spécialistes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Efficacité</h3>
                  <p className="text-sm text-gray-600">Services rapides et efficaces</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-sm text-gray-600">Équipements médicaux modernes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Disponibilité</h3>
                  <p className="text-sm text-gray-600">Service disponible 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
