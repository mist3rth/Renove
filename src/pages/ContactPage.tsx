import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Phone, Mail, MapPin, Clock, ShieldCheck, Star } from 'lucide-react';
import { companyInfo } from '../data/roofingData';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [selectedService, setSelectedService] = useState('remplacement');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    postalCode: '',
    propertyType: 'maison',
    timePreference: 'indifferent',
    description: '',
    urgency: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const services = [
    { id: 'remplacement', label: 'Remplacement de toiture' },
    { id: 'reparation', label: 'Réparation ciblée' },
    { id: 'intemperies', label: 'Sinistre / Grêle / Intempéries' },
    { id: 'fuite', label: "Détection de fuite d'eau" },
    { id: 'autre', label: 'Diagnostic général / Autre' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Veuillez renseigner votre nom complet.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est obligatoire.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbf8f5] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back button */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#52525b] hover:text-[#c85a32] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l'accueil</span>
          </button>
        </div>

        {/* Success View */}
        {isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#e4dfd7] shadow-xl text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#c85a32]/10 text-[#c85a32] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
            </div>

            <h1 className="text-3xl font-medium text-[#18181b] tracking-tight">
              Demande d'inspection bien reçue !
            </h1>

            <p className="text-base sm:text-lg text-[#52525b] leading-relaxed max-w-lg mx-auto">
              Merci <span className="font-semibold text-[#18181b]">{formData.fullName}</span>. Notre artisan couvreur étudie votre dossier et vous appellera au <span className="font-semibold text-[#18181b]">{formData.phone}</span> sous 24h ouvrées pour fixer la date de l'inspection gratuite.
            </p>

            <div className="bg-[#fbf8f5] rounded-2xl p-5 border border-[#ece6de] text-left text-sm space-y-2 text-[#52525b]">
              <div className="font-bold text-[#18181b] mb-2">Récapitulatif de votre demande :</div>
              <div><strong className="text-[#18181b]">Prestation :</strong> {services.find(s => s.id === selectedService)?.label}</div>
              <div><strong className="text-[#18181b]">Email :</strong> {formData.email}</div>
              {formData.address && <div><strong className="text-[#18181b]">Adresse du bien :</strong> {formData.address} {formData.postalCode}</div>}
              <div><strong className="text-[#18181b]">Délai d'intervention :</strong> 24h à 48h ouvrées</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#c85a32] hover:bg-[#b54f2a] text-white font-semibold transition-all cursor-pointer shadow-md"
              >
                Retourner à l'accueil
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    address: '',
                    postalCode: '',
                    propertyType: 'maison',
                    timePreference: 'indifferent',
                    description: '',
                    urgency: false
                  });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#d6cfc7] bg-white text-[#18181b] font-semibold hover:bg-neutral-50 transition-all cursor-pointer"
              >
                Nouvelle demande
              </button>
            </div>
          </div>
        ) : (
          /* Main 2-Column Contact View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#e4dfd7] shadow-lg space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c85a32] uppercase mb-2 inline-block">
                  DEMANDE DE DEVIS & INSPECTION
                </span>
                <h1 className="text-3xl sm:text-4xl font-medium text-[#18181b] tracking-tight">
                  Prenez rendez-vous avec un couvreur qualifié
                </h1>
                <p className="text-[#52525b] text-base mt-2 leading-relaxed">
                  L'inspection sur site et le devis détaillé sont 100% gratuits, impartiaux et sans aucun engagement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Select Service Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-[#18181b]">
                    Type de projet ou d'intervention *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {services.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedService(srv.id)}
                        className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-left border transition-all cursor-pointer flex items-center justify-between ${
                          selectedService === srv.id
                            ? 'border-[#c85a32] bg-[#c85a32]/10 text-[#c85a32] ring-1 ring-[#c85a32]'
                            : 'border-[#e4dfd7] bg-[#fbf8f5] text-[#27272a] hover:border-neutral-400'
                        }`}
                      >
                        <span>{srv.label}</span>
                        {selectedService === srv.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#c85a32] shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Names and Phones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#18181b] mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#fbf8f5] text-sm focus:bg-white focus:outline-hidden transition-all ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#d6cfc7] focus:border-[#c85a32]'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#18181b] mb-1.5">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#fbf8f5] text-sm focus:bg-white focus:outline-hidden transition-all ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#d6cfc7] focus:border-[#c85a32]'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-[#18181b] mb-1.5">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    placeholder="jean.dupont@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border bg-[#fbf8f5] text-sm focus:bg-white focus:outline-hidden transition-all ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#d6cfc7] focus:border-[#c85a32]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-[#18181b] mb-1.5">
                      Adresse du chantier / domicile
                    </label>
                    <input
                      type="text"
                      placeholder="12 rue des Chenes"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#d6cfc7] bg-[#fbf8f5] text-sm focus:bg-white focus:border-[#c85a32] focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#18181b] mb-1.5">
                      Code postal
                    </label>
                    <input
                      type="text"
                      placeholder="75011"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#d6cfc7] bg-[#fbf8f5] text-sm focus:bg-white focus:border-[#c85a32] focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Details / Message */}
                <div>
                  <label className="block text-sm font-bold text-[#18181b] mb-1.5">
                    Description de votre besoin (fuite, âge du toit, sinistre...)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ex: Traces d'infiltrations constatées après le coup de vent..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6cfc7] bg-[#fbf8f5] text-sm focus:bg-white focus:border-[#c85a32] focus:outline-hidden transition-all"
                  />
                </div>

                {/* Urgence Checkbox */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="urgency"
                    checked={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded-sm border-amber-400 text-[#c85a32] focus:ring-[#c85a32]"
                  />
                  <label htmlFor="urgency" className="text-xs sm:text-sm text-amber-900 cursor-pointer font-medium">
                    <span className="font-bold">Intervention d'urgence requise :</span> bâche de protection immédiate ou fuite active inondant l'intérieur.
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#c85a32] hover:bg-[#b54f2a] text-white font-bold text-base transition-all duration-150 shadow-lg shadow-[#c85a32]/25 cursor-pointer"
                >
                  Envoyer ma demande d'inspection gratuite
                </button>

                <p className="text-center text-xs text-neutral-500">
                  🔒 Vos données restent strictement confidentielles.
                </p>

              </form>
            </div>

            {/* Right Column: Reassurance & Direct Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Hotline Box with French Phone */}
              <div className="bg-[#101726] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c85a32]">
                    BESOIN D'UNE RÉPONSE IMMÉDIATE ?
                  </span>
                  <h3 className="text-2xl font-bold mt-1 text-white">
                    Appelez notre permanence
                  </h3>
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                    Pour une fuite en cours ou une mise en sécurité urgente après intempéries, nos équipes se déplacent sous 24h.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2 border-t border-white/10">
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="flex items-center gap-3 text-lg font-bold text-white hover:text-[#c85a32] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#c85a32] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>{companyInfo.phone}</span>
                  </a>

                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-neutral-300" />
                    </div>
                    <span>{companyInfo.email}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-neutral-300" />
                    </div>
                    <span>{companyInfo.address}, {companyInfo.postalCode} {companyInfo.city}</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e4dfd7] shadow-sm space-y-5">
                <h4 className="text-lg font-bold text-[#18181b]">
                  Nos 4 engagements qualité
                </h4>

                <div className="space-y-4 text-sm text-[#52525b]">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#c85a32] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#18181b] block">Garantie décennale écrite SMA BTP</strong>
                      Couverture intégrale des travaux réalisés selon les normes DTU en vigueur.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#c85a32] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#18181b] block">Devis transmis en 24h ouvrées</strong>
                      Chiffrage clair, poste par poste, sans aucune ligne cachée.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c85a32] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#18181b] block">Déplacement & diagnostic 100% gratuits</strong>
                      Intervention dans toute la Gironde sans frais de dossier.
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Review Excerpt without quotes */}
              <div className="rounded-3xl p-6 bg-[#fbf8f5] border border-[#e4dfd7] space-y-3">
                <div className="flex items-center gap-1 text-[#c85a32]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c85a32]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#27272a] leading-relaxed">
                  Le devis était clair, le rendez-vous a été pris en moins de 24h et les travaux ont été menés à la perfection.
                </p>
                <div className="text-xs font-bold text-[#18181b]">
                  Daniel M., Pessac (33)
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
