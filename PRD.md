# 📋 PRD — Projet Renove (Artisan Couvreur & Rénovation)

## 1. Contexte & Vision
Renove est un site vitrine et de conversion à fort impact pour une entreprise artisanale spécialisée dans la couverture, la rénovation et l'étanchéité de toitures.
L'objectif est d'industrialiser l'export initial AI Studio pour en faire un projet de niveau Élite :
- Zéro dégradation esthétique (respect strict des maquettes Stitch / AI Studio).
- Code 100% mutualisé (DRY), typé et modulaire.
- Rendu SSG (Static Site Generation) pour un SEO et AEO parfaits.
- Performance web extrême (Core Web Vitals : LCP < 2.5s, CLS < 0.1).
- Smooth scroll fluide Lenis et accessibilité WCAG AA.

## 2. Spécifications Fonctionnelles

### F1. Navigation & Expérience Utilisateur
- En-tête responsive avec logo terracotta, liens d'ancrage fluides et CTA d'urgence cliquable (`tel:0189542690`).
- Menu tiroir mobile accessible au clavier avec focus trap et gestion ARIA.
- Défilement cinématique et fluide orchestré par **Lenis** avec support automatique de `prefers-reduced-motion`.

### F2. Présentation des Services & Preuves Visuelles
- 4 fiches de prestations détaillées (Remplacement, Réparation, Dégâts météo, Détection de fuite).
- Sliders interactifs avant/après (`BeforeAfterSlider`) tactiles et accessibles au clavier (input range sous-jacent).

### F3. Réassurance & Preuve Sociale
- Bandeau de 4 certifications clés (`TrustBar`).
- Section sombre « Pourquoi nous faire confiance » avec carte de données flottante.
- Bandeau de métriques chiffrées (`StatsBanner`).
- Grille de témoignages clients avec notation 5 étoiles (`ReviewsSection`).
- Accordéon FAQ interactif (`FaqSection`) avec balisage sémantique et schémas Schema.org.

### F4. Tunnel de Conversion & Prise de Rendez-vous
- Page dédiée de contact / devis (`ContactPage`) avec sélecteur de service, validation de formulaire en direct et écran de confirmation immédiat.
- CTA final cinématique (`FinalCta`).

### F5. Optimisation SEO, AEO & Crawlability (SSG Enforced)
- Rendu HTML statique pré-généré au build (SSG) : le contenu textuel complet est présent dans le code source HTML dès le chargement initial.
- Schémas JSON-LD structurés : `RoofingContractor`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`.
- Métadonnées Open Graph et Twitter Card enrichies.
- Fichiers `sitemap.xml`, `robots.txt` et `llms.txt` pour l'indexation IA (Perplexity, ChatGPT, Claude) et les moteurs classiques.
- Favicon officiel vectoriel et multi-résolution aux couleurs de la marque (`#c85a32`).

## 3. Spécifications Techniques & Non-Fonctionnelles
- **Stack :** React 19, TypeScript Strict, Tailwind CSS v4, Vite 8 (mode SSG prerender).
- **Smooth Scroll :** Lenis.
- **Assets :** Conversion 100% WebP avec compression optimale, suppression de 100% des images orphelines.
- **Accessibilité (A11Y) :** Navigation clavier intégrale, attributs `aria-expanded`, contrastes validés, `alt` descriptifs.
