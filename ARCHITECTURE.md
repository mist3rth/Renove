# 🏛️ ARCHITECTURE TECHNIQUE — Projet Renove

## 1. Vue d'Ensemble & Pipeline SSG

Conformément à la règle d'or SEO (interdiction du CSR pur), le projet utilise une génération statique **SSG** au moment du build :
1. **Build Client & Server :** Vite compile le bundle client et un point d'entrée SSR (`src/entry-server.tsx`).
2. **Prerendering Node :** Un script de pré-rendu statique (`prerender.ts`) exécute `renderToString` sur les routes de l'application (`/` pour l'accueil, `/contact` pour le formulaire de devis) et génère des fichiers HTML statiques contenant la totalité du DOM textuel et les métadonnées SEO/JSON-LD.
3. **Hydratation Client :** Dans le navigateur, React hydrate le DOM existant (`hydrateRoot`) pour activer l'interactivité (smooth scroll Lenis, curseurs avant/après, formulaires dynamiques).

## 2. Structure Cible des Dossiers (Clean Architecture S2P)

```text
Renov/
├── public/
│   ├── favicon.svg             # Favicon vectoriel officiel
│   ├── favicon.ico             # Fallback standard
│   ├── apple-touch-icon.png    # Icône iOS
│   ├── robots.txt              # Directives d'indexation
│   ├── sitemap.xml             # Cartographie des pages
│   ├── llms.txt                # Fichier structuré pour les agents & moteurs IA
│   └── images/ (ou root public/) *.webp  # Images optimisées WebP
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, MainLayout
│   │   ├── sections/           # Hero, Services, WhyUs, Process, Stats, Reviews, Faq, FinalCta
│   │   ├── ui/                 # Composants atomiques mutualisés (Button, Badge, SectionHeader, Input)
│   │   └── seo/                # JsonLd.tsx, MetaTags.tsx
│   ├── pages/
│   │   ├── HomePage.tsx        # Vue d'accueil
│   │   └── ContactPage.tsx     # Vue contact / devis
│   ├── data/                   # roofingData.ts (données centralisées et typées)
│   ├── hooks/                  # useLenis.ts, useMediaQuery.ts
│   ├── styles/                 # index.css (tokens & base Tailwind v4)
│   ├── entry-client.tsx        # Point d'entrée hydratation navigateur
│   ├── entry-server.tsx        # Point d'entrée SSR pour génération SSG
│   └── App.tsx                 # Orchestrateur de routes & layout
├── prerender.ts                # Moteur de génération SSG
├── PRD.md                      # Spécifications produit BMAD
├── ARCHITECTURE.md             # Ce document
├── TODO.md                     # Suivi opérationnel des stories
├── package.json
└── vite.config.ts
```

## 3. Mutualisation UI (Composants Atomiques Identifiés)

1. **`Button.tsx`** :
   - `variant="primary"` (terracotta `#c85a32` avec hover et ombre portée).
   - `variant="secondary"` (outline blanc avec bordure `#d6cfc7`).
   - `variant="emergency"` (carte d'appel sombre d'urgence avec numéro et icône).
2. **`Badge.tsx`** :
   - Eyebrows de section terracotta en majuscules avec espacement de lettre.
3. **`SectionHeader.tsx`** :
   - Regroupe l'eyebrow, le H2 sémantique et le paragraphe descriptif avec centrage ou alignement gauche.
4. **`FormField.tsx` / `Input.tsx`** :
   - Champs de formulaire avec label accessible, état d'erreur et focus ring harmonisé.

## 4. Pipeline d'Optimisation des Assets (Images WebP)
- Conversion de 19 images JPG en WebP (qualité 82-85%, réduction de poids > 75%).
- Suppression définitive des 19 fichiers orphelins encombrants à la racine.
- Attributs `loading="lazy"` et `decoding="async"` sur toutes les images sous la ligne de flottaison.
- Attribut `fetchpriority="high"` sur l'image du Hero (`hero-roof.webp`) pour garantir LCP < 2.5s.

## 5. Intégration de Lenis
- Initialisation dans un hook `useLenis` avec écoute des préférences d'accessibilité (`window.matchMedia('(prefers-reduced-motion: reduce)')`).
- Synchronisation avec les ancres de navigation (`#services`, `#why-us`, etc.).

## 6. Accessibilité (A11Y) & SEO
- Respect des critères WCAG 2.2 AA.
- Navigation 100% opérable au clavier (Tab, Espace, Entrée, touches fléchées pour le slider).
- Schémas JSON-LD `RoofingContractor`, `FAQPage`, `BreadcrumbList`.
