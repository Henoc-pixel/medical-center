import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Champs obligatoires manquants" });
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
      subject: subject || "Message depuis le formulaire de contact",
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Objet :</strong> ${subject || "Non spécifié"}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de l'envoi",
      error: error?.toString(),
    });
  }
}
