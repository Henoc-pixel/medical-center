import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const {
    nom,
    prenom,
    telephone,
    email,
    entreprise,
    fonction,
    objet,
    message,
  } = req.body;

  if (!nom || !prenom || !telephone || !email || !objet || !message) {
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
      subject: `Demande de rendez-vous - ${objet}`,
      html: `
        <h2>Nouvelle demande de rendez-vous</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Entreprise :</strong> ${entreprise || "Non précisé"}</p>
        <p><strong>Fonction :</strong> ${fonction || "Non précisé"}</p>
        <p><strong>Objet :</strong> ${objet}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur d'envoi du mail :", error);
    res.status(500).json({
      message: "Erreur serveur",
      error: error?.toString(),
    });
  }
};

export default handler;
