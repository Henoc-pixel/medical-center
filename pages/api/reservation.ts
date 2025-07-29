import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const {
    nom,
    prenom,
    email,
    telephone,
    entreprise,
    fonction,
    formations,
    nombre_personnes,
    commentaire,
  } = req.body;

  if (
    !nom ||
    !prenom ||
    !email ||
    !telephone ||
    !formations ||
    !nombre_personnes
  ) {
    return res.status(400).json({ message: "Champs requis manquants" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Nouvelle réservation de formation - ${prenom} ${nom}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Entreprise :</strong> ${entreprise || "Non précisé"}</p>
        <p><strong>Fonction :</strong> ${fonction || "Non précisé"}</p>
        <p><strong>Formations sélectionnées :</strong> ${formations.join(
          ", "
        )}</p>
        <p><strong>Nombre de personnes :</strong> ${nombre_personnes}</p>
        <p><strong>Commentaire :</strong><br/>${commentaire || "Aucun"}</p>
      `,
    });

    res.status(200).json({ message: "Réservation envoyée avec succès" });
  } catch (error) {
    console.error("Erreur d'envoi de mail :", error);
    res.status(500).json({
      message: "Erreur serveur",
      error: error?.toString(),
    });
  }
};

export default handler;
