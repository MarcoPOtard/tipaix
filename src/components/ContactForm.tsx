'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactForm as ContactFormType } from '@/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter la politique de confidentialité pour envoyer votre message'
  }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Votre message a été transmis avec succès !');
        reset();
      } else {
        const error = await response.json();
        alert(`Erreur lors de l'envoi : ${error.error || 'Une erreur est survenue'}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-light text-purple-200 mb-3 tracking-wide">
            Nom *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-black bg-opacity-50 border border-tipaix-light border-opacity-30 rounded-none text-purple-100 focus:border-tipaix-light focus:outline-none transition-colors backdrop-blur-sm"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-400 italic">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-light text-purple-200 mb-3 tracking-wide">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-black bg-opacity-50 border border-tipaix-light border-opacity-30 rounded-none text-purple-100 focus:border-tipaix-light focus:outline-none transition-colors backdrop-blur-sm"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400 italic">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-light text-purple-200 mb-3 tracking-wide">
          Sujet *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className="w-full px-4 py-3 bg-black bg-opacity-50 border border-tipaix-light border-opacity-30 rounded-none text-purple-100 focus:border-tipaix-light focus:outline-none transition-colors backdrop-blur-sm"
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-red-400 italic">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-light text-purple-200 mb-3 tracking-wide">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full px-4 py-3 bg-black bg-opacity-50 border border-tipaix-light border-opacity-30 rounded-none text-purple-100 focus:border-tipaix-light focus:outline-none transition-colors backdrop-blur-sm resize-none"
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-400 italic">{errors.message.message}</p>
        )}
      </div>

      {/* Case à cocher consentement */}
      <div className="flex items-start space-x-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 w-4 h-4 text-tipaix-light bg-black bg-opacity-50 border border-tipaix-light border-opacity-30 rounded-none focus:ring-tipaix-light focus:ring-1"
        />
        <label htmlFor="consent" className="text-xs text-purple-200 font-light leading-relaxed">
          J'accepte que mes données personnelles soient collectées et traitées conformément à la{' '}
          <a 
            href="/mentions-legales" 
            className="text-tipaix-light hover:text-purple-300 underline underline-offset-2 hover:no-underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité
          </a>
          {' '}pour répondre à ma demande. *
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-400 italic">{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 border-2 border-tipaix-light text-tipaix-light font-light tracking-wide hover:bg-tipaix-light hover:text-black transition-all duration-500 relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">
          {isSubmitting ? 'Transmission en cours...' : 'Transmettre le Message'}
        </span>
        <div className="absolute inset-0 bg-tipaix-light transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </button>

      {/* Information sur l'utilisation des données */}
      <div className="bg-tipaix-light bg-opacity-5 border border-tipaix-light border-opacity-20 p-4 mt-4">
        <h4 className="text-sm font-medium text-tipaix-light mb-2 tracking-wide">Utilisation de vos données</h4>
        <p className="text-xs text-purple-200 font-light leading-relaxed">
          Les informations recueillies via ce formulaire sont transmises à MICIM et La Tipaix 
          pour répondre à votre demande. Elles sont conservées 1 an maximum et ne sont jamais 
          transmises à des tiers.
        </p>
      </div>

      {/* Indication champs obligatoires */}
      <div className="text-center mt-4">
        <p className="text-xs text-purple-300 font-light italic">
          * Champs obligatoires
        </p>
      </div>
    </form>
  );
}