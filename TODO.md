# 📝 TODO — Suivi d'Implémentation S2P & BMAD

## Phase 0 : Audit, Dépendances & Validation Architecturale
- [x] Résoudre le conflit peer dependency `package.json` (`esbuild` vs `vite`) et installer les dépendances (dont `lenis` et `sharp`).
- [x] Valider l'architecture avec l'utilisateur ("Est-ce que l'architecture est validée ?").

## Phase 1 : Nettoyage des Assets & Conversion WebP
- [x] Convertir les 19 images du dossier `public/` en `.webp` (gain de 70% de poids).
- [x] Mettre à jour les références d'images dans `roofingData.ts`, `Hero.tsx`, `WhyUsSection.tsx`, `StatsBanner.tsx`, `FinalCta.tsx`, `ContactPage.tsx`.
- [x] Supprimer les 19 images JPG orphelines à la racine du projet (10.6 Mo libérés).
- [x] Créer les favicons officiels (`favicon.svg`, `favicon.png`, `apple-touch-icon.png`, `site.webmanifest`).

## Phase 2 : Mutualisation UI (DRY)
- [x] Créer `src/components/ui/Button.tsx` (variantes primary, secondary, dark, outline).
- [x] Créer `src/components/ui/Badge.tsx` (eyebrow / étiquette de section).
- [x] Créer `src/components/ui/SectionHeader.tsx`.
- [x] Refactoriser les composants pour utiliser les briques UI mutualisées.

## Phase 3 : Intégration de Lenis, Parallaxe & Recouvrement de Contenu
- [x] Installer `lenis` via npm.
- [x] Créer le hook `useLenis` avec support de `prefers-reduced-motion`.
- [x] Implémenter l'effet de recouvrement : le contenu glisse par-dessus le Hero sticky avec coins arrondis et ombre portée.
- [x] Parallaxe ascendante pure (sans zoom) sur l'image du Hero (`translate3d(0, -scrollY * 0.38, 0)`) et estompement progressif du texte vers le haut.
- [x] Sliders avant/après sans zoom : suppression totale des zooms/scales sur les images et les conteneurs des 4 comparateurs.
- [x] Animation fluide à l'ouverture et fermeture de la FAQ (CSS grid-rows [0fr]->[1fr] + rotation de l'icône).
- [x] Section "Pourquoi nous" : alignement vertical du texte au milieu exact de l'icône (`items-center`).
- [x] Section "Pourquoi nous" : apparition des puces avec déclenchement ciblé sur la liste, délai initial de 250ms et stagger de 120ms (parfaitement visible à l'écran).
- [x] Animation dynamique des compteurs au scroll : 2800+, 15 ans, 4.9, 24h avec courbe easeOutQuad et conservation SSG.
- [x] Footer : redirection précise vers la carte Google Maps (#localisation) et vers chacun des 4 services individuels (#service-remplacement, #service-reparation, #service-intemperies, #service-fuite).
- [x] Résolution de l'erreur d'hydratation React : différenciation propre mode dev (createRoot) vs mode prod SSG (hydrateRoot uniquement si DOM réel présent), et harmonisation serveur/client sur AnimatedCounter.
- [x] Micro-décalage (stagger) de 0.08s sur les listes de services et transitions unifiées `cubic-bezier(0.22, 1, 0.36, 1)`.
- [x] États hover/focus renforcés sur les boutons d'appel et de devis (conversion).

## Phase 4 : Architecture SSG & SEO Technique & Local
- [x] Configurer le pipeline SSG (Static Site Generation au build) avec `entry-server.tsx` et `prerender.ts`.
- [x] Ancrage local en province : Mérignac / Bordeaux Métropole, Gironde (33) avec coordonnées complètes et téléphone local 05 56 42 26 90.
- [x] Composant dédié `LocalMapSection.tsx` avec carte interactive et zone d'intervention (rayon 45 km, 15 communes desservies).
- [x] Schémas structurés Schema.org JSON-LD complets (`RoofingContractor`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`).
- [x] Fichiers SEO : `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`.
- [x] Balises géographiques et Open Graph dans `index.html` (`geo.region`, `geo.placename`, `geo.position`, `ICBM`).

## Phase 5 : Accessibilité (A11Y) & WebPerformance
- [x] Navigation clavier intégrale vérifiée (Menu tiroir, boutons, curseurs avant/après).
- [x] Attributs `aria-expanded`, `aria-label`, contrastes de couleurs WCAG AA.
- [x] Optimisation LCP (`fetchPriority="high"`, WebP) et CLS (ratios d'aspect fixes).

## Phase 7 : Conformité Légale, Fictivité ARCEP, Crédibilité & Crédit Auteur
- [x] Désactivation de l'indexation : `noindex, nofollow` dans `index.html` et `Disallow: /` dans `robots.txt`.
- [x] Bandeau sémantique d'avertissement portfolio / site de démonstration au sommet du site.
- [x] Numéros de téléphone basculés sur les plages réservées à la fiction par l'ARCEP (`05 36 49 12 34` et `06 99 00 12 34`).
- [x] Neutralisation des mentions légales sensibles : suppression de "SMA BTP" (remplacé par garantie décennale artisanale) et de "Google vérifiée" (remplacé par note de satisfaction client).
- [x] Harmonisation des délais : devis détaillé sous 48h / astreinte urgence sous 24h.
- [x] Harmonisation géographique : rayon de 35 km concentré sur Bordeaux Métropole et 15 communes voisines directes.
- [x] Nombre de toitures ajusté de 2800 à 850+ pour une crédibilité artisanale optimale.
- [x] Avis girondins avec monogrammes typographiques élégants (suppression des avatars IA générés).
- [x] Alignement Open Graph, Twitter cards et canonical sur `https://renove.vercel.app/`.
- [x] Ajout de la mention footer "Made by T.THIESSON" avec lien vers `https://present-me-lake.vercel.app/` et icône de sortie.
