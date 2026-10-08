# Portfolio — Navaloniaina RANDRIAMAHAZO

Portfolio personnel développé avec **Angular 21** (composants standalone, signals, zoneless) et **Tailwind CSS 3**.

## Démarrer

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de production dans dist/portfolio
```

## Structure

```
api/
└─ contact.js                     # fonction serverless : relais du formulaire vers Brevo
public/                           # servi à la racine du site
├─ CV_Randriamahazo_...ATS_4.pdf  # CV consultable et téléchargeable
├─ profile.jpg, p0..p4.png        # photo et captures des projets
└─ favicon-192.png
src/
├─ index.html                     # polices Google, favicon, <app-root>
├─ styles.css                     # Tailwind + styles globaux (cartes, carrousel, animations)
└─ app/
   ├─ app.ts / app.html           # assemble les sections de la page
   ├─ core/
   │  ├─ models.ts                # types partagés (Localized, Project, Theme…)
   │  ├─ portfolio.data.ts        # TOUT le contenu du site (FR + EN)
   │  ├─ themes.ts                # palettes des cartes et des tags
   │  ├─ tech.ts                  # couleur de marque de chaque techno
   │  ├─ language.service.ts      # langue courante (signal) + bascule FR/EN
   │  └─ contact.service.ts       # envoi du formulaire vers /api/contact
   ├─ shared/                     # section-heading, brand-mark, carousel, scroll-appear
   └─ sections/                   # navbar, hero, about, experience, skills,
                                  # projects, contact, footer
```

### Modifier le contenu

Tout le texte, les projets, les compétences et les coordonnées vivent dans
`src/app/core/portfolio.data.ts`. Chaque texte traduit est un objet
`{ fr: '…', en: '…' }` ; les templates l'affichent via `texte[lang()]`, donc
ajouter une entrée suffit pour qu'elle soit traduite par le bouton FR/EN.

Le contenu reprend le CV `CV_Randriamahazo_Navaloniaina_ATS_4.pdf`. Pour
changer de CV : déposer le nouveau PDF dans `public/` et mettre à jour
`RESUME.file` dans `portfolio.data.ts`.

### Thème Tailwind

Palette neutre (`canvas`, `surface`, `ink`, `text`, `muted`, `line`) et une
seule famille de caractères, Inter ; JetBrains Mono ne sert qu'aux badges
techno. Les couleurs de marque des technologies vivent dans `core/tech.ts`,
les accents de catégorie dans `core/themes.ts`. Les classes de structure
(`.btn`, `.sk-badge`, `.proj`, `.field-input`…) sont dans `src/styles.css`.

## Formulaire de contact (Brevo)

Le formulaire envoie un POST JSON vers `/api/contact`. La fonction
`api/contact.js` valide les champs puis appelle l'API e-mail transactionnel de
Brevo. **La clé API reste côté serveur** : la placer dans le code Angular la
rendrait publique, puisque le bundle est téléchargé par chaque visiteur.

Variables d'environnement à définir sur l'hébergeur :

| Variable             | Rôle                                                            |
| -------------------- | --------------------------------------------------------------- |
| `BREVO_API_KEY`      | Clé API Brevo (Paramètres → SMTP & API → Clés API)              |
| `BREVO_SENDER_EMAIL` | Expéditeur **vérifié** dans Brevo (sinon l'envoi est refusé)     |
| `CONTACT_TO_EMAIL`   | Boîte qui reçoit les messages                                    |
| `BREVO_SENDER_NAME`  | Optionnel — nom affiché de l'expéditeur (« Portfolio » par défaut) |

Le message arrive avec `replyTo` positionné sur l'adresse du visiteur :
répondre directement à l'e-mail lui écrit.

En local, `ng serve` ne sert pas `api/` : le formulaire affichera donc une
erreur d'envoi. Pour tester l'envoi réel, lancer `vercel dev` (ou déployer).

## Déploiement

Le projet est prêt pour **Vercel** (`vercel.json` : build Angular +
`api/contact.js` détecté automatiquement). Sur un autre hébergeur, reprendre
`api/contact.js` dans le format de fonction attendu (Netlify Functions,
Cloudflare Workers…) : seule la signature `(request, response)` change, la
logique Brevo est identique.

## Version statique d'origine

Le portfolio HTML/CSS/JS d'avant la migration est conservé dans `legacy/`
à titre de référence. Il n'est pas utilisé par l'application Angular.
