import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Veuillez entrer une adresse email valide'),
    subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
    message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
    consent: z.boolean().refine(val => val === true, {
        message: 'Vous devez accepter la politique de confidentialité pour envoyer votre message'
    }),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        // Validation des données
        const validatedData = contactSchema.parse(body);
        
        // Configuration du transporteur SMTP pour OVH
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'ssl0.ovh.net',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Configuration de l'email
        const mailOptions = {
            from: `"${validatedData.name}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: validatedData.email,
            subject: `[Tipaix Contact] ${validatedData.subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #8B5A96; border-bottom: 2px solid #8B5A96; padding-bottom: 10px;">
                        Nouveau message de contact - Tipaix
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <p><strong>Nom :</strong> ${validatedData.name}</p>
                        <p><strong>Email :</strong> ${validatedData.email}</p>
                        <p><strong>Sujet :</strong> ${validatedData.subject}</p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <p><strong>Message :</strong></p>
                        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B5A96; white-space: pre-wrap;">
                            ${validatedData.message}
                        </div>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                    
                    <div style="color: #666; font-size: 12px;">
                        <p>Ce message a été envoyé depuis le formulaire de contact du site Tipaix.</p>
                        <p>L'expéditeur a donné son consentement pour le traitement de ses données personnelles.</p>
                        <p>Date d'envoi : ${new Date().toLocaleString('fr-FR')}</p>
                    </div>
                </div>
            `,
            text: `
Nouveau message de contact - Tipaix

Nom: ${validatedData.name}
Email: ${validatedData.email}
Sujet: ${validatedData.subject}

Message:
${validatedData.message}

---
Date d'envoi: ${new Date().toLocaleString('fr-FR')}
L'expéditeur a donné son consentement pour le traitement de ses données personnelles.
            `,
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Message envoyé avec succès' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Données invalides', details: error.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi du message' },
            { status: 500 }
        );
    }
}