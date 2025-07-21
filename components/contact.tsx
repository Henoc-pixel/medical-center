"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4 hover:text-indigo-600">
            CONTACTEZ-NOUS
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center flex items-start p-4 rounded-lg transition-all duration-300 hover:ring-2 ring-blue-500 hover:shadow-md hover:-translate-y-4">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Adresse</h3>
            <p className="text-gray-600">Cocody Angre Djorobite Bessikoi, Abidjan</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center flex items-start p-4 rounded-lg transition-all duration-300 hover:ring-2 ring-blue-500 hover:shadow-md hover:-translate-y-4">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
            <p className="text-gray-600">+225 01 53 88 66 72</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center flex items-start p-4 rounded-lg transition-all duration-300 hover:ring-2 ring-blue-500 hover:shadow-md hover:-translate-y-4">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">contact@cabinet-pcm.ci</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center flex items-start p-4 rounded-lg transition-all duration-300 hover:ring-2 ring-blue-500 hover:shadow-md hover:-translate-y-4">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Heures d'ouverture</h3>
            <p className="text-gray-600">Lun - Ven: 8h - 17h</p>
            <p className="text-gray-600">Sam: 9h - 13h</p>
          </div>
        </div>

        <div className=" lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7875.877568258866!2d-3.966176359664115!3d5.385368048289255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1932dc4dac8ff%3A0xe2556c8bda07665f!2sPHARMACIE%20SAINT%20VIATEUR!5e0!3m2!1sen!2sus!4v1752801590371!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
