## Exo Ornikar : Intégration d'une modal

### ⏱ Durée
45 minutes d'exercice + 15 minutes de discussion

### 🎯 Objectif
L'objectif de cet exercice est d'intégrer une modal, comprenant les features listées dessous, puis d'en discuter.
Tu seras autonome, mais n'hésite pas à poser des questions au besoin pendant toute la durée de l'exercice !

### ✨ Features
Voici la liste des features à ajouter à la modal. Il n'y a pas de minimum attendu, le but est d'avoir quelque chose à montrer à la fin de l'exercice et d'en discuter.

#### Principales
- Intégration mobile
- Header et footer optionnels
- Stickyness des header et du footer en mobile
- Gestion du scroll et overflow dans la modal
- Affichage et disparition de la modal

#### Bonus
- Intégration desktop
- Disparition de la modal au "click en dehors"
- Disparition de la modal au clavier sur la touche Echap
- Animation de l'entrée/sortie de la modal

*NB: Sauf composant déjà fait, on peut ajouter toutes librairies qu'on jugera utile.*

### 👩‍🎨 Design
[Lien vers le design](https://projects.invisionapp.com/d/main#/projects/prototypes/17227965)

*NB: Il faut se faire un compte Invision pour pouvoir inspecter le projet*

### 🏯 Structure du Projet
```
exo-modal
├── .storybook
└── src
    ├── composants
    │ └── Modal                   - ✍️ Composant à implémenter
    │   ├── index.js
    │   ├── stories.js
    │ └── ModalLaucher            - 🔘 Composant de test qui va toggler la Modal
    │   ├── index.js
    │   ├── stories.js
    ├── App.tsx
    └── index.tsx
```

### 🤖 Commande
`yarn storybook`: start Storybook

### 📱 Breakpoints
`small : min-width: 480px;`

`medium : min-width: 768px;`

`large : min-width: 1024px;`

`wide : min-width: 1280px;`