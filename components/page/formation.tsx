"use client";
import Image from "next/image";
import {useState} from "react";
import {
    CircleMinus,
    CirclePlus,
    ChevronRight,
    Phone,
    Mail,
    MapPin,
    Clock,
    Calendar,
    User,
    Users,
    BookOpen,
    MessageCircle,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface FormData {
    full_name: string;
    email: string;
    telephone: string;
    objet: string;
    message: string;
}

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

export default function FormationsPage() {
    const [openModule, setOpenModule] = useState<string | null>(null);

    const toggleModule = (module: string) => {
        setOpenModule(openModule === module ? null : module);
    };

    // Données des prestations
    const prestations = [
        {
            name: "MÉDECINE SOCIALE",
            link: "/prestations/medecine-sociale",
            icon: <Users className="text-blue-600 w-5 h-5"/>,
            description: "Programmes de santé publique en entreprise",
        },
        {
            name: "MÉDICALE - EXAMEN",
            link: "/prestations/examens-medicaux",
            icon: <User className="text-blue-600 w-5 h-5"/>,
            description: "Visites médicales et bilans de santé",
        },
        {
            name: "SANTÉ PUBLIQUE - SUIVI",
            link: "/prestations/sante-publique",
            icon: <Calendar className="text-blue-600 w-5 h-5"/>,
            description: "Surveillance épidémiologique",
        },
        {
            name: "MÉDECINE PRÉVENTIVE",
            link: "/prestations/prevention",
            icon: <BookOpen className="text-blue-600 w-5 h-5"/>,
            description: "Vaccinations et dépistages",
        },
        {
            name: "MÉDECINE CURATIVE",
            link: "/prestations/soins",
            icon: <Phone className="text-blue-600 w-5 h-5"/>,
            description: "Prise en charge médicale",
        },
    ];

    // Contenu détaillé des modules
    const moduleDetails = {
        CCST: {
            title: "Certificat de Compétences",
            description:
                "Formation complète sur les fondamentaux de la santé au travail",
            content: (
                <div className="space-y-4">
                    <p>
                        Cette formation certifiante permet d'acquérir les compétences
                        nécessaires pour :
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Identifier les risques professionnels</li>
                        <li>Mettre en place des mesures préventives</li>
                        <li>Connaître la réglementation en vigueur</li>
                        <li>Gérer les situations d'urgence</li>
                    </ul>
                    <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center text-sm text-gray-600">
              <Clock className="mr-2 w-4 h-4"/> 3 jours (21h)
            </span>
                        <span className="flex items-center text-sm text-gray-600">
              <Calendar className="mr-2 w-4 h-4"/> Prochaine session:
              15/06/2024
            </span>
                    </div>
                </div>
            ),
        },
        INCENDIES: {
            title: "Prévention et Lutte contre les Incendies",
            description: "Maîtrisez les techniques de prévention et d'intervention",
            content: (
                <div className="space-y-4">
                    <p>Programme complet couvrant :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Théorie du feu et classes de feu</li>
                        <li>Utilisation des extincteurs</li>
                        <li>Évacuation des locaux</li>
                        <li>Exercices pratiques</li>
                        <li>Plan d'intervention</li>
                    </ul>
                    <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center text-sm text-gray-600">
              <Clock className="mr-2 w-4 h-4"/> 2 jours (14h)
            </span>
                        <span className="flex items-center text-sm text-gray-600">
              <Calendar className="mr-2 w-4 h-4"/> Prochaine session:
              22/06/2024
            </span>
                    </div>
                </div>
            ),
        },
        PREMIERS_SECOURS: {
            title: "Premiers Secours en Entreprise",
            description: "Savoir réagir face aux urgences médicales",
            content: (
                <div className="space-y-4">
                    <p>Formation pratique incluant :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Protection et alerte</li>
                        <li>Gestes qui sauvent (PLS, massage cardiaque, DAE)</li>
                        <li>Prise en charge des brûlures, saignements, fractures</li>
                        <li>Gestion du stress en situation d'urgence</li>
                    </ul>
                    <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center text-sm text-gray-600">
              <Clock className="mr-2 w-4 h-4"/> 1 jour (7h)
            </span>
                        <span className="flex items-center text-sm text-gray-600">
              <Calendar className="mr-2 w-4 h-4"/> Prochaine session:
              05/07/2024
            </span>
                    </div>
                </div>
            ),
        },
        GESTES_POSTURES: {
            title: "Gestes et Postures",
            description: "Prévention des TMS (Troubles Musculo-Squelettiques)",
            content: (
                <div className="space-y-4">
                    <p>Cette formation pratique enseigne :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Principes d'économie d'effort</li>
                        <li>Postures de travail adaptées</li>
                        <li>Manutention manuelle des charges</li>
                        <li>Aménagement du poste de travail</li>
                        <li>Exercices d'échauffement</li>
                    </ul>
                    <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center text-sm text-gray-600">
              <Clock className="mr-2 w-4 h-4"/> 1 jour (7h)
            </span>
                        <span className="flex items-center text-sm text-gray-600">
              <Calendar className="mr-2 w-4 h-4"/> Prochaine session:
              12/07/2024
            </span>
                    </div>
                </div>
            ),
        },
    };
    type ModuleKey = keyof typeof moduleDetails;
    const keys: ModuleKey[] = Object.keys(moduleDetails) as ModuleKey[];

    {/* Formulaire de reservation */
    }
    const [reservationData, setReservationData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        fonction: "",
        formations: [] as string[],
        nombre_personnes: "",
        commentaire: "",
    });
    const [reservationStatus, setReservationStatus] = useState<string>("");
    const handleReservationChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setReservationData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleFormationCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target;
        setReservationData((prev) => ({
            ...prev,
            formations: checked
                ? [...prev.formations, value]
                : prev.formations.filter((f) => f !== value),
        }));
    };
    const handleReservationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setReservationStatus("Envoi en cours...");

        const response = await fetch("/api/reservation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reservationData),
        });

        if (response.ok) {
            setReservationStatus("Demande envoyée avec succès !");
            setReservationData({
                nom: "",
                prenom: "",
                email: "",
                telephone: "",
                entreprise: "",
                fonction: "",
                formations: [],
                nombre_personnes: "",
                commentaire: "",
            });
        } else {
            setReservationStatus("Erreur lors de l'envoi de la demande.");
        }
    };
    {/* Fin du traitement */
    }

    {/* Formulaire de prise de conseil */
    }
    const [formData, setFormData] = useState<FormData>({
        full_name: "",
        email: "",
        telephone: "",
        objet: "",
        message: "",
    });
    const [status, setStatus] = useState<string>("");
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("Message envoyé avec succès !");
            setFormData({
                full_name: "",
                email: "",
                telephone: "",
                objet: "",
                message: "",
            });
            console.log("Message envoyé avec succès");
        } else {
            setStatus("Erreur lors de l'envoi du message.");
            console.log("Erreur lors de l'envoi du message");
        }
    };
    {/* Fin du traitement */
    }


    return (
        <div className="flex flex-col items-center py-10 px-4 bg-white">
            <div className="max-w-5xl w-full">
                {/* En-tête amélioré */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-indigo-800 mb-4">
                        FORMATIONS
                    </h1>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Les formations pour une bonne sécurité au travail
                    </p>
                </div>

                <div className="mt-6 flex gap-6 flex-col md:flex-row">
                    <div className="w-full md:w-2/3">
                        <p className="mb-6 text-lg">
                            Nos formations sont conçues pour diminuer tous les risques liés à
                            l'exercice des activités professionnelles
                        </p>

                        {/* Image avec effet de survol */}
                        <div className="relative overflow-hidden rounded-lg mb-8 group">
                            <Image
                                src="https://emr.ci/wp-content/uploads/2018/10/african-american-team-working-checkup-reports-hospital-reception-desk-analyzing-patients-appointments-papers-doctor-receptionist-using-medical-forms-help-people-with-disease-scaled-770x480.jpg"
                                alt="Formation"
                                width={800}
                                height={500}
                                className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Accordion des modules */}
                        <div className="mt-6 space-y-4">
                            <h3 className="text-2xl font-bold text-indigo-800 mb-4">
                                Les différents modules
                            </h3>

                            {Object.entries(moduleDetails).map(([key, module]) => (
                                <div
                                    key={key}
                                    className="border border-white bg-white shadow-lg hover:shadow-md transform hover:scale-[1.01] transition-all duration-300 ease-in-out"
                                >
                                    <button
                                        className={`flex justify-between items-center w-full text-left p-4 transition-colors duration-200 hover:bg-green-800 hover:text-white ${
                                            openModule === key
                                                ? "bg-green-800 text-white"
                                                : "bg-gray-100 text-blue-700"
                                        }`}
                                        onClick={() => toggleModule(key)}
                                    >
                                        <div className="text-left">
                      <span className="text-lg font-semibold block">
                        {module.title}
                      </span>
                                            <span className="text-sm text-indigo-800 mt-1">
                        {module.description}
                      </span>
                                        </div>
                                        {openModule === key ? (
                                            <CircleMinus className="text-xl font-bold text-gray-300"/>
                                        ) : (
                                            <CirclePlus className="text-xl font-bold text-gray-300"/>
                                        )}
                                    </button>
                                    {openModule === key && (
                                        <div className="p-6 bg-white animate-fade-in">
                                            {module.content}
                                            <Link href="#reservation-form">
                                                <Button
                                                    className="mt-4 bg-blue-600 hover:bg-indigo-700 transition-colors">
                                                    Réserver Maintenant
                                                    <ChevronRight className="ml-2 h-4 w-4"/>
                                                </Button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Reservation Form amélioré */}
                        <form
                            id="reservation-form"
                            className="mt-12 space-y-6 bg-gray-50 p-6 rounded-lg"
                            onSubmit={handleReservationSubmit}
                        >
                            <h3 className="text-2xl font-bold text-indigo-800 mb-6">
                                Formulaire de Réservation
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="nom"
                                        className="text-slate-700 font-medium"
                                    >
                                        Nom <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="nom"
                                        name="nom"
                                        value={reservationData.nom}
                                        onChange={handleReservationChange}
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
                                        id="prenom"
                                        name="prenom"
                                        value={reservationData.prenom}
                                        onChange={handleReservationChange}
                                        placeholder="Prénom"
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
                                        id="telephone"
                                        name="telephone"
                                        value={reservationData.telephone}
                                        onChange={handleReservationChange}
                                        placeholder="+225 07 99 99 99 99"
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
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={reservationData.email}
                                        onChange={handleReservationChange}
                                        placeholder="compte@domaine.com"
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
                                        id="entreprise"
                                        name="entreprise"
                                        value={reservationData.entreprise}
                                        onChange={handleReservationChange}
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
                                        id="fonction"
                                        name="fonction"
                                        value={reservationData.entreprise}
                                        onChange={handleReservationChange}
                                        placeholder="Fonction"
                                        className="bg-slate-100 border-slate-200 focus:bg-white"
                                        required
                                    />
                                </div>
                            </div>

                            <fieldset className="mt-8">
                                <legend className="text-lg font-semibold text-gray-800 mb-4">
                                    Formation(s) <span className="text-red-600">*</span>
                                </legend>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {keys.map((type) => (
                                        <label
                                            key={type}
                                            htmlFor={`formation-${type}`}
                                            className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-3 shadow-sm hover:bg-gray-50 transition-colors duration-200 min-h-[56px]"
                                        >
                                             <span className="text-gray-800 text-sm font-medium">
                                                {moduleDetails[type].title}
                                             </span>

                                            <input
                                                id={`formation-${type}`}
                                                type="checkbox"
                                                value={type}
                                                checked={reservationData.formations.includes(type)}
                                                onChange={handleFormationCheckbox}
                                                className="relative w-11 h-6 bg-gray-200 checked:bg-red-600 rounded-full appearance-none cursor-pointer transition duration-300 focus:outline-none
                                                    before:content-[''] before:absolute before:left-1 before:top-1 before:bg-white before:h-4 before:w-4 before:rounded-full before:transition before:duration-300
                                                checked:before:translate-x-5"
                                            />
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="nombre_personnes"
                                    className="text-slate-700 font-medium"
                                >
                                    Nombre de personne <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="number"
                                    id="nombre_personnes"
                                    name="nombre_personnes"
                                    value={reservationData.nombre_personnes}
                                    onChange={handleReservationChange}
                                    placeholder="Nombre de personnes"
                                    className="bg-slate-100 border-slate-200 focus:bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="commentaire"
                                    className="text-slate-700 font-medium"
                                >
                                    Votre message
                                </Label>
                                <Textarea
                                    id="commentaire"
                                    name="commentaire"
                                    value={reservationData.commentaire}
                                    onChange={handleReservationChange}
                                    placeholder="Entrez votre message..."
                                    className="bg-slate-100 border-slate-200 focus:bg-white min-h-[120px] resize-none"
                                    rows={6}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="bg-blue-600 hover:bg-indigo-700 text-white w-full"
                            >
                                Soumettre la reservation
                            </Button>
                            {reservationStatus && (
                                <p className="text-center text-sm text-gray-600">
                                    {reservationStatus}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Sidebar améliorée */}
                    <div className="w-full md:w-1/3 space-y-8">
                        {/* Section Prestations */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3
                                id="formations"
                                className="font-bold text-xl mb-6 text-indigo-800 flex items-center gap-2"
                            >
                                <BookOpen className="w-5 h-5"/>
                                Nos Prestations
                            </h3>
                            <div className="space-y-3">
                                {prestations.map((prestation) => (
                                    <Link
                                        key={prestation.name}
                                        href={prestation.link}
                                        className="block group"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 border rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-200">
                                            <div className="bg-blue-100 p-2 rounded-full">
                                                {prestation.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">
                                                    {prestation.name}
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    {prestation.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Section Contact */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="font-bold text-xl mb-6 text-indigo-800 flex items-center gap-2">
                                <Phone className="w-5 h-5"/>
                                Contact Rapide
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white p-2 rounded-full">
                                        <Phone className="text-blue-600 w-5 h-5"/>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Téléphone</p>
                                        <p className="font-medium">+225 01 53 88 66 72</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-white p-2 rounded-full">
                                        <Mail className="text-blue-600 w-5 h-5"/>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">
                                            contact@cabinet-pcm.ci
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-white p-2 rounded-full mt-1">
                                        <MapPin className="text-blue-600 w-5 h-5"/>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Adresse</p>
                                        <p className="font-medium">
                                            Cocody Angre Djorobite Bessikoi, Abidjan
                                            <br/>
                                            Côte d'Ivoire
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire de demande de conseil */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-bold text-xl mb-6 text-indigo-800 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5"/>
                                Demande de conseil
                            </h3>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <Input
                                        type="text"
                                        placeholder="Nom & Prénom*"
                                        className="bg-slate-100 border-slate-200 focus:bg-white"
                                        required
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        placeholder="E-mail*"
                                        type="email"
                                        className="bg-slate-100 border-slate-200 focus:bg-white"
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        placeholder="Téléphone*"
                                        className="bg-slate-100 border-slate-200 focus:bg-white"
                                        required
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        placeholder="Objet"
                                        className="bg-slate-100 border-slate-200 focus:bg-white"
                                        name="objet"
                                        value={formData.objet}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        id="commentaire"
                                        name="commentaire"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Entrez votre message..."
                                        className="bg-slate-100 border-slate-200 focus:bg-white min-h-[120px] resize-none"
                                        rows={6}
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="bg-red-600 hover:bg-indigo-700 text-white w-full"
                                >
                                    Envoyer la demande
                                </Button>
                                {status && (
                                    <p className="text-center text-sm text-gray-600">{status}</p>
                                )}
                            </form>
                        </div>

                        {/* Section Prochaines Sessions */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-bold text-xl mb-6 text-indigo-800 flex items-center gap-2">
                                <Calendar className="w-5 h-5"/>
                                Prochaines Sessions
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(moduleDetails).map(([key, module]) => (
                                    <div
                                        key={key}
                                        className="flex items-start gap-3 pb-3 border-b last:border-0"
                                    >
                                        <div className="bg-red-100 text-red-800 p-2 rounded-lg min-w-12 text-center">
                                            <Calendar className="w-4 h-4 mx-auto"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">
                                                {module.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {module.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
