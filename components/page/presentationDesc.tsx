"use client";

// ... le reste de vos imports

import { FileText, Heart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion"; // Importez motion de framer-motion

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

export function PresentationDesc() {
  return (
    <>
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="py-16 px-4 max-w-6xl mx-auto"
      >
        <motion.p
          variants={item}
          className="text-gray-500/100 text-base leading-relaxed font-semibold text-center"
        >
          A notre service, nous comptons une équipe pluridisciplinaire
          comprenant des{" "}
          <span className="text-green-600 font-bold">
            Médecins <br /> du Travail
          </span>
          , des{" "}
          <span className="text-green-600 font-bold">
            Urgentistes Réanimateurs
          </span>
          , des{" "}
          <span className="text-green-600 font-bold">
            Psychologues & Psychiatres du Travail
          </span>
          , des <br />{" "}
          <span className="text-green-600 font-bold">Diététiciens</span>, des{" "}
          <span className="text-green-600 font-bold">Ergonomes</span>, des{" "}
          <span className="text-green-600 font-bold">Toxicologues</span>, des{" "}
          <span className="text-green-600 font-bold">
            hygiénistes industriels
          </span>
          , des{" "}
          <span className="text-green-600 font-bold">
            Infirmiers <br /> spécialisés
          </span>
          , etc.
        </motion.p>

        <motion.p
          variants={item}
          className="text-gray-500/100 text-base leading-relaxed text-center font-semibold mt-6"
        >
          Le Cabinet a à sa tête{" "}
          <span className="text-green-600 font-bold">Dr Tiemoko</span>, Médecin
          du travail, ONACI 2402,{" "}
          <span className="text-green-600 font-bold">
            Secrétaire Adjoint <br /> de la Société Ivoirienne de Médecine du
            Travail (SIMT)
          </span>
          .
        </motion.p>
      </motion.section>

      {/* nos objetifs */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={item}
            className="text-3xl font-bold text-center text-blue-900"
          >
            Nos objectifs
          </motion.h2>
          <motion.div
            variants={item}
            className="w-20 h-1 bg-green-600 mx-auto mt-4 mb-6"
          ></motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={item}>
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Mettre au service de votre entreprise notre expertise
                      confirmée et l'expérience éprouvée de nos équipes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Rendre conforme votre politique SST aux valeurs normatives
                      internationales et aux dispositions réglementaires locales
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Accompagner la mise en place de votre Système de
                      Management de la Santé et Sécurité au Travail (SMSST)
                      selon les références normatives ISO 45001 version 2018
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Vous faire bénéficier de notre réseau ouest-africain de
                      SST y compris le Ghana et le Nigeria
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={item} className="relative">
              <Image
                src="/presentationDesc.png?height=810&width=1080"
                alt="Équipe médicale au travail"
                width={1080}
                height={810}
                className="rounded-lg object-cover w-full h-[400px] hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              variants={item}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Notre équipe pluridisciplinaire est composée de :
              </h3>

              <motion.div
                variants={container}
                className="grid grid-cols-2 gap-4 text-sm"
              >
                <div className="space-y-2">
                  {[
                    "Médecins du travail",
                    "Psychologues du travail",
                    "Hygiénistes industriels",
                    "Diététiciens",
                    "Ingénieurs (QHSE)",
                    "Biologistes",
                    "Urgentistes",
                  ].map((itemText) => (
                    <motion.div
                      key={itemText}
                      variants={item}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{itemText}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    "Infirmiers spécialisés",
                    "Ergonomes",
                    "ORL",
                    "Assistantes sociales",
                    "Toxicologues industriels",
                    "Allergologues",
                    "Ophtalmologues",
                  ].map((itemText) => (
                    <motion.div
                      key={itemText}
                      variants={item}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{itemText}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-200 text-white py-8"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-lg">
              <span className="text-blue-800/100 font-semibold antialiased">
                {" "}
                Nous sommes à votre écoute.
              </span>{" "}
              <span className="font-semibold antialiased">
                Appelez-nous au +225 01 53 88 66 72
              </span>{" "}
              ou
              <span className="font-semibold antialiased">
                {" "}
                demandez un rendez-vous en ligne.
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
