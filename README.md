# 🌿 L'Olivier Doré — Site Vitrine & Table Bistronomique

Bienvenue sur le dépôt du site vitrine de **L'Olivier Doré**, une application web moderne, responsive et élégante conçue pour un restaurant bistronomique aux saveurs méditerranéennes.

---

## ✨ Fonctionnalités Principales

- **🍽️ Carte & Menus Interactifs** : Navigation fluide par catégories (Entrées, Plats Signature, Pêche du Jour, Desserts, Boissons) avec filtres dynamiques, régimes alimentaires (végétarien, sans gluten) et prix en Dinars Tunisiens (TND).
- **📱 Réservations intelligentes par WhatsApp** : Formulaire interactif avec validation en temps réel. Génération instantanée d'un message structuré pré-rempli envoyé directement vers l'API WhatsApp du restaurant.
- **🖼️ Galerie Photographique Filtrable** : Présentation haute définition de la salle, de la terrasse ombragée, des assiettes signature et de l'ambiance en cuisine.
- **📍 Localisation & Accès** : Coordonnées complètes, horaires de service détaillés et intégration de carte interactive.
- **📱 Expérience Mobile-First** : Navigation latérale fluide, design adaptatif pensé pour smartphones, tablettes et écrans larges.
- **🎨 Design & Esthétique Bistronomique** : Palette soignée (Terre cuite, Olive, Crème, Brun noble), typographies raffinées (*Playfair Display* & *Plus Jakarta Sans*), micro-animations et composants réutilisables.

---

## 🛠️ Stack Technique

- **Framework** : [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styles & Design System** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Routage** : [React Router DOM v7](https://reactrouter.com/)
- **Données centralisées** : Architecture modulaire découplée (`src/data/restaurantData.js`, `menuData.js`, `aboutData.js`)

---

## 🚀 Installation & Démarrage Local

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/BelfadhelSaber/<nom-du-repo>.git
   cd vetrine
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173`.

4. **Générer le bundle de production** :
   ```bash
   npm run build
   ```

---

## 📂 Structure du Projet

```text
src/
├── assets/          # Ressources statiques et médias
├── components/      # Composants modulaires (layout, home, menu, contact, common)
├── data/            # Données centralisées (restaurantData, menuData, aboutData, etc.)
├── pages/           # Pages principales (Accueil, Carte, À propos, Galerie, Contact)
├── services/        # Logique métier & services (réservations WhatsApp, filtres)
└── utils/           # Fonctions utilitaires et validateurs de formulaires
```

---

## 👨‍💻 Auteur

Développé par [Belfadhel Saber](https://github.com/BelfadhelSaber).
