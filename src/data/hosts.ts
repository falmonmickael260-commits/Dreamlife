import type { KindId } from './kinds';

export type Experience = {
  id: string;
  kind: KindId;
  title: string;
  blurb: string;
  /** Durée annoncée, en heures. `24` et plus = formule journée. */
  hours: number;
  price: number;
  max: number;
  includes: string[];
};

export type Host = {
  id: string;
  destination: string;
  firstName: string;
  age: number;
  job: string;
  /** Quartier ou village — l'ancrage précis compte plus que la ville. */
  area: string;
  languages: string[];
  quote: string;
  since: number;
  reviews: number;
  rating: number;
  experiences: Experience[];
};

/**
 * ATTENTION — contenu de prototype.
 *
 * Ces trente hôtes sont fictifs : prénoms, âges et citations sont écrits pour
 * la démonstration. Ils ne correspondent à personne et ne sont jamais associés
 * au portrait d'une personne réelle — les profils s'affichent avec un monogramme
 * dessiné, pas une photographie de visage (cf. components/Monogram.tsx). Les
 * photographies documentaires de la plateforme illustrent les lieux et la vie
 * locale, et sont créditées à leurs auteurs.
 */
export const HOSTS: Host[] = [
  // ── Marseille ───────────────────────────────────────────────────────────
  {
    id: 'mrs-1',
    destination: 'marseille',
    firstName: 'Nadia',
    age: 47,
    job: 'Poissonnière au marché',
    area: 'Noailles',
    languages: ['Français', 'Arabe'],
    quote:
      'On me demande souvent où manger « typique ». Je réponds : chez moi, jeudi, il y a une bouillabaisse et huit personnes.',
    since: 2024,
    reviews: 63,
    rating: 4.9,
    experiences: [
      {
        id: 'mrs-1-a',
        kind: 'cuisine',
        title: 'Le marché, puis la bouillabaisse',
        blurb:
          'On commence à sept heures aux Capucins, on choisit les poissons de roche un par un, et on rentre les cuisiner. Trois heures debout, un repas assis.',
        hours: 5,
        price: 58,
        max: 4,
        includes: ['Les courses du marché', 'Le repas complet', 'La recette écrite à la main'],
      },
      {
        id: 'mrs-1-b',
        kind: 'quartier',
        title: 'Noailles comme on y travaille',
        blurb:
          'Les épiceries comoriennes, le torréfacteur, les quatre langues du même trottoir. Le quartier vu par quelqu’un qui y a son étal.',
        hours: 2.5,
        price: 26,
        max: 6,
        includes: ['Les arrêts chez cinq commerçants', 'Un café', 'Des fruits à goûter'],
      },
    ],
  },
  {
    id: 'mrs-2',
    destination: 'marseille',
    firstName: 'Saïd',
    age: 61,
    job: 'Retraité des docks, joueur de pétanque',
    area: 'L’Estaque',
    languages: ['Français', 'Arabe', 'Espagnol'],
    quote:
      'La pétanque, ce n’est pas un sport. C’est une manière de se parler pendant deux heures sans jamais rien se demander.',
    since: 2024,
    reviews: 41,
    rating: 4.8,
    experiences: [
      {
        id: 'mrs-2-a',
        kind: 'cafe',
        title: 'Une partie, un pastis, et l’Estaque',
        blurb:
          'On joue avec mes amis du boulodrome — ils gagneront. Ensuite on mange des panisses debout, face à l’eau.',
        hours: 3,
        price: 24,
        max: 4,
        includes: ['Les boules prêtées', 'L’apéritif', 'Les panisses'],
      },
      {
        id: 'mrs-2-b',
        kind: 'spots',
        title: 'Les calanques par le sentier des habitants',
        blurb:
          'Pas le parking à touristes : le chemin que prennent les gens du quartier depuis quarante ans, avec la crique au bout.',
        hours: 4,
        price: 32,
        max: 5,
        includes: ['Le pique-nique', 'Le transport en bus local', 'L’eau'],
      },
    ],
  },
  {
    id: 'mrs-3',
    destination: 'marseille',
    firstName: 'Léa',
    age: 33,
    job: 'Céramiste',
    area: 'Le Panier',
    languages: ['Français', 'Anglais', 'Italien'],
    quote:
      'Mon atelier fait dix-huit mètres carrés et donne sur une rue en escalier. Tout Marseille passe devant ma porte.',
    since: 2025,
    reviews: 29,
    rating: 5,
    experiences: [
      {
        id: 'mrs-3-a',
        kind: 'savoirFaire',
        title: 'Deux heures au tour',
        blurb:
          'On tourne un bol, mal, et on comprend pourquoi c’est difficile. Je le cuis et je vous l’envoie.',
        hours: 2,
        price: 45,
        max: 3,
        includes: ['La terre et l’émail', 'La cuisson', 'L’envoi de la pièce'],
      },
      {
        id: 'mrs-3-b',
        kind: 'maison',
        title: 'Dîner sur le toit du Panier',
        blurb:
          'Chez moi, six personnes maximum, avec les voisins qui montent souvent sans prévenir. On dîne, on ne dort pas là.',
        hours: 4,
        price: 38,
        max: 6,
        includes: ['Le dîner', 'Le vin', 'La vue, gratuite'],
      },
    ],
  },

  // ── Naples ──────────────────────────────────────────────────────────────
  {
    id: 'nap-1',
    destination: 'naples',
    firstName: 'Assunta',
    age: 68,
    job: 'Cuisinière de famille',
    area: 'Rione Sanità',
    languages: ['Italien', 'Napolitain'],
    quote:
      'Mon ragù cuit six heures. Si vous venez à midi pour manger à midi, vous n’avez rien compris à Naples.',
    since: 2024,
    reviews: 112,
    rating: 4.9,
    experiences: [
      {
        id: 'nap-1-a',
        kind: 'repas',
        title: 'Le dimanche chez nous',
        blurb:
          'Le vrai repas du dimanche, avec mes fils, mes petits-enfants et le bruit que cela suppose. On arrive à onze heures.',
        hours: 5,
        price: 34,
        max: 5,
        includes: ['Le repas entier', 'Le vin de la maison', 'Le café final'],
      },
      {
        id: 'nap-1-b',
        kind: 'cuisine',
        title: 'Le ragù, depuis le début',
        blurb:
          'Les morceaux, la patience, la cuillère en bois qu’on ne lâche pas. Vous repartez avec un pot et la méthode.',
        hours: 4,
        price: 42,
        max: 4,
        includes: ['Les ingrédients', 'Un pot à emporter', 'La recette de ma mère'],
      },
    ],
  },
  {
    id: 'nap-2',
    destination: 'naples',
    firstName: 'Ciro',
    age: 29,
    job: 'Pizzaiolo',
    area: 'Forcella',
    languages: ['Italien', 'Anglais'],
    quote:
      'Tout le monde veut la photo du four. Moi je veux vous montrer la pâte à cinq heures du matin, quand elle décide de tout.',
    since: 2025,
    reviews: 87,
    rating: 4.9,
    experiences: [
      {
        id: 'nap-2-a',
        kind: 'savoirFaire',
        title: 'La pâte avant l’ouverture',
        blurb:
          'On pétrit, on attend, on enfourne à 480 °C. Trois heures dans une pizzeria de quartier, avant les clients.',
        hours: 3,
        price: 40,
        max: 4,
        includes: ['Le tablier', 'Toutes les pizzas mangées', 'La bière'],
      },
      {
        id: 'nap-2-b',
        kind: 'quartier',
        title: 'Forcella, sans filtre',
        blurb:
          'Mon quartier a une réputation. Je vous montre ce qu’il est vraiment : des familles, des ateliers, un terrain de foot.',
        hours: 2.5,
        price: 22,
        max: 6,
        includes: ['Le café debout', 'La friture de rue', 'Les rencontres'],
      },
    ],
  },
  {
    id: 'nap-3',
    destination: 'naples',
    firstName: 'Rosa',
    age: 54,
    job: 'Artisane de santons',
    area: 'San Gregorio Armeno',
    languages: ['Italien', 'Anglais', 'Français'],
    quote: 'Je fabrique des figurines de crèche toute l’année. En août aussi. Surtout en août.',
    since: 2024,
    reviews: 38,
    rating: 4.8,
    experiences: [
      {
        id: 'nap-3-a',
        kind: 'savoirFaire',
        title: 'Modeler un santon',
        blurb:
          'La terre, le fil de fer, le tissu. On fait une figurine, la vôtre, dans l’atelier où je travaille depuis trente ans.',
        hours: 2.5,
        price: 36,
        max: 4,
        includes: ['Le matériel', 'La figurine terminée', 'Le café du coin'],
      },
      {
        id: 'nap-3-b',
        kind: 'musique',
        title: 'Les tammurriate du vendredi',
        blurb:
          'On rejoint une soirée de tambourin dans une cave de quartier. Personne ne joue pour le public : tout le monde joue.',
        hours: 3,
        price: 26,
        max: 5,
        includes: ['L’entrée', 'Un verre', 'Une leçon de pas, si vous voulez'],
      },
    ],
  },

  // ── Marrakech ───────────────────────────────────────────────────────────
  {
    id: 'rak-1',
    destination: 'marrakech',
    firstName: 'Khadija',
    age: 52,
    job: 'Cuisinière, gère le four du quartier',
    area: 'Derb Dabachi',
    languages: ['Arabe', 'Amazigh', 'Français'],
    quote:
      'Chez nous, on porte sa pâte au four du derb et on discute en attendant. C’est là que le quartier se parle.',
    since: 2024,
    reviews: 94,
    rating: 4.9,
    experiences: [
      {
        id: 'rak-1-a',
        kind: 'cuisine',
        title: 'Le pain au four collectif, puis le tajine',
        blurb:
          'On pétrit chez moi, on porte les plaques au four du quartier comme tout le monde, et on déjeune dans la cour.',
        hours: 4.5,
        price: 30,
        max: 5,
        includes: ['Le marché', 'Le déjeuner', 'Le pain à emporter'],
      },
      {
        id: 'rak-1-b',
        kind: 'maison',
        title: 'Le thé chez nous, en fin d’après-midi',
        blurb:
          'La cour, les gâteaux de ma belle-sœur, mes filles qui rentrent de l’école. Deux heures, sans programme.',
        hours: 2,
        price: 18,
        max: 6,
        includes: ['Le thé et les pâtisseries', 'La conversation', 'Rien d’autre'],
      },
    ],
  },
  {
    id: 'rak-2',
    destination: 'marrakech',
    firstName: 'Youssef',
    age: 38,
    job: 'Dinandier',
    area: 'Souk Haddadine',
    languages: ['Arabe', 'Français', 'Anglais'],
    quote:
      'Mon père reconnaissait l’épaisseur du cuivre au son du marteau. J’essaie encore d’avoir cette oreille.',
    since: 2025,
    reviews: 47,
    rating: 4.9,
    experiences: [
      {
        id: 'rak-2-a',
        kind: 'savoirFaire',
        title: 'Frapper le cuivre',
        blurb:
          'Trois heures dans mon atelier du souk des forgerons. On martèle un plateau, on se brûle un peu, on comprend le métier.',
        hours: 3,
        price: 34,
        max: 3,
        includes: ['Le métal', 'La pièce réalisée', 'Le thé de l’atelier'],
      },
      {
        id: 'rak-2-b',
        kind: 'quartier',
        title: 'Les souks des artisans, pas des bazars',
        blurb:
          'Les rues où l’on travaille : tanneurs, teinturiers, menuisiers. Là où l’on ne vous vend rien.',
        hours: 2.5,
        price: 22,
        max: 6,
        includes: ['Les visites d’atelier', 'Un jus', 'Les présentations'],
      },
    ],
  },
  {
    id: 'rak-3',
    destination: 'marrakech',
    firstName: 'Amina',
    age: 26,
    job: 'Étudiante, guide du Mellah',
    area: 'Mellah',
    languages: ['Arabe', 'Français', 'Anglais', 'Espagnol'],
    quote:
      'J’ai grandi entre la synagogue et la mosquée, à cent mètres l’une de l’autre. Je préfère raconter ça que les palais.',
    since: 2025,
    reviews: 33,
    rating: 5,
    experiences: [
      {
        id: 'rak-3-a',
        kind: 'spots',
        title: 'Le Mellah, ma rue, mes gens',
        blurb:
          'L’ancien quartier juif tel qu’il vit aujourd’hui : le marché aux épices, les vendeurs de dattes, les cours intérieures.',
        hours: 3,
        price: 20,
        max: 6,
        includes: ['Les dégustations', 'Le thé', 'Les rencontres du quartier'],
      },
      {
        id: 'rak-3-b',
        kind: 'journee',
        title: 'Une journée entière, avec ma famille',
        blurb:
          'Marché le matin, déjeuner chez mes parents, sieste obligatoire, hammam, puis la place à la nuit tombée.',
        hours: 10,
        price: 64,
        max: 4,
        includes: ['Les deux repas', 'Le hammam', 'Les transports locaux'],
      },
    ],
  },

  // ── Tunis ───────────────────────────────────────────────────────────────
  {
    id: 'tun-1',
    destination: 'tunis',
    firstName: 'Mongi',
    age: 59,
    job: 'Cafetier',
    area: 'Médina — Souk El Attarine',
    languages: ['Arabe', 'Français', 'Italien'],
    quote:
      'Mon café a quarante ans et les mêmes clients. Asseyez-vous : en deux heures vous saurez tout de ce quartier.',
    since: 2024,
    reviews: 71,
    rating: 4.8,
    experiences: [
      {
        id: 'tun-1-a',
        kind: 'cafe',
        title: 'Le tawla et le thé aux pignons',
        blurb:
          'On joue, on perd, on recommence, avec les habitués qui commentent. C’est tout, et c’est beaucoup.',
        hours: 2,
        price: 16,
        max: 4,
        includes: ['Les thés', 'Le jeu', 'La chicha, si vous fumez'],
      },
      {
        id: 'tun-1-b',
        kind: 'quartier',
        title: 'La médina qui travaille encore',
        blurb:
          'Les parfumeurs, les chéchias, les selliers. Je connais les portes qui s’ouvrent quand on demande bien.',
        hours: 3,
        price: 22,
        max: 6,
        includes: ['Le lablabi du matin', 'Les ateliers', 'Le thé'],
      },
    ],
  },
  {
    id: 'tun-2',
    destination: 'tunis',
    firstName: 'Salma',
    age: 44,
    job: 'Professeure, cuisine le vendredi',
    area: 'La Marsa',
    languages: ['Arabe', 'Français', 'Anglais'],
    quote:
      'Le couscous du vendredi, on le roule le jeudi soir. Venez le jeudi soir : c’est le meilleur moment.',
    since: 2025,
    reviews: 52,
    rating: 4.9,
    experiences: [
      {
        id: 'tun-2-a',
        kind: 'cuisine',
        title: 'Rouler le couscous, la veille',
        blurb:
          'La semoule, les mains, la patience. Ma mère supervise. Le lendemain, vous êtes invités à le manger.',
        hours: 3.5,
        price: 28,
        max: 4,
        includes: ['Le dîner du jeudi', 'Le couscous du vendredi', 'Les semences d’épices'],
      },
      {
        id: 'tun-2-b',
        kind: 'repas',
        title: 'Le déjeuner du vendredi, en famille',
        blurb:
          'Trois générations, un seul grand plat, et des discussions politiques garanties au dessert.',
        hours: 3,
        price: 24,
        max: 5,
        includes: ['Le repas', 'Les pâtisseries', 'Le café arabe'],
      },
    ],
  },
  {
    id: 'tun-3',
    destination: 'tunis',
    firstName: 'Hatem',
    age: 35,
    job: 'Potier',
    area: 'Sidi Bou Saïd',
    languages: ['Arabe', 'Français', 'Anglais'],
    quote: 'Tout le monde photographie les portes bleues. Personne ne demande qui les repeint.',
    since: 2025,
    reviews: 24,
    rating: 4.7,
    experiences: [
      {
        id: 'tun-3-a',
        kind: 'savoirFaire',
        title: 'La terre de Nabeul, au tour',
        blurb:
          'Deux heures dans mon atelier, les mains dans l’argile, avec la méthode et les motifs d’ici.',
        hours: 2,
        price: 30,
        max: 3,
        includes: ['L’argile', 'La cuisson', 'La pièce, expédiée'],
      },
      {
        id: 'tun-3-b',
        kind: 'spots',
        title: 'La côte, du côté des pêcheurs',
        blurb:
          'Le port de La Goulette au retour des barques, le poisson grillé sur le quai, et personne autour.',
        hours: 3.5,
        price: 26,
        max: 5,
        includes: ['Le poisson grillé', 'Le trajet en TGM', 'Les présentations'],
      },
    ],
  },

  // ── Kyoto ───────────────────────────────────────────────────────────────
  {
    id: 'kyo-1',
    destination: 'kyoto',
    firstName: 'Haruko',
    age: 71,
    job: 'Tisseuse de Nishijin',
    area: 'Nishijin',
    languages: ['Japonais', 'Anglais'],
    quote:
      'Mon métier à tisser est en bois et plus vieux que moi. Il faut trois jours pour préparer ce que l’on tisse en une heure.',
    since: 2024,
    reviews: 58,
    rating: 5,
    experiences: [
      {
        id: 'kyo-1-a',
        kind: 'savoirFaire',
        title: 'Une heure au métier à tisser',
        blurb:
          'On tisse quelques centimètres d’obi, très lentement. Vous comprendrez le prix d’un kimono.',
        hours: 2,
        price: 52,
        max: 2,
        includes: ['Le fil de soie', 'Le tissu réalisé', 'Le thé et les wagashi'],
      },
      {
        id: 'kyo-1-b',
        kind: 'maison',
        title: 'Le thé dans ma machiya',
        blurb:
          'Une maison de bois du centre, une cour de trois mètres, la préparation du thé faite sans démonstration.',
        hours: 2,
        price: 44,
        max: 4,
        includes: ['Le matcha et les gâteaux', 'La visite de la maison', 'Le silence'],
      },
    ],
  },
  {
    id: 'kyo-2',
    destination: 'kyoto',
    firstName: 'Kenji',
    age: 42,
    job: 'Cuisinier obanzai',
    area: 'Nakagyō',
    languages: ['Japonais', 'Anglais'],
    quote:
      'La cuisine de Kyoto n’est pas celle des restaurants. C’est cinq petits plats de légumes, préparés pour la maison.',
    since: 2025,
    reviews: 66,
    rating: 4.9,
    experiences: [
      {
        id: 'kyo-2-a',
        kind: 'cuisine',
        title: 'Nishiki le matin, obanzai à midi',
        blurb:
          'On achète les légumes de saison au marché à l’ouverture, puis on prépare les cinq plats chez moi.',
        hours: 4,
        price: 62,
        max: 4,
        includes: ['Les courses', 'Le déjeuner complet', 'Les recettes traduites'],
      },
      {
        id: 'kyo-2-b',
        kind: 'spots',
        title: 'Les temples à six heures du matin',
        blurb:
          'Les mêmes lieux que tout le monde, deux heures avant tout le monde, avec les gens qui y viennent prier.',
        hours: 3,
        price: 34,
        max: 5,
        includes: ['Le petit-déjeuner', 'Les entrées', 'Le vélo prêté'],
      },
    ],
  },
  {
    id: 'kyo-3',
    destination: 'kyoto',
    firstName: 'Yui',
    age: 31,
    job: 'Employée de brasserie de saké',
    area: 'Fushimi',
    languages: ['Japonais', 'Anglais', 'Français'],
    quote:
      'Fushimi sent l’eau et le riz cuit. J’y travaille, j’y vis, et je ne vais jamais dans le centre.',
    since: 2025,
    reviews: 30,
    rating: 4.8,
    experiences: [
      {
        id: 'kyo-3-a',
        kind: 'quartier',
        title: 'Fushimi, quartier de saké',
        blurb:
          'Les brasseries en bois, les puits, les comptoirs où boivent les employés après le travail.',
        hours: 3,
        price: 38,
        max: 5,
        includes: ['Les dégustations', 'La visite de la brasserie', 'Les brochettes du soir'],
      },
      {
        id: 'kyo-3-b',
        kind: 'musique',
        title: 'Le festival du quartier, si vous tombez bien',
        blurb:
          'Quand il y a un matsuri, on porte, on crie, on transpire. On n’est pas spectateur, on est un porteur de plus.',
        hours: 5,
        price: 30,
        max: 4,
        includes: ['Le happi prêté', 'La nourriture des stands', 'La place dans le cortège'],
      },
    ],
  },

  // ── Chiang Mai ──────────────────────────────────────────────────────────
  {
    id: 'cnx-1',
    destination: 'chiang-mai',
    firstName: 'Pornthip',
    age: 56,
    job: 'Vendeuse de khao soi',
    area: 'Chang Phueak',
    languages: ['Thaï', 'Anglais'],
    quote:
      'Ma pâte de curry, je la pile au mortier depuis trente ans. Au robot, le goût est plat. Essayez, vous verrez.',
    since: 2024,
    reviews: 128,
    rating: 4.9,
    experiences: [
      {
        id: 'cnx-1-a',
        kind: 'cuisine',
        title: 'Le khao soi de la famille',
        blurb:
          'Le marché à l’aube, la pâte pilée à la main, le bouillon monté lentement. On mange dans ma cuisine, pas dans un atelier.',
        hours: 4,
        price: 26,
        max: 5,
        includes: ['Les courses', 'Le repas', 'Un sachet de pâte de curry'],
      },
      {
        id: 'cnx-1-b',
        kind: 'cafe',
        title: 'L’aumône du matin, puis le petit-déjeuner',
        blurb:
          'Six heures, devant la maison, avec ma mère. On donne le riz aux moines, puis on mange du riz gluant assis par terre.',
        hours: 2,
        price: 15,
        max: 4,
        includes: ['Les offrandes', 'Le petit-déjeuner', 'Le café du coin'],
      },
    ],
  },
  {
    id: 'cnx-2',
    destination: 'chiang-mai',
    firstName: 'Somchai',
    age: 49,
    job: 'Teinturier indigo',
    area: 'San Kamphaeng',
    languages: ['Thaï', 'Anglais'],
    quote: 'Mes mains sont bleues onze mois sur douze. C’est le métier, et je ne le cache pas.',
    since: 2025,
    reviews: 44,
    rating: 4.9,
    experiences: [
      {
        id: 'cnx-2-a',
        kind: 'savoirFaire',
        title: 'Teindre au mor hom',
        blurb:
          'Les bains d’indigo vivants, les nœuds, l’attente. On teint une chemise que l’on emporte le soir même.',
        hours: 3,
        price: 24,
        max: 6,
        includes: ['Le tissu', 'Tous les bains', 'Le déjeuner du village'],
      },
      {
        id: 'cnx-2-b',
        kind: 'journee',
        title: 'Une journée dans les ateliers du village',
        blurb:
          'Argenterie, papier de mûrier, bois sculpté. Mes voisins ouvrent leurs portes parce que je le demande.',
        hours: 8,
        price: 48,
        max: 5,
        includes: ['Les deux repas', 'Tous les ateliers', 'Le transport'],
      },
    ],
  },
  {
    id: 'cnx-3',
    destination: 'chiang-mai',
    firstName: 'Nok',
    age: 27,
    job: 'Musicienne, joue du sueng',
    area: 'Wat Ket',
    languages: ['Thaï', 'Anglais', 'Japonais'],
    quote:
      'La musique lanna se joue le soir, entre nous, sans sono. Si vous venez, vous aurez un instrument dans les mains.',
    since: 2025,
    reviews: 21,
    rating: 5,
    experiences: [
      {
        id: 'cnx-3-a',
        kind: 'musique',
        title: 'Une soirée de musique lanna',
        blurb:
          'On répète chez un ami, au bord de la rivière. Vous apprenez trois notes et vous jouez avec nous.',
        hours: 3,
        price: 20,
        max: 4,
        includes: ['L’instrument prêté', 'Le dîner', 'Les bières'],
      },
      {
        id: 'cnx-3-b',
        kind: 'quartier',
        title: 'Wat Ket, la rive oubliée',
        blurb:
          'L’ancien quartier des marchands, les maisons de bois, le cimetière chrétien, les voisins qui saluent.',
        hours: 2.5,
        price: 16,
        max: 6,
        includes: ['Le café', 'Les fruits du marché', 'Le bac pour traverser'],
      },
    ],
  },

  // ── Ubud ────────────────────────────────────────────────────────────────
  {
    id: 'ubd-1',
    destination: 'ubud',
    firstName: 'Wayan',
    age: 45,
    job: 'Riziculteur, membre du subak',
    area: 'Tegallalang',
    languages: ['Indonésien', 'Balinais', 'Anglais'],
    quote:
      'L’eau de ma rizière est décidée par une assemblée qui existe depuis mille ans. Je vous emmène à la réunion si elle tombe bien.',
    since: 2024,
    reviews: 77,
    rating: 4.9,
    experiences: [
      {
        id: 'ubd-1-a',
        kind: 'savoirFaire',
        title: 'Une matinée dans la rizière',
        blurb:
          'Pieds dans l’eau, repiquage, boue jusqu’aux genoux. Puis le déjeuner apporté par ma femme, au bord du champ.',
        hours: 4,
        price: 22,
        max: 5,
        includes: ['Le chapeau et les outils', 'Le déjeuner', 'La douche, promis'],
      },
      {
        id: 'ubd-1-b',
        kind: 'maison',
        title: 'La cour familiale, trois générations',
        blurb:
          'Notre enceinte abrite mes parents, mes frères et leurs enfants. On tresse les offrandes du jour ensemble.',
        hours: 3,
        price: 18,
        max: 6,
        includes: ['Les offrandes tressées', 'Le café de Bali', 'Les fruits du jardin'],
      },
    ],
  },
  {
    id: 'ubd-2',
    destination: 'ubud',
    firstName: 'Made',
    age: 38,
    job: 'Sculpteur sur bois',
    area: 'Mas',
    languages: ['Indonésien', 'Balinais', 'Anglais'],
    quote: 'Mon grand-père sculptait pour le temple. Moi je sculpte pour vivre. Le geste n’a pas changé.',
    since: 2025,
    reviews: 39,
    rating: 4.8,
    experiences: [
      {
        id: 'ubd-2-a',
        kind: 'savoirFaire',
        title: 'Le ciseau à bois, trois heures',
        blurb:
          'On dégrossit un motif traditionnel dans du bois de suar, dans l’atelier ouvert sur la rue du village.',
        hours: 3,
        price: 26,
        max: 4,
        includes: ['Le bois et les outils', 'La pièce emportée', 'Le thé et les collations'],
      },
      {
        id: 'ubd-2-b',
        kind: 'musique',
        title: 'Répétition de gamelan',
        blurb:
          'Le pavillon du village, vingt-cinq hommes, aucun chef d’orchestre. On vous met derrière un métallophone.',
        hours: 2.5,
        price: 14,
        max: 5,
        includes: ['La place dans l’orchestre', 'Le sarong prêté', 'Le repas partagé'],
      },
    ],
  },
  {
    id: 'ubd-3',
    destination: 'ubud',
    firstName: 'Ketut',
    age: 62,
    job: 'Cuisinière de warung',
    area: 'Penestanan',
    languages: ['Indonésien', 'Balinais', 'Anglais'],
    quote:
      'Le babi guling des cérémonies demande deux jours. Le repas de tous les jours demande une heure. Je préfère vous montrer le second.',
    since: 2024,
    reviews: 91,
    rating: 4.9,
    experiences: [
      {
        id: 'ubd-3-a',
        kind: 'cuisine',
        title: 'Le repas de tous les jours',
        blurb:
          'Marché au lever du jour, base gede pilée au mortier, six petits plats. Ce que nous mangeons vraiment.',
        hours: 4,
        price: 24,
        max: 5,
        includes: ['Le marché', 'Le repas complet', 'Les épices à emporter'],
      },
      {
        id: 'ubd-3-b',
        kind: 'hebergement',
        title: 'Dormir dans la cour familiale',
        blurb:
          'Une chambre simple dans notre enceinte, réveil au coq, petit-déjeuner avec la famille. Deux nuits minimum.',
        hours: 48,
        price: 30,
        max: 2,
        includes: ['La chambre', 'Les petits-déjeuners', 'La vie de la maison'],
      },
    ],
  },

  // ── Medellín ────────────────────────────────────────────────────────────
  {
    id: 'mde-1',
    destination: 'medellin',
    firstName: 'Luz',
    age: 51,
    job: 'Marchande au Minorista',
    area: 'Comuna 13 — San Javier',
    languages: ['Espagnol'],
    quote:
      'On vient photographier nos escaliers et nos murs peints. Moi je vous invite à monter chez moi, en haut des escaliers.',
    since: 2024,
    reviews: 104,
    rating: 4.9,
    experiences: [
      {
        id: 'mde-1-a',
        kind: 'quartier',
        title: 'La Comuna 13, par quelqu’un qui y vit',
        blurb:
          'Les escaliers mécaniques comme moyen de rentrer chez soi, l’histoire dite par ceux qui l’ont traversée, et le déjeuner chez moi.',
        hours: 4,
        price: 26,
        max: 6,
        includes: ['Le déjeuner', 'Les transports', 'Les rencontres du barrio'],
      },
      {
        id: 'mde-1-b',
        kind: 'cuisine',
        title: 'Le sancocho du dimanche',
        blurb:
          'Le marché Minorista d’abord — mon étal — puis la marmite sur le feu et toute la famille autour.',
        hours: 5,
        price: 30,
        max: 5,
        includes: ['Les courses', 'Le repas', 'La musique, forte'],
      },
    ],
  },
  {
    id: 'mde-2',
    destination: 'medellin',
    firstName: 'Andrés',
    age: 34,
    job: 'Barista, torréfacteur',
    area: 'Laureles',
    languages: ['Espagnol', 'Anglais'],
    quote:
      'La Colombie exporte son meilleur café et boit le reste. Je vous montre où on boit le bon, et pourquoi.',
    since: 2025,
    reviews: 58,
    rating: 4.8,
    experiences: [
      {
        id: 'mde-2-a',
        kind: 'savoirFaire',
        title: 'Torréfier, goûter, comprendre',
        blurb:
          'Deux heures dans mon petit atelier de torréfaction : cuisson, dégustation à la cuillère, et le vocabulaire pour en parler.',
        hours: 2,
        price: 28,
        max: 4,
        includes: ['Toutes les dégustations', 'Un paquet de grains', 'Le carnet de notes'],
      },
      {
        id: 'mde-2-b',
        kind: 'spots',
        title: 'Laureles à vélo, le dimanche',
        blurb:
          'La ciclovía, les cafés de quartier, les terrains de tejo. Le Medellín des habitants de la classe moyenne.',
        hours: 3,
        price: 20,
        max: 5,
        includes: ['Le vélo', 'Les cafés', 'Une partie de tejo'],
      },
    ],
  },
  {
    id: 'mde-3',
    destination: 'medellin',
    firstName: 'Marcela',
    age: 44,
    job: 'Professeure de danse',
    area: 'Manrique',
    languages: ['Espagnol', 'Anglais'],
    quote:
      'La salsa d’ici n’est pas celle des écoles. Elle se danse serré, dans des salons de quartier, le jeudi.',
    since: 2025,
    reviews: 62,
    rating: 5,
    experiences: [
      {
        id: 'mde-3-a',
        kind: 'musique',
        title: 'Les salons de salsa de Manrique',
        blurb:
          'Une heure de pas chez moi, puis on sort danser là où personne ne vous regardera faire vos erreurs.',
        hours: 4,
        price: 24,
        max: 4,
        includes: ['Le cours', 'Les entrées', 'Les deux premiers verres'],
      },
      {
        id: 'mde-3-b',
        kind: 'cafe',
        title: 'Le tinto et le tango, en fin d’après-midi',
        blurb:
          'Medellín est une ville de tango depuis la mort de Gardel ici. Les vieux salons existent toujours.',
        hours: 2,
        price: 17,
        max: 5,
        includes: ['Les cafés', 'L’entrée du salon', 'Les histoires'],
      },
    ],
  },

  // ── Cusco ───────────────────────────────────────────────────────────────
  {
    id: 'cuz-1',
    destination: 'cusco',
    firstName: 'Rosalía',
    age: 58,
    job: 'Tisseuse',
    area: 'Chinchero',
    languages: ['Quechua', 'Espagnol'],
    quote:
      'Chaque motif dit une vallée, une rivière, une famille. Ce n’est pas de la décoration, c’est de l’écriture.',
    since: 2024,
    reviews: 83,
    rating: 5,
    experiences: [
      {
        id: 'cuz-1-a',
        kind: 'savoirFaire',
        title: 'Filer, teindre, tisser',
        blurb:
          'La laine d’alpaga, la cochenille pour le rouge, le métier attaché à la ceinture. On travaille assises par terre, comme il faut.',
        hours: 4,
        price: 28,
        max: 5,
        includes: ['La laine', 'La bande tissée', 'Le déjeuner de la communauté'],
      },
      {
        id: 'cuz-1-b',
        kind: 'repas',
        title: 'La pachamanca, sous la terre',
        blurb:
          'Les pierres chauffées, la fosse, l’attente de trois heures. Un repas de fête, pas un repas de restaurant.',
        hours: 5,
        price: 34,
        max: 6,
        includes: ['Le repas entier', 'La chicha', 'Le transport depuis Cusco'],
      },
    ],
  },
  {
    id: 'cuz-2',
    destination: 'cusco',
    firstName: 'Julio',
    age: 40,
    job: 'Marchand au San Pedro',
    area: 'Santiago',
    languages: ['Espagnol', 'Quechua', 'Anglais'],
    quote:
      'Le marché ouvre à cinq heures. À huit heures, les touristes arrivent et ce n’est plus le même endroit.',
    since: 2025,
    reviews: 49,
    rating: 4.8,
    experiences: [
      {
        id: 'cuz-2-a',
        kind: 'quartier',
        title: 'San Pedro à cinq heures du matin',
        blurb:
          'La soupe des travailleurs, les cent variétés de pommes de terre, les herboristes. Avant tout le monde.',
        hours: 3,
        price: 16,
        max: 6,
        includes: ['Le petit-déjeuner', 'Les dégustations', 'Les présentations'],
      },
      {
        id: 'cuz-2-b',
        kind: 'journee',
        title: 'Une journée dans la vallée, sans bus',
        blurb:
          'Collectivos, villages, déjeuner chez ma tante, retour au crépuscule. Aucun site payant au programme.',
        hours: 9,
        price: 52,
        max: 4,
        includes: ['Les transports locaux', 'Les repas', 'Les feuilles de coca'],
      },
    ],
  },
  {
    id: 'cuz-3',
    destination: 'cusco',
    firstName: 'Elena',
    age: 29,
    job: 'Cuisinière',
    area: 'San Blas',
    languages: ['Espagnol', 'Anglais', 'Quechua'],
    quote:
      'On me demande le cuy. Je le prépare, bien sûr. Mais la vraie cuisine d’ici, c’est la soupe du matin.',
    since: 2025,
    reviews: 36,
    rating: 4.9,
    experiences: [
      {
        id: 'cuz-3-a',
        kind: 'cuisine',
        title: 'Les soupes des hauteurs',
        blurb:
          'Trois soupes andines, les tubercules que vous n’avez jamais vus, et l’altitude qui change la cuisson.',
        hours: 3.5,
        price: 26,
        max: 4,
        includes: ['Le marché', 'Le repas', 'Les recettes adaptées à votre altitude'],
      },
      {
        id: 'cuz-3-b',
        kind: 'hebergement',
        title: 'Une chambre à San Blas',
        blurb:
          'Chez moi, dans la vieille ville, avec le petit-déjeuner et les conseils pour respirer les premiers jours.',
        hours: 24,
        price: 28,
        max: 2,
        includes: ['La chambre', 'Le petit-déjeuner', 'Le thé de coca à volonté'],
      },
    ],
  },

  // ── Salvador de Bahia ───────────────────────────────────────────────────
  {
    id: 'ssa-1',
    destination: 'salvador',
    firstName: 'Dona Célia',
    age: 64,
    job: 'Baiana d’acarajé',
    area: 'Rio Vermelho',
    languages: ['Portugais'],
    quote:
      'Mon tabouret est au même coin de rue depuis trente et un ans. Tout le monde ici sait ce que je fais le dimanche.',
    since: 2024,
    reviews: 119,
    rating: 4.9,
    experiences: [
      {
        id: 'ssa-1-a',
        kind: 'cuisine',
        title: 'L’acarajé, du haricot à la friture',
        blurb:
          'On épluche les haricots, on monte la pâte, on frit dans l’huile de palme. Vous servez les clients avec moi.',
        hours: 4,
        price: 24,
        max: 4,
        includes: ['Tous les ingrédients', 'Le repas', 'Le tablier, à garder'],
      },
      {
        id: 'ssa-1-b',
        kind: 'repas',
        title: 'La moqueca du dimanche',
        blurb:
          'Chez moi, dans la marmite de terre, avec mes filles et la télévision allumée sur le football.',
        hours: 3.5,
        price: 26,
        max: 6,
        includes: ['Le repas', 'La bière glacée', 'Le dessert de cocada'],
      },
    ],
  },
  {
    id: 'ssa-2',
    destination: 'salvador',
    firstName: 'Jorge',
    age: 37,
    job: 'Professeur de capoeira',
    area: 'Pelourinho',
    languages: ['Portugais', 'Espagnol', 'Anglais'],
    quote:
      'La capoeira n’est pas un spectacle pour touristes. C’est une conversation. On va vous apprendre à répondre.',
    since: 2024,
    reviews: 95,
    rating: 4.9,
    experiences: [
      {
        id: 'ssa-2-a',
        kind: 'savoirFaire',
        title: 'Entrer dans la roda',
        blurb:
          'Deux heures d’entraînement avec mon groupe, le berimbau, les chants, puis la roda où vous jouez vraiment.',
        hours: 2.5,
        price: 22,
        max: 6,
        includes: ['L’entraînement', 'L’eau et les fruits', 'La place dans la roda'],
      },
      {
        id: 'ssa-2-b',
        kind: 'spots',
        title: 'Salvador hors du Pelourinho',
        blurb:
          'Les quartiers où l’on vit : Liberdade, Cabula, les terrains de foot, les bars de plage des habitants.',
        hours: 4,
        price: 25,
        max: 5,
        includes: ['Les transports', 'Les collations de rue', 'Les rencontres'],
      },
    ],
  },
  {
    id: 'ssa-3',
    destination: 'salvador',
    firstName: 'Tainá',
    age: 25,
    job: 'Percussionniste',
    area: 'Santo Antônio',
    languages: ['Portugais', 'Anglais'],
    quote:
      'Quand mon bloco répète, trois rues l’entendent. Venez le mardi : c’est bruyant, c’est gratuit, c’est la ville.',
    since: 2025,
    reviews: 41,
    rating: 5,
    experiences: [
      {
        id: 'ssa-3-a',
        kind: 'musique',
        title: 'La répétition du bloco, le mardi',
        blurb:
          'On vous met un surdo sur l’épaule et on vous apprend le motif. Ensuite il faut tenir deux heures.',
        hours: 3,
        price: 18,
        max: 6,
        includes: ['L’instrument prêté', 'Les boissons', 'La sueur, offerte'],
      },
      {
        id: 'ssa-3-b',
        kind: 'journee',
        title: 'Une journée et une nuit de fête',
        blurb:
          'Le marché le matin, la plage l’après-midi, la répétition le soir, et ce qui suit — ce qui suit est imprévisible.',
        hours: 12,
        price: 46,
        max: 4,
        includes: ['Les repas', 'Les transports', 'Toutes les entrées'],
      },
    ],
  },
];

export const HOSTS_BY_DESTINATION = (slug: string): Host[] =>
  HOSTS.filter((h) => h.destination === slug);

export const ALL_EXPERIENCES: { host: Host; exp: Experience }[] = HOSTS.flatMap((host) =>
  host.experiences.map((exp) => ({ host, exp })),
);
