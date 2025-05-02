"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

type Translations = {
  [key: string]: {
    fr: string
    en: string
  }
}

// Define translations
const translations: Translations = {
  // Header
  home: {
    fr: "Accueil",
    en: "Home",
  },
  about: {
    fr: "Présentation",
    en: "About",
  },
  services: {
    fr: "Prestations",
    en: "Services",
  },
  contact: {
    fr: "Contact",
    en: "Contact",
  },
  // Hero
  heroTitle: {
    fr: "Médecine du travail en Côte d'Ivoire",
    en: "Occupational Medicine in Ivory Coast",
  },
  heroSubtitle: {
    fr: "1er centre spécialisé en Médecine du Travail en Côte d'Ivoire",
    en: "First specialized center for Occupational Medicine in Ivory Coast",
  },
  appointment: {
    fr: "Prendre Rendez-vous",
    en: "Book Appointment",
  },
  learnMore: {
    fr: "En savoir plus",
    en: "Learn more",
  },
  // Services
  servicesTitle: {
    fr: "Nos Prestations",
    en: "Our Services",
  },
  medicalExams: {
    fr: "Examens médicaux",
    en: "Medical examinations",
  },
  workplaceVisits: {
    fr: "Visites des lieux de travail",
    en: "Workplace visits",
  },
  healthEducation: {
    fr: "Éducation sanitaire",
    en: "Health education",
  },
  riskAssessment: {
    fr: "Évaluation des risques professionnels",
    en: "Occupational risk assessment",
  },
  // Contact
  contactTitle: {
    fr: "Contactez-Nous",
    en: "Contact Us",
  },
  address: {
    fr: "Plateau avenue Delafosse, Abidjan",
    en: "Plateau avenue Delafosse, Abidjan",
  },
  phoneNumber: {
    fr: "+225 01 53 88 66 72",
    en: "+225 01 53 88 66 72",
  },
  downloadBrochure: {
    fr: "Télécharger Notre Brochure",
    en: "Download Our Brochure",
  },
  // Footer
  copyright: {
    fr: "© 2024 Espace Médical La Rotonde. Tous droits réservés.",
    en: "© 2024 Espace Médical La Rotonde. All rights reserved.",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
