"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChevronRight, Clock } from "lucide-react"; 
import Link from "next/link"


export function Appointment() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Demande de rendez-vous envoyée !")
  }

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 bg-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Prendre Rendez-vous</h2>
            <p className="mb-8">
              Prenez rendez-vous avec nos médecins spécialistes pour vos besoins
              en médecine du travail.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Examens médicaux complets
                  </h3>
                  <p className="text-white/80">
                    Consultations avec nos médecins spécialistes
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6"
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
                  <h3 className="font-semibold text-xl">Horaires flexibles</h3>
                  <p className="text-white/80">
                    Du lundi au vendredi, de 8h à 17h
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Assistance téléphonique
                  </h3>
                  <p className="text-white/80">+225 01 53 88 66 72</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-1/3 rounded-lg p-8 text-white"
            style={{
              backgroundColor: "rgb(22 101 52 / var(--tw-text-opacity, 1))",
            }}
          >
            <div className="text-center">
              {/* Logo animé */}
              <div className="flex justify-center mb-6 mt-6 animate-spin">
                <Clock className="h-12 w-12 text-white" />
              </div>

              {/* Bouton stylisé */}
              <div className="flex justify-center mt-16">
                <Link href="/rendezvous">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Prendre rendez-vous</span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
