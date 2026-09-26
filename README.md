# DreamLife

**Découvrez le monde à travers ceux qui l'habitent.**

DreamLife met en relation les voyageurs et les habitants qui acceptent de
partager quelques heures de leur vie : un repas, un quartier, un savoir-faire,
une journée entière. On ne réserve pas un logement ni un circuit — on choisit
une personne.

👉 **[Voir le prototype](https://falmonmickael260-commits.github.io/Dreamlife/)**

---

## Le principe

Ne voyagez pas seulement pour voir un endroit. Découvrez-le à travers ceux qui
l'habitent.

Un habitant propose ce qu'il veut partager, et rien d'autre. Dix formes sont
possibles, du geste le plus court au plus engageant :

| | |
|---|---|
| Passer un moment ensemble | Deux heures, un café, une conversation |
| Partager un repas | À sa table, souvent avec sa famille |
| Découvrir son quartier | Les rues qu'il traverse tous les jours |
| Ses endroits préférés | Pas les incontournables — les siens |
| Cuisiner ensemble | Le marché d'abord, puis la cuisine |
| Un savoir-faire | Un atelier, un métier, des mains qui travaillent |
| Musique et traditions | Ce qui se joue quand aucun touriste ne regarde |
| Être reçu chez lui | Franchir le seuil, sans dormir sur place |
| Être hébergé | *Optionnel*, proposé par certains hôtes seulement |
| Une journée, ou plusieurs | Votre hôte vous accompagne, à son rythme |

### L'hébergement n'est pas le sujet

C'est le point qui sépare DreamLife des plateformes de logement. Vous pouvez
dormir à l'hôtel, chez vous ou dans un appartement loué, et réserver uniquement
une expérience avec un habitant. Sur les soixante expériences du prototype,
cinquante-quatre ne comportent aucune nuit sur place, et aucun hôte ne peut
conditionner une expérience à une réservation d'hébergement.

## Les dix premières destinations

Le mélange est délibéré : quatre aires culturelles, pour qu'on comprenne en un
écran que la plateforme est internationale.

| Europe | Maghreb | Asie | Amérique du Sud |
|---|---|---|---|
| Marseille 🇫🇷 | Marrakech 🇲🇦 | Kyoto 🇯🇵 | Medellín 🇨🇴 |
| Naples 🇮🇹 | Tunis 🇹🇳 | Chiang Mai 🇹🇭 | Cusco 🇵🇪 |
| | | Ubud 🇮🇩 | Salvador de Bahia 🇧🇷 |

Dix villes, trente hôtes, soixante expériences. Pas plus : un prototype qui
couvre quarante pays ne prouve rien.

## Direction photographique

C'est le point le plus strict du projet. DreamLife ne doit pas ressembler à une
agence de voyages.

**Exclu :** monuments célèbres, panoramas, vues aériennes, plages génériques,
hôtels de luxe, voyageurs à valises, cartes postales.

**Retenu :** des habitants au travail, des marchés, des cuisines, des ateliers,
des fêtes de quartier, du linge aux fenêtres. Une poissonnière du Vieux-Port,
un dinandier du souk Haddadine, une baiana d'acarajé sur son tabouret, un
paysan balinais derrière son attelage.

Les cinquante photographies viennent de **Wikimedia Commons**, sous licences
libres uniquement (CC BY, CC BY-SA, CC0, domaine public). Chacune a été
regardée avant d'être retenue, et sa légende dit le lieu réel de la prise de
vue, relu dans les métadonnées : une photo prise à Calca n'est pas légendée
« Cusco ». L'auteur et la licence sont affichés au survol de l'image — c'est
une obligation de licence, et c'est aussi ce qui distingue une photographie
documentaire d'une image de catalogue.

## Identité

- **Nom** : DreamLife, avec *Life* en italique — le mot se déplie en deux moitiés.
- **Symbole** : une arche et un point. L'arche est le seuil que l'on franchit
  quand quelqu'un vous reçoit ; le point, c'est la personne qui s'y tient. On
  retrouve cette forme du loader jusqu'au pied de page.
- **Palette** : encre brune, papier chaud, terre cuite `#B0532F` et vert profond
  `#1D3A31`. Une terre cuite que l'on retrouve de Naples à Marrakech, jamais de
  bleu corporate.
- **Typographie** : Fraunces pour le déployé et l'émotion, Inter pour tout ce
  qui se lit vite.
- **Mouvement** : lent, jamais rebondissant. On regarde des photographies.

## Prototype — ce qui n'est pas réel

- Les **trente hôtes** et leurs **soixante expériences** sont fictifs : prénoms,
  âges, citations et tarifs sont écrits pour la démonstration.
- Les profils s'affichent avec un **monogramme dessiné** et jamais avec le
  portrait d'une personne réelle : attribuer un faux prénom et une fausse
  histoire au visage de quelqu'un serait malhonnête.
- **Aucune réservation** n'est possible et **aucun paiement** n'est collecté.
  L'envoi d'une demande s'arrête à l'écran de confirmation.

## Développement

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # dist/
npm run check    # types
```

Régénérer le manifeste photographique (nécessite Python 3 et un accès réseau) :

```bash
python3 scripts/photos.py
```

Le script demande les vignettes à l'API Commons aux largeurs voulues,
reconstruit `src/data/photos.ts` avec les crédits et les licences, et refuse de
produire un fichier incomplet.

## Architecture

```
src/
  brand/        tokens.css (palette, typo, rythme) + base.css + app.css
  data/         destinations.ts, kinds.ts, hosts.ts, photos.ts (généré)
  components/   Loader, Nav, Hero, Manifesto, HowItWorks, Kinds, StayOptional,
                DestinationGrid, Selection, Trust, BecomeHost, Footer,
                DestinationPage, HostCard, ExperienceSheet, Photo, Monogram, Glyph
  lib/          useRoute (routage sur le fragment), useReveal, format
scripts/        photos.py + candidates.json (sélection curatée)
```

Deux écrans seulement — l'accueil et la page d'une destination — donc le
routage tient dans un `hashchange` et non dans une bibliothèque.

---

© DreamLife. Photographies : leurs auteurs respectifs, via Wikimedia Commons.
