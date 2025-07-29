"use client";
import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";


export default function RendezVousPage() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        entreprise: "",
        fonction: "",
        objet: "",
        message: "",
    });
    const [status, setStatus] = useState("");


    const objets = ["Conseils", "Consultation", "Autre"];
    type MonSelectProps = {
        value: string;
        onChange: (value: string) => void;
    };
    const MonSelect = ({ value, onChange }: MonSelectProps) => {
        return (
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full bg-slate-100 border-slate-200 focus:bg-white">
                    <SelectValue placeholder="Sélectionnez un objet" />
                </SelectTrigger>
                <SelectContent>
                    {objets.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        );
    };


    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
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
                            <div className="space-y-2">
                                <Label
                                    htmlFor="nom"
                                    className="text-slate-700 font-medium"
                                >
                                    Nom <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    placeholder="Nom"
                                    className="bg-slate-100 border-slate-200 focus:bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="prenom"
                                    className="text-slate-700 font-medium"
                                >
                                    Prénom(s) <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    placeholder="Prénom(s)"
                                    className="bg-slate-100 border-slate-200 focus:bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="telephone"
                                    className="text-slate-700 font-medium"
                                >
                                    Téléphone <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="telephone"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    placeholder="Téléphone"
                                    className="bg-slate-100 border-slate-200 focus:bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-slate-700 font-medium"
                                >
                                    E-mail <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="contact@domain.com"
                                    className="bg-slate-100 border-slate-200 focus:bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="entreprise"
                                    className="text-slate-700 font-medium"
                                >
                                    Entreprise <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="entreprise"
                                    name="entreprise"
                                    value={formData.entreprise}
                                    onChange={handleChange}
                                    placeholder="Entreprise"
                                    className="bg-slate-100 border-slate-200 focus:bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="fonction"
                                    className="text-slate-700 font-medium"
                                >
                                    Fonction <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="fonction"
                                    name="fonction"
                                    value={formData.fonction}
                                    onChange={handleChange}
                                    placeholder="Fonction"
                                    className="bg-slate-100 border-slate-200 focus:bg-white"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <MonSelect
                                value={formData.objet}
                                onChange={(val) => setFormData({ ...formData, objet: val })}
                            />
                        </div>

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
                                placeholder="Commentaire ou message supplémentaire..."
                                className="bg-slate-100 border-slate-200 focus:bg-white min-h-[120px] resize-none"
                                rows={6}
                            />
                        </div>

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
