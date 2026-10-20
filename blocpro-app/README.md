# BlocPro — ركن المحترف

## Application de formation en santé

Application **web** de formation continue pour **professionnels de santé** :
catalogue de formations → leçons → quiz corrigés → suivi de progression.

🔗 Dépôt GitHub : https://github.com/walidhamrit-blip/app-formation-sante

---

## ✨ Ce que contient cette version (V1)

- **Accueil** avec présentation et chiffres clés
- **Catalogue de 6 formations** (urgences/RCP, diabète, hygiène hospitalière, ECG, plaies & pansements, communication patient) avec **recherche** et **filtres** par catégorie et niveau
- **18 leçons** : texte structuré, points clés et encadré « À retenir »
- **6 quiz** (30 questions) avec **corrections expliquées** — réussite à partir de 70 %
- **Tableau de bord** : progression par formation et progression globale
- **Connexion de démonstration** (nom + profession) — aucune donnée n'est envoyée sur un serveur
- **3 langues — ordre officiel : عربي / English / Français**
  - **Arabe : langue principale des utilisateurs** (par défaut au premier lancement, affichage de droite à gauche)
  - **English : deuxième langue des utilisateurs**
  - **Français : langue du spécialiste qui contrôle le contenu** (version « maître », voir ci-dessous)
  - Interface, cours et quiz entièrement traduits ; le choix de langue et la progression sont conservés d'une langue à l'autre.
- Progression sauvegardée **dans le navigateur** de l'utilisateur (localStorage)

> ⚠️ **Contenus de démonstration.** Les textes médicaux doivent être validés et adaptés par vos formateurs (recommandations et protocoles en vigueur) avant un usage en formation réelle. Ne jamais saisir de données réelles de patients.

---

## ▶️ Voir l'application (2 façons)

**Le plus simple :** double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.

**Ou avec un petit serveur local** (recommandé), dans le dossier du projet :

```bash
python3 -m http.server 8080
```

Puis ouvrez http://localhost:8080

---

## 🚀 Publier cette V1 sur votre GitHub

Votre dépôt existe déjà : `walidhamrit-blip/app-formation-sante`.

### Option A — avec les commandes Git

Si ce dossier n'est pas encore lié à GitHub, dans un terminal à la racine du projet :

```bash
git init
git branch -M main
git remote add origin https://github.com/walidhamrit-blip/app-formation-sante.git
```

Puis, pour publier (la première fois et à chaque modification) :

```bash
git add .
git commit -m "BlocPro V1 - cours, quiz et progression"
git push -u origin main
```

### Option B — sans terminal, avec GitHub Desktop

1. Installez **GitHub Desktop** : https://desktop.github.com et connectez-vous.
2. **File → Add local repository…** → choisissez le dossier du projet (s'il n'est pas encore un dépôt Git, GitHub Desktop proposera de le créer).
3. Écrivez un message de commit (ex. `BlocPro V1`) → **Commit to main**.
4. **Publish repository** (ou **Push origin**) en choisissant votre dépôt `app-formation-sante`.

> 🔒 Ne partagez jamais votre mot de passe GitHub ni de jeton d'accès (token) à qui que ce soit.

---

## 🌍 Mettre l'application en ligne gratuitement (GitHub Pages)

Une fois les fichiers sur GitHub :

1. Sur la page du dépôt, cliquez sur **Settings → Pages** (menu de gauche).
2. **Build and deployment → Source : Deploy from a branch**.
3. Choisissez la branche **`main`** et le dossier **`/ (root)`**, puis **Save**.
4. Après 1 à 2 minutes, votre application est en ligne à l'adresse :

   **https://walidhamrit-blip.github.io/app-formation-sante/**

Chaque nouveau `push` sur `main` mettra automatiquement le site à jour.

---

## 📁 Structure du projet

```
app-formation-sante/
├── index.html        → page principale (en-tête, pied de page, fenêtre de connexion)
├── css/
│   └── style.css     → design de l'application
├── js/
│   ├── data.js       → ★ CONTENU MAÎTRE EN FRANÇAIS (contrôlé par le spécialiste)
│   ├── data.ar.1.js / data.ar.2.js → traduction arabe du contenu (langue principale)
│   ├── data.en.1.js / data.en.2.js → traduction anglaise du contenu
│   ├── i18n.js       → textes de l'interface en arabe / English / français
│   └── app.js        → logique : langues, navigation, quiz, progression
├── README.md         → ce document
└── .gitignore
```

## ✏️ Ajouter ou modifier une formation (flux de travail du spécialiste)

1. Le **spécialiste rédige/valide d'abord le contenu en français** dans **`js/data.js`** (la version maître) : copiez un bloc de formation existant, changez `id`, `titre`, `description`, les `lecons` et les questions du `quiz` (champ `reponse` = numéro de la bonne réponse, en commençant à 0).
2. **Traduisez ensuite le même bloc** dans `js/data.ar.*.js` (arabe) et `js/data.en.*.js` (anglais) en gardant **exactement les mêmes `id`** de formation et de leçons : c'est ce qui permet aux utilisateurs de changer de langue sans perdre leur progression.
3. Les textes de l'interface (boutons, menus…) se trouvent dans **`js/i18n.js`** ; chaque clé doit exister dans les 3 langues.

Aucune autre modification n'est nécessaire : l'accueil, le catalogue, le quiz et le tableau de bord se mettent à jour automatiquement dans les 3 langues.

## 🗺 Pistes pour la V2

- Vrais comptes utilisateurs et progression sauvegardée côté serveur (base de données)
- Espace « formateur » pour créer les cours sans toucher au code
- Certificats PDF à la fin d'une formation validée
- Vidéos dans les leçons, classes en direct (webinaires)
- Application mobile
- Paiement en ligne si formations payantes

## 🛠 Technique

HTML + CSS + JavaScript « vanilla » (sans dépendance, sans installation) : le projet s'ouvre partout, se publie gratuitement sur GitHub Pages, Vercel ou Netlify, et reste facile à faire évoluer.
