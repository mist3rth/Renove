export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: string;
  postalCode: string;
  city: string;
  region: string;
  country: string;
  phone: string;
  phoneRaw: string;
  emergencyPhone: string;
  emergencyPhoneRaw: string;
  email: string;
  hours: string;
  latitude: number;
  longitude: number;
  serviceRadiusKm: number;
  coveredCities: string[];
  isDemoNotice: string;
}

export const companyInfo: CompanyInfo = {
  name: 'Renove Toiture',
  tagline: 'Artisan Couvreur & Rénovation de Toiture en Gironde',
  address: '18 rue des Compagnons du Devoir',
  postalCode: '33700',
  city: 'Mérignac',
  region: 'Nouvelle-Aquitaine',
  country: 'FR',
  // Plage officielle ARCEP réservée aux œuvres de fiction : 05 36 49 XX XX
  phone: '05 36 49 12 34',
  phoneRaw: '0536491234',
  // Plage mobile ARCEP fiction : 06 99 00 XX XX
  emergencyPhone: '06 99 00 12 34',
  emergencyPhoneRaw: '0699001234',
  email: 'contact@renove-demo.fr',
  hours: 'Lun - Sam : 07h30 - 19h00 (Urgences fuites 24h/7j)',
  latitude: 44.8378,
  longitude: -0.6437,
  serviceRadiusKm: 35,
  coveredCities: [
    'Mérignac',
    'Bordeaux',
    'Pessac',
    'Talence',
    'Bègles',
    'Gradignan',
    'Le Bouscat',
    'Saint-Médard-en-Jalles',
    'Cenon',
    'Floirac',
    'Villenave-d\'Ornon',
    'Bruges',
    'Eysines',
    'Blanquefort',
    'Cestas'
  ],
  isDemoNotice: 'Site de démonstration — Entreprise et données fictives'
};

export const servicesData: ServiceItem[] = [
  {
    id: 'remplacement',
    icon: 'Home',
    title: 'Remplacement de toiture',
    description: "Remplacez votre toiture vieillissante par un système durable, posé dans les règles de l'art pour protéger votre foyer pendant des décennies.",
    features: [
      'Matériaux de toiture haut de gamme (tuiles canal, romanes, ardoises, zinc)',
      'Installation certifiée et soignée conforme aux DTU en vigueur',
      "Garantie décennale sur la main-d'œuvre et matériaux"
    ],
    beforeImage: '/roof-replacement-before.webp',
    afterImage: '/roof-replacement-after.webp',
    beforeLabel: 'Avant',
    afterLabel: 'Après'
  },
  {
    id: 'reparation',
    icon: 'Wrench',
    title: 'Réparation de toiture',
    description: "Des tuiles arrachées aux solins métalliques détériorés, nous effectuons des réparations ciblées et durables pour restaurer l'étanchéité.",
    features: [
      "Interventions rapides d'urgence sous 24h",
      'Diagnostic précis et sans surcoût',
      'Matériaux rigoureusement assortis au style local'
    ],
    beforeImage: '/roof-repair-before.webp',
    afterImage: '/roof-repair-after.webp',
    beforeLabel: 'Avant',
    afterLabel: 'Après'
  },
  {
    id: 'intemperies',
    icon: 'CloudRain',
    title: "Dégâts d'intempéries & grêle",
    description: "Protégez votre habitation suite aux violents orages et tempêtes grâce à notre expertise en sinistres et notre accompagnement auprès des assureurs.",
    features: [
      'Inspection intégrale des dommages avec rapport photo',
      "Aide au montage du dossier d'assurance habitation",
      'Restauration complète, bâchage d\'urgence et mise en sécurité'
    ],
    beforeImage: '/storm-damage-before.webp',
    afterImage: '/storm-damage-after.webp',
    beforeLabel: 'Avant',
    afterLabel: 'Après'
  },
  {
    id: 'fuite',
    icon: 'Droplets',
    title: 'Détection & réparation de fuites',
    description: 'Nous localisons les infiltrations invisibles avec précision et réparons la source pour stopper définitivement les dégâts des eaux coûteux.',
    features: [
      'Détection thermique et hygrométrique non-destructive',
      "Protection immédiate contre l'humidité",
      'Résultats garantis dans le temps'
    ],
    beforeImage: '/leak-repair-before.webp',
    afterImage: '/leak-repair-after.webp',
    beforeLabel: 'Avant',
    afterLabel: 'Après'
  }
];

