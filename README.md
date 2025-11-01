# JEFE IPTV 29 — Mini-site privé (dark)

## Fichiers
- `index.html` — mini-site complet (intro, gate clé `?k=jefe29`, packs, barre flottante, bouton Partager)
- `robots.txt` — anti-indexation totale
- `middleware.js` — Basic Auth (Vercel/Next.js) si tu veux un mot de passe serveur
- `README.md` — ce fichier

## Déploiement GitHub Pages
1. Crée un dépôt `jefe-iptv` (ou autre) sur GitHub.
2. Uploade **tous** ces fichiers à la racine du dépôt.
3. Va dans **Settings → Pages** :
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Ton site sera dispo en `https://<user>.github.io/<repo>/`.
5. Accès direct au catalogue : `?k=jefe29&go=catalogue`

## Déploiement Vercel (option plus sécurisée)
1. Crée un repo avec ces fichiers.
2. Import dans Vercel → Deploy.
3. Modifie `USER`/`PASS` dans `middleware.js` pour activer le mot de passe serveur.
