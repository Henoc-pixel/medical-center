"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/contactpage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponse("✅ Message envoyé avec succès !");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setResponse("❌ Échec de l'envoi du message.");
      }
    } catch (error) {
      setResponse("⚠️ Une erreur s'est produite.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-16 px-4 md:px-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
        Contactez-nous
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Infos de contact centrées */}
        <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <MapPin className="text-green-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase">
                Adresse
              </h4>
              <p className="text-gray-600">
                Plateau avenue Delafosse, Immeuble Ambassades – 2e étage
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="text-green-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase">
                Téléphone
              </h4>
              <p className="text-gray-600">(+225) 27 20 21 76 09</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Mail className="text-green-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase">
                Email
              </h4>
              <p className="text-gray-600">medic@emr.ci</p>
            </div>
          </div>

          {/* Réseaux sociaux avec liens réels */}
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <a
              href="https://facebook.com/emrci" // ← à personnaliser
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com/emrci" // ← à personnaliser
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://twitter.com/emrci" // ← à personnaliser
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-sky-500 hover:text-white transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com/company/emrci" // ← à personnaliser
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom & Prénom*"
              required
              className="border p-3 w-full rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="border p-3 w-full rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone*"
              required
              className="border p-3 w-full rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
            />
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Objet"
              className="border p-3 w-full rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message*"
            required
            rows={6}
            className="border p-3 w-full rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
          />

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white"
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer le message"}
          </Button>

          {response && (
            <p className="text-center text-sm text-gray-600">{response}</p>
          )}
        </form>
      </div>
    </div>
  );
}
