import type { NextApiRequest, NextApiResponse } from "next";
import  nodemailer  from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { full_name, email, telephone, objet, message } = req.body;

  
  if (!full_name || !email || !telephone || !objet || !message) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  console.log(transporter);

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `${objet} de ${full_name}`,
      text: message,
      html: `
        <p><strong>Nom:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l’envoi du mail:");
    console.error(error); // ← Affiche tous les détails

    res.status(500).json({
      message: "Erreur serveur",
      error: error?.toString(),
      fullError: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    });
  }
};

export default handler; 
