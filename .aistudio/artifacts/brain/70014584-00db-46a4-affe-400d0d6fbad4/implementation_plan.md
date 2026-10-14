# ReoRoof — Site Vitrine Artisan Couvreur Haute Fidélité

Reconstitution haute fidélité du site ReoRoof d'après les captures d'écran fournies, avec typographie soignée, palette terracotta et blanc cassé chaleureux, curseurs interactifs avant/après pour chaque service, et une **page dédiée complète de contact et demande d'inspection gratuite** (au lieu d'une modale).

## Décisions Clés & Retours Utilisateur

> [!IMPORTANT]
> Décisions confirmées :
> - **Page de contact dédiée (Nouveau)** : Les boutons "Inspection gratuite", "Obtenir mon devis" et les CTA de prise de contact dirigent l'utilisateur vers une **page dédiée complète** de prise de rendez-vous et contact (avec fil d'Ariane pour revenir à l'accueil, formulaire détaillé, récapitulatif des garanties, coordonnées directes et confirmation).
> - **Langue** : Traduction intégrale des contenus en français avec le même ton professionnel, clair et engageant que la maquette originale.
> - **Curseurs Avant/Après** : Curseurs de comparaison glissants interactifs (glisser-déposer tactile et souris) pour les 4 services présentés.

---

## 1. Vue d'Ensemble & Parcours Multipage

- **Expérience Principale (Accueil)** : Landing page vitrine monopage haut de gamme avec toutes les sections de la maquette (Hero, Barre de confiance, Services avec curseurs Avant/Après, Pourquoi nous, Méthode en 3 étapes, Chiffres clés, Avis clients, FAQ, CTA final, Footer).
- **Page Dédiée de Contact / Inspection** : Page entière accessible depuis la navigation et chaque CTA ("Inspection gratuite", "Demander un devis", "Nous contacter"), incluant :
  - En-tête avec bouton retour vers l'accueil
  - Formulaire de demande de devis & inspection (Nom, Téléphone, Email, Type de toiture / prestation, Adresse & Code postal, Date souhaitée, Description)
  - Volet latéral de réassurance (Numéro d'urgence direct `(555) 813-9260`, Garantie décennale, Déplacement gratuit, Avis clients)
  - Écran de confirmation interactif après envoi

---

## 2. Expérience Utilisateur & Design Visuel

### A. Page d'Accueil (Landing Page)
1. **Barre Supérieure & En-tête** : Logo ReoRoof, liens d'ancrage (Services, Pourquoi nous, Méthode, Avis, FAQ), numéro d'urgence direct `(555) 813-9260`, et bouton d'action principal menant vers la page Contact.
2. **Barre de Confiance** : 4 garanties (Agréé & Assuré, Certifié constructeur, Financement disponible, +15 ans d'expérience).
3. **Hero Section** : Artisan en action, accroche percutante, CTA principal vers la page Contact, appel d'urgence direct, et 3 métriques clés.
4. **Section Services (Curseurs Avant/Après)** : 4 prestations (Remplacement, Réparation, Dégâts météo/grêle, Détection de fuites) avec curseurs interactifs fluides à glissière.
5. **Section "Pourquoi Nous"** : Bloc sombre signature, 6 engagements contractuels, photo avec carte flottante "+2 800 Toitures / 15 ans".
6. **Processus en 3 Étapes** : Étapes numérotées `01`, `02`, `03` avec imagerie contextuelle soignée.
7. **Bandeau Chiffres Clés** : 4 métriques en typographie imposante sur fond sombre.
8. **Avis Clients** : Grille 2x2 avec liserés terracotta fins, étoiles, témoignages géolocalisés et photos de profil.
9. **FAQ Accordéon** : Questions fréquentes avec déploiement animé et bouton d'accès au formulaire.
10. **Bannière CTA Finale & Footer** : Bloc d'action pleine largeur avec fond toiture, et footer à 3 colonnes.

### B. Page Dédiée de Contact & Devis
- **Mise en page 2 colonnes** :
  - *Colonne principale* : Formulaire de demande d'inspection gratuit, clair et aéré, avec sélection visuelle du service souhaité, champs de coordonnées validés en direct, et bouton d'envoi terracotta.
  - *Colonne latérale (Réassurance)* : Coordonnées directes, engagements ReoRoof (déplacement gratuit, devis sous 24h, aucune obligation d'achat), horaires d'intervention d'urgence.

### Identité Visuelle & Typographie
- **Typographie** : `Plus Jakarta Sans` pour les titres géométriques et le texte courant, avec graisses 400, 600 et 700.
- **Palette** :
  - *Fond principal* : Blanc cassé chaleureux (`#fbf8f5` / `#f6f3ee`)
  - *Terracotta* : `#c85a32` (CTA primaire, liserés d'accent, icônes)
  - *Fonds sombres* : Bleu nuit anthracite (`#0e1520` / `#111827`)
  - *Filets & séparateurs* : `#e4dfd7`

---

## 3. Architecture Technique

### Schéma des Vues et Composants

```
┌──────────────────────────────────────────────────────────────┐
│                           App.tsx                            │
│                  (Routeur d'état actif : page)               │
│                                                              │
│  ├── [VUE 1 : ACCUEIL ('home')]                              │
│  │    ├── TopBanner & Header (avec lien vers /contact)       │
│  │    ├── HeroSection                                        │
│  │    ├── TrustBadgeBar                                      │
│  │    ├── ServicesSection + BeforeAfterSlider (x4)           │
│  │    ├── WhyUsSection (Fond sombre + Carte stats)           │
│  │    ├── ProcessSection (01, 02, 03)                        │
│  │    ├── StatsBanner (Chiffres clés)                        │
│  │    ├── ReviewsSection (Grille 2x2 avec filets terracotta) │
│  │    ├── FaqSection (Accordéon dynamique)                   │
│  │    ├── FinalCtaBanner                                     │
│  │    └── Footer                                             │
│  │                                                           │
│  └── [VUE 2 : PAGE CONTACT ('contact')]                      │
│       ├── Header standard avec bouton retour Accueil         │
│       ├── Fil d'Ariane ("Accueil > Inspection gratuite")     │
│       ├── ContactInspectionForm (Formulaire complet)         │
│       ├── TrustSidebar (Coordonnées, garanties, urgence)     │
│       ├── Écran de confirmation après soumission             │
│       └── Footer                                             │
└──────────────────────────────────────────────────────────────┘
```

### États Principaux
- `currentPage`: `'home' | 'contact'` (avec synchronisation de l'ancre URL `#contact` ou `#home`).
- `selectedService`: Pré-sélection du service si le visiteur clique depuis un service précis.
- `beforeAfterProgress`: État des 4 curseurs de glissement (0 à 100%).
- `openFaqIndex`: Index de l'élément FAQ actuellement déplié.
