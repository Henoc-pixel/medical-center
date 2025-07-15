"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function RendezVousPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    entreprise: "",
    fonction: "",
    objet: "Conseils",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const response = await fetch("/api/rendezvous", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Votre demande a été envoyée avec succès !");
      setFormData({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        entreprise: "",
        fonction: "",
        objet: "Conseils",
        message: "",
      });
    } else {
      setStatus("Une erreur est survenue lors de l’envoi.");
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-white">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-800 mb-4">
            Remplissez le formulaire de demande de rendez-vous
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        <div className="mt-6 flex gap-10 flex-col md:flex-row">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 space-y-6 bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="nom"
                type="text"
                placeholder="Nom"
                className="border p-3 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                onChange={handleChange}
                value={formData.nom}
                required
              />
              <input
                name="prenom"
                type="text"
                placeholder="Prénom"
                className="border p-3 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                onChange={handleChange}
                value={formData.prenom}
                required
              />
              <input
                name="telephone"
                type="text"
                placeholder="Téléphone"
                className="border p-3 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                onChange={handleChange}
                value={formData.telephone}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="border p-3 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <input
                name="entreprise"
                type="text"
                placeholder="Entreprise"
                className="border p-3 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                onChange={handleChange}
                value={formData.entreprise}
              />
              <input
                name="fonction"
                type="text"
                placeholder="Fonction"
                className="border p-3 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                onChange={handleChange}
                value={formData.fonction}
              />
            </div>

            <select
              name="objet"
              className="p-3 border rounded w-full focus:ring-2 focus:ring-green-800 focus:border-transparent"
              value={formData.objet}
              onChange={handleChange}
              required
            >
              <option value="Conseils">Conseils</option>
              <option value="Consultation">Consultation</option>
              <option value="Autre">Autre</option>
            </select>

            <textarea
              name="message"
              placeholder="Commentaire ou message supplémentaire :"
              className="border p-3 w-full rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
              rows={4}
              onChange={handleChange}
              value={formData.message}
              required
            />

            <Button
              type="submit"
              className="bg-blue-600 hover:bg-indigo-700 text-white w-full"
            >
              Soumettre la demande
            </Button>

            {status && (
              <p className="text-center text-sm text-gray-600">{status}</p>
            )}
          </form>

          <div className="w-full md:w-1/3 space-y-4">
            <Image
              src="https://emr.ci/wp-content/uploads/2018/10/african-american-team-working-checkup-reports-hospital-reception-desk-analyzing-patients-appointments-papers-doctor-receptionist-using-medical-forms-help-people-with-disease-scaled-770x480.jpg"
              alt="Rendez-vous"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
