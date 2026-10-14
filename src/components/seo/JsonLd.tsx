import React from 'react';
import { companyInfo, faqData } from '../../data/roofingData';

export const JsonLd: React.FC = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['RoofingContractor', 'HomeAndConstructionBusiness'],
    '@id': 'https://renove.vercel.app/#organization',
    name: companyInfo.name,
    legalName: `${companyInfo.name} (Projet de Démonstration)`,
    description: "Projet de démonstration portfolio artisan couvreur zingueur en Gironde : rénovation complète de toitures, réparations d'urgences, bâchage et détection de fuites.",
    url: 'https://renove.vercel.app',
    telephone: `+33${companyInfo.phoneRaw.substring(1)}`,
    email: companyInfo.email,
    image: 'https://renove.vercel.app/hero-roof.webp',
    logo: 'https://renove.vercel.app/favicon.svg',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
      addressLocality: companyInfo.city,
      postalCode: companyInfo.postalCode,
      addressRegion: companyInfo.region,
      addressCountry: companyInfo.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.latitude,
      longitude: companyInfo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:30',
        closes: '19:00'
      }
    ],
    areaServed: companyInfo.coveredCities.map(city => ({
      '@type': 'City',
      name: city
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '154',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Couverture et Rénovation',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Remplacement et Réfection de toiture'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réparation de toiture d\'urgence et fuite d\'eau'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réparation de sinistre météo et grêle'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://renove.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Devis Gratuit Toiture',
        item: 'https://renove.vercel.app/#contact'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