export const processSteps: ProcessItem[] = [
  {
    number: '01',
    title: 'Inspection Gratuite',
    description: "Un artisan couvreur certifié examine chaque élément de votre toiture sur place et partage avec vous un diagnostic objectif et transparent.",
    image: '/process-01-inspection.webp'
  },
  {
    number: '02',
    title: 'Devis Sur-Mesure',
    description: "Un devis clair, transparent et détaillé poste par poste sous 48h sans lignes vagues, ni pression d'achat.",
    image: '/process-02-estimate.webp'
  },
  {
    number: '03',
    title: 'Pose Professionnelle',
    description: 'Notre équipe locale réalise les travaux selon le planning convenu, avec nettoyage méticuleux du chantier chaque fin de journée.',
    image: '/process-03-install.webp'
  }
];

export const reviewsData: ReviewItem[] = [
  {
    id: '1',
    name: 'Sophie M.',
    initials: 'SM',
    location: 'Mérignac (33)',
    rating: 5,
    content: "Après un épisode d'orage de grêle ayant endommagé notre toiture à Mérignac, l'artisan a tout géré avec professionnalisme. Ils ont sécurisé la toiture dès le lendemain et le nettoyage était impeccable."
  },
  {
    id: '2',
    name: 'Damien R.',
    initials: 'DR',
    location: 'Pessac (33)',
    rating: 5,
    content: "Deux entreprises m'assuraient qu'il fallait un remplacement complet très coûteux. L'artisan est venu et a diagnostiqué une fuite de solin : il nous a fait économiser plusieurs milliers d'euros grâce à une réparation ciblée et honnête."
  },
  {
    id: '3',
    name: 'Laurence B.',
    initials: 'LB',
    location: 'Bordeaux Caudéran (33)',
    rating: 5,
    content: "Une équipe ponctuelle, polie et très respectueuse des lieux. Le devis a été scrupuleusement respecté sans aucun surcoût imprévu. Je recommande vivement pour toute rénovation en Gironde."
  },
  {
    id: '4',
    name: 'Stéphane G.',
    initials: 'SG',
    location: 'Saint-Médard-en-Jalles (33)',
    rating: 5,
    content: "De l'inspection initiale gratuite jusqu'au nettoyage final à l'aimant pour les clous dans le jardin, tout a été mené de main de maître. Notre nouvelle toiture en tuiles romanes est superbe."
  }
];

export const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'Combien coûte une réparation ou une rénovation de toiture en Gironde ?',
    answer: "Le coût dépend de la surface, de la pente, de l'accès et du type de tuiles. C'est pourquoi nous débutons systématiquement par un déplacement et un diagnostic gratuit sur place sans engagement avec un devis détaillé au juste prix."
  },
  {
    id: '2',
    question: 'Ai-je vraiment besoin d’un remplacement total ou une réparation suffit-elle ?',
    answer: "Si les dommages sont localisés et que la charpente et les liteaux sont sains, une réparation ciblée suffit amplement. En tant qu'artisans indépendants, nous préconisons toujours la solution la plus économique et durable."
  },
  {
    id: '3',
    question: 'L’assurance habitation prend-elle en charge les réparations de toiture ?',
    answer: "Oui, notamment lors de sinistres météo (tempête, grêle, vent violent, chute de branche). Nous vous remettons un dossier technique complet avec photographies et devis détaillé aux normes requises par les experts d'assurance."
  },
  {
    id: '4',
    question: 'Quelle est votre zone d\'intervention en Gironde ?',
    answer: "Nous intervenons dans un rayon de 35 km autour de Mérignac et de Bordeaux Métropole : Mérignac, Bordeaux, Pessac, Talence, Bègles, Gradignan, Le Bouscat, Saint-Médard-en-Jalles, Bruges, Eysines, Blanquefort, Cestas et communes voisines."
  },
  {
    id: '5',
    question: 'Quelles garanties protègent mes travaux de toiture ?',
    answer: "Tous nos chantiers de rénovation et réfection sont couverts par notre Assurance Garantie Décennale artisanale légale et notre Responsabilité Civile Professionnelle. Vous bénéficiez d'une protection juridique et technique complète de 10 ans."
  }
];
