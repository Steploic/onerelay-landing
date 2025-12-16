# 🚀 OneRelay Landing Page

**L'intelligence retail pour les boutiques africaines**

Landing page officielle de OneRelay - une plateforme SaaS de segmentation client et campagnes marketing ciblées pour les boutiques de mode en Afrique.

![OneRelay Preview](preview.png)

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Structure du projet](#-structure-du-projet)
- [Installation](#-installation)
- [Déploiement](#-déploiement)
- [Personnalisation](#-personnalisation)
- [Intégration Backend](#-intégration-backend)
- [Contribution](#-contribution)

## 🎯 À propos

OneRelay transforme les campagnes SMS génériques (5-10% de conversion) en messages personnalisés ciblés (30-40% de conversion) pour les boutiques de mode au Cameroun et en Afrique.

Cette landing page présente :
- La proposition de valeur
- Les fonctionnalités de la plateforme
- Une démo interactive des écrans
- Un formulaire d'inscription pour les boutiques

## ✨ Fonctionnalités

### Page Web
- 🎨 Design moderne et professionnel
- 📱 100% responsive (mobile-first)
- ⚡ Performance optimisée (pas de dépendances lourdes)
- 🌍 Optimisé pour le marché africain
- 🔍 SEO-friendly

### Sections
1. **Hero** - Message principal avec comparaison avant/après
2. **Problème** - Les défis des boutiques actuelles
3. **Fonctionnalités** - Les 6 features clés de OneRelay
4. **Démo** - Aperçu interactif des 4 écrans principaux
5. **Tarifs** - Modèle de commission transparent
6. **Inscription** - Formulaire de réservation de démo

### Interactions
- Tabs interactifs pour la démo
- Formulaire avec validation
- Modal de confirmation
- Animations au scroll
- Menu mobile responsive

## 📁 Structure du projet

```
onerelay-landing/
├── index.html          # Page HTML principale
├── styles.css          # Styles CSS (variables, responsive)
├── script.js           # JavaScript (interactions, formulaire)
├── favicon.svg         # Icône du site
├── README.md           # Documentation
└── .gitignore          # Fichiers à ignorer
```

## 🛠️ Installation

### Prérequis
- Aucun ! C'est du HTML/CSS/JS pur

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/votre-username/onerelay-landing.git

# Aller dans le dossier
cd onerelay-landing

# Ouvrir dans le navigateur
# Option 1: Ouvrir directement index.html
# Option 2: Utiliser un serveur local

# Avec Python
python -m http.server 8000

# Avec Node.js (npx)
npx serve .

# Avec VS Code
# Installer l'extension "Live Server" et cliquer "Go Live"
```

Ouvrir `http://localhost:8000` dans votre navigateur.

## 🚀 Déploiement

### Option 1: GitHub Pages (Recommandé - Gratuit)

1. **Créer le repository GitHub**
   ```bash
   # Initialiser git
   git init
   git add .
   git commit -m "Initial commit: OneRelay landing page"
   
   # Connecter à GitHub
   git remote add origin https://github.com/votre-username/onerelay-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Activer GitHub Pages**
   - Aller dans Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `/ (root)`
   - Cliquer "Save"

3. **Accéder au site**
   - URL: `https://votre-username.github.io/onerelay-landing/`
   - Ou configurer un domaine personnalisé

### Option 2: Vercel (Gratuit)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Suivre les instructions
# Le site sera disponible sur une URL .vercel.app
```

### Option 3: Netlify (Gratuit)

1. Glisser-déposer le dossier sur [netlify.com/drop](https://netlify.com/drop)
2. Ou connecter via GitHub pour le déploiement automatique

### Option 4: Domaine personnalisé

Pour utiliser `www.onerelay.cm` :

1. Acheter le domaine chez un registrar
2. Configurer les DNS :
   ```
   Type: CNAME
   Name: www
   Value: votre-username.github.io
   ```
3. Ajouter un fichier `CNAME` avec `www.onerelay.cm`

## 🎨 Personnalisation

### Couleurs
Modifier les variables CSS dans `styles.css` :

```css
:root {
    --primary: #2563eb;      /* Bleu principal */
    --primary-dark: #1d4ed8; /* Bleu foncé (hover) */
    --accent: #22c55e;       /* Vert accent */
    --secondary: #0f172a;    /* Fond sombre */
    /* ... autres variables */
}
```

### Logo
Remplacer le SVG inline dans `index.html` ou modifier `favicon.svg`.

### Contenu
Modifier directement le texte dans `index.html`.

### Images
Pour ajouter de vraies captures d'écran du MVP :
1. Créer un dossier `images/`
2. Ajouter les screenshots
3. Remplacer les mockups émoji par des `<img>` tags

## 🔌 Intégration Backend

### Formulaire d'inscription

Le formulaire stocke actuellement les données en `localStorage` (démo). Pour une vraie intégration :

#### Option A: Google Sheets (Simple)

```javascript
// Dans script.js, remplacer le setTimeout par :
const GOOGLE_SCRIPT_URL = 'votre-url-google-apps-script';

fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(data)
})
.then(response => {
    // Afficher le modal de succès
})
.catch(error => {
    // Gérer l'erreur
});
```

#### Option B: Supabase (Recommandé pour le MVP)

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const { error } = await supabase
    .from('shop_registrations')
    .insert([data]);
```

#### Option C: API Email (Formspree, EmailJS)

```javascript
fetch('https://formspree.io/f/votre-form-id', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
});
```

### Lien vers la démo

Le lien de démo actuel pointe vers :
```
https://claude.ai/public/artifacts/76c5fc50-03d3-4e02-b077-398fd171d0ee
```

Remplacez-le par l'URL de votre MVP une fois déployé.

## 📊 Analytics

Pour ajouter des analytics :

### Google Analytics 4

```html
<!-- Ajouter avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Events tracking

Le fichier `script.js` inclut une fonction `trackEvent()` prête à être connectée.

## 🔧 Maintenance

### Checklist avant lancement

- [ ] Remplacer les numéros de téléphone placeholder
- [ ] Configurer l'email de contact réel
- [ ] Connecter le formulaire à un backend
- [ ] Ajouter les vraies captures d'écran
- [ ] Configurer les analytics
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Optimiser les images (si ajoutées)

### Performance

Le site est déjà optimisé :
- CSS et JS minifiés
- Pas de frameworks lourds
- Fonts Google en preconnect
- Images en SVG (légères)

Score Lighthouse attendu : 95+

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit (`git commit -m 'Ajout de fonctionnalité'`)
4. Push (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - Voir [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**OneRelay Team**
- Email: contact.1relay@gmail.com
- WhatsApp: +237 6 59 03 61 12
- Site: [onerelay.cm](https://onerelay.cm)

---

Fait avec ❤️ au Cameroun par l'équipe OneRelay
