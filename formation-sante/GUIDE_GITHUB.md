# Formation en santé — Que faire sur GitHub pour que je puisse travailler sur votre application ?

## Votre projet (d'après vos réponses)
- **Public :** professionnels de santé (médecins, infirmiers, soignants)
- **Type :** application web (accessible sur téléphone et PC)
- **Première version (V1) :** catalogue de cours → leçons → quiz → suivi de progression

---

## Important à comprendre (1 minute)

Je **ne peux pas me connecter directement à votre compte GitHub** depuis cette conversation Arena, et c'est normal pour votre sécurité.

👉 **Ne me donnez jamais** votre mot de passe GitHub ni un jeton d'accès (token).

Nous allons donc travailler comme ceci :

1. **je construis l'application ici**, dans cet espace de travail.
2. Vous la testez ici grâce à un **aperçu en direct** (comme un vrai site).
3. Quand vous validez, je vous livre le projet **prêt à mettre sur GitHub**.
4. **Vous** publiez le projet sur votre compte GitHub en suivant les étapes ci-dessous (environ 5 minutes).

Vous pouvez même commencer **sans avoir encore créé le dépôt GitHub**. GitHub n'est nécessaire qu'à la fin, pour enregistrer et partager le code.

---

## ÉTAPE 1 — Créer le dépôt sur GitHub (à faire une seule fois, ~2 minutes)

1. Allez sur **https://github.com** et connectez-vous à votre compte.
2. Cliquez sur le bouton **`+`** en haut à droite → **New repository**.
3. **Repository name (nom du dépôt)** : mettez un nom simple, sans espace, sans accent.
   Exemples :
   - `formation-sante-pro`
   - `sante-formation-app`
   - ou le nom de votre future application, par exemple `medforma`
4. **Description** (facultatif) : par exemple `Application web de formation pour professionnels de santé — cours, quiz et suivi de progression`
5. **Public ou Private ?**
   - Choisissez **Private** pour commencer : seul vous verrez le code.
   - Vous pourrez le rendre Public plus tard si vous le souhaitez.
6. **Ne cochez RIEN** en dessous :
   - ❌ `Add a README file`
   - ❌ `Add .gitignore`
   - ❌ `Choose a license`
   
   → C'est important : je vais créer ces fichiers moi-même ici. Si GitHub les crée aussi, cela peut créer des conflits.
7. Cliquez sur **Create repository**.
8. GitHub affiche une page avec une adresse du type :
   ```
   https://github.com/VOTRE-NOM/formation-sante-pro
   ```
   **Copiez cette adresse et envoyez-la-moi ici.** Cela me permet de mettre les bonnes informations dans la documentation du projet.

✅ C'est tout pour l'instant sur GitHub. Le dépôt peut rester vide pendant que je construis la V1.

---

## ÉTAPE 2 — Ce que je vais faire ici pour vous

Quand vous me direz **« Commence la V1 »**, je vais créer :

- Une page d'accueil présentant vos formations
- Un **catalogue de formations** (avec des exemples pour démontrer : par exemple urgences, diabète, hygiène hospitalière, cardiologie…)
- Une page **cours** avec ses leçons
- Un **quiz** à la fin des leçons, avec score et correction
- Un **tableau de bord** avec la progression de l'utilisateur (cours commencés, terminés, %)
- Un système simple de connexion (pour la démo de la V1)
- Un fichier `README.md` expliquant comment démarrer le projet

Vous pourrez cliquer et tester l'application en aperçu en direct, me demander des modifications (« change les couleurs », « ajoute une formation sur… », etc.), puis nous passerons à l'étape 3.

---

## ÉTAPE 3 — Mettre le projet sur votre GitHub (à la fin, ~5 minutes)

Je vous accompagnerai au moment venu. Il existe 2 façons de faire :

### Méthode A — Sans ligne de commande (recommandée si vous débutez) : GitHub Desktop

1. Téléchargez **GitHub Desktop** : https://desktop.github.com
2. Connectez-vous avec votre compte GitHub.
3. Téléchargez le dossier du projet que je vous aurai préparé ici.
4. Dans GitHub Desktop : **File → Add local repository…** → choisissez le dossier du projet.
5. Cliquez sur **Publish repository** et choisissez votre dépôt `formation-sante-pro`.
6. C'est en ligne ✅. Plus tard, après chaque modification, ce sera : **Commit to main** → **Push origin**.

### Méthode B — Avec les commandes Git (si vous êtes à l'aise)

Depuis le dossier du projet, dans un terminal :

```bash
git init
git add .
git commit -m "Version 1 - application de formation en santé"
git branch -M main
git remote add origin https://github.com/VOTRE-NOM/formation-sante-pro.git
git push -u origin main
```

(Remplacez `VOTRE-NOM` par votre nom d'utilisateur GitHub.)

> 💡 Je préparerai un fichier `.gitignore` pour que les fichiers inutiles (comme `node_modules`) ne soient jamais envoyés sur GitHub. Vous n'avez pas à vous en occuper.

---

## Questions fréquentes

**Dois-je créer le dépôt avant que vous commenciez ?**
Non. Vous pouvez le créer maintenant (Étape 1) ou à la fin. je peux construire la V1 dès maintenant.

**GitHub, ça met mon application en ligne pour les utilisateurs ?**
Non. GitHub sert à **enregistrer et sauvegarder le code**. Pour que les professionnels de santé utilisent l'application sur Internet, il faudra ensuite une étape d'**hébergement** (par exemple Vercel ou Netlify, souvent gratuits pour démarrer). Je vous guiderai aussi pour cette étape, le moment venu.

**Public ou Privé ?**
Privé pour commencer. Vous déciderez plus tard.

**Attention — domaine de la santé ⚠️**
- Ne mettez **jamais de données réelles de patients** dans l'application ni sur GitHub.
- Le contenu médical des cours doit être rédigé / validé par des professionnels qualifiés. Je mettrai des contenus d'exemple pour la démonstration, à remplacer par vos contenus validés.

---

## Prochaine action pour vous

Répondez-moi simplement avec :

1. **Le nom que vous voulez donner à l'application** (ou dites-moi « propose-moi des noms »)
2. **Le lien de votre dépôt GitHub** si vous l'avez créé — sinon écrivez « pas encore créé »
3. **« Commence la V1 »**

Exemple de réponse :
> Nom : MedForma — pas encore créé — Commence la V1

Et si vous avez déjà des idées de formations (spécialités, thèmes des premiers cours), ajoutez-les : je m'en servirai au lieu des exemples.
