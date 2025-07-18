"use client";

import { useState } from "react";
import {
  Mail,
  Globe,
  Headphones,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="min-h-screen bg-gray-50 p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12 mt-12">
        Appelez-nous ou remplissez le formulaire
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Company Information */}
          <div className="space-y-8 lg:col-span-1">
            {/* Siège Social */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  SIÈGE SOCIAL
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Abidjan Cocody Angré Djorobite Bessikoi -<br />
                  Prêt de la Pharmacie Saint Viateur -<br />
                  Lot 5344, Ilot 468
                </p>
              </div>
            </div>

            {/* Centre d'Appel */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <Headphones className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  CENTRE D'APPEL
                </h3>
                <p className="text-slate-600 mb-1">Ouvert 24/7</p>
                <p className="text-slate-600">(+225) 27 20 21 76 09</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <Mail className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  EMAIL
                </h3>
                <p className="text-slate-600">medical@pcm.ci</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-600 hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-600 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-lg lg:col-span-2">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nom & Prénom */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-slate-700 font-medium"
                    >
                      Nom & Prénom(s) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nom & Prénom(s)"
                      className="bg-slate-100 border-slate-200 focus:bg-white"
                      required
                    />
                  </div>

                  {/* E-mail */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-slate-700 font-medium"
                    >
                      E-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="compte@domaine.com"
                      className="bg-slate-100 border-slate-200 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Téléphone */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-slate-700 font-medium"
                    >
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+225 07 99 99 99 99"
                      className="bg-slate-100 border-slate-200 focus:bg-white"
                      required
                    />
                  </div>

                  {/* Objet */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-slate-700 font-medium"
                    >
                      Objet
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: demande d'information"
                      className="bg-slate-100 border-slate-200 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-slate-700 font-medium"
                  >
                    Votre message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Entrez votre message..."
                    className="bg-slate-100 border-slate-200 focus:bg-white min-h-[120px] resize-none"
                    rows={6}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
                {response && (
                  <p className="text-center text-sm text-gray-600">
                    {response}
                  </p>
                )}
                {/* Privacy Notice */}
                <p className="text-center text-base text-slate-500 italic antialiased mt-8">
                  Votre adresse email ne sera pas publiée.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
