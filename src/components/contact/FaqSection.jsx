import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Combien de temps à l'avance dois-je réserver ma table ?",
    a: "Pour les services du soir en fin de semaine (vendredi et samedi), nous vous recommandons de réserver au moins 24 à 48 heures à l'avance. Pour les déjeuners en semaine, une réservation le matin même est généralement possible selon nos disponibilités.",
  },
  {
    q: "Comment fonctionne la confirmation sur WhatsApp ?",
    a: "En validant notre formulaire, un message récapitulant vos coordonnées, la date et le nombre de convives est préparé. Dès son envoi, notre équipe en salle vous répond en quelques minutes pour vous confirmer la réservation de votre table.",
  },
  {
    q: "Puis-je annuler ou modifier le nombre de couverts ?",
    a: "Bien entendu. Il vous suffit de nous envoyer un message sur WhatsApp ou de nous contacter par téléphone au moins 2 heures avant le service afin de libérer la table ou d'ajuster le plan de salle.",
  },
  {
    q: "Prenez-vous en compte les régimes et allergies alimentaires ?",
    a: "Absolument. Notre brigade cuisine des produits frais à la minute. Vous pouvez préciser vos intolérances (sans gluten, végétarien, sans fruits à coque...) dans le champ commentaire du formulaire ou lors de nos échanges.",
  },
  {
    q: "Est-il possible de privatiser un espace ou la terrasse ?",
    a: "Oui, nous organisons régulièrement des dîners d'entreprise, anniversaires et réceptions privées jusqu'à 60 personnes. Contactez-nous par WhatsApp ou téléphone pour élaborer un menu sur mesure.",
  },
];

/**
 * Section FAQ avec accordéons interactifs.
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 border-t border-brun-900/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Questions Fréquentes"
          title="Tout Ce Qu'il Faut Savoir Avant de Venir"
          description="Vous avez une question sur le déroulement de votre accueil ? Retrouvez les réponses à vos interrogations les plus fréquentes."
        />

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-brun-900/5 overflow-hidden shadow-soft transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-terracotta-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-brun-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-terracotta-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-brun-700 font-light leading-relaxed border-t border-brun-900/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
