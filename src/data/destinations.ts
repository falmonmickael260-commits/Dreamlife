export type Region = 'Europe' | 'Maghreb' | 'Asie' | 'Amérique du Sud';

export type Destination = {
  slug: string;
  city: string;
  country: string;
  region: Region;
  /** Une ligne, dite comme un habitant la dirait. */
  tagline: string;
  intro: string;
  /** Trois textures de vie quotidienne — ce qui remplace la carte postale. */
  life: [string, string, string];
  languages: string[];
  season: string;
  /** Fuseau de prix constaté pour une expérience de deux à trois heures. */
  from: number;
};

/**
 * Dix destinations, pas plus. Le mélange Europe / Maghreb / Asie / Amérique du
 * Sud est délibéré : il doit suffire à comprendre, en un écran, que DreamLife
 * est une plateforme internationale.
 */
export const DESTINATIONS: Destination[] = [
  {
    slug: 'marseille',
    city: 'Marseille',
    country: 'France',
    region: 'Europe',
    tagline: 'Elle ne se visite pas. Elle s’habite, fort et à voix haute.',
    intro:
      'Marseille se raconte par ses quartiers plus que par son port. À Noailles on fait ses courses en quatre langues ; à l’Estaque on mange des panisses debout, face à l’eau.',
    life: [
      'Les courses du samedi matin rue du Marché-des-Capucins',
      'La partie de pétanque qui décide de l’apéritif',
      'Le repas de famille qui commence à midi et finit au crépuscule',
    ],
    languages: ['Français', 'Arabe', 'Comorien', 'Anglais'],
    season: 'Avril à juin, septembre et octobre',
    from: 24,
  },
  {
    slug: 'naples',
    city: 'Naples',
    country: 'Italie',
    region: 'Europe',
    tagline: 'La rue est le salon commun, et tout le monde y a sa chaise.',
    intro:
      'À Naples, la vie se passe en bas de chez soi. Le linge au-dessus des ruelles, le café bu debout, le ragù du dimanche : l’organisation normale d’une journée.',
    life: [
      'Le marché de la Pignasecca à sept heures du matin',
      'Le caffè sospeso — celui qu’on paie pour l’inconnu d’après',
      'Le dimanche chez la nonna, non négociable',
    ],
    languages: ['Italien', 'Napolitain', 'Anglais', 'Espagnol'],
    season: 'Mars à juin, septembre à novembre',
    from: 22,
  },
  {
    slug: 'marrakech',
    city: 'Marrakech',
    country: 'Maroc',
    region: 'Maghreb',
    tagline: 'Derrière chaque porte basse de la médina, une cour et du thé.',
    intro:
      'La médina n’est pas un décor, c’est un système de voisinage. Le four du quartier cuit encore la pâte des familles, et les artisans travaillent dans trois mètres carrés.',
    life: [
      'Porter sa pâte au four collectif du derb',
      'Le thé versé de haut, trois fois, chez le voisin',
      'Les dinandiers qui travaillent le cuivre au marteau, à l’oreille',
    ],
    languages: ['Arabe', 'Amazigh', 'Français', 'Anglais'],
    season: 'Octobre à avril',
    from: 18,
  },
  {
    slug: 'tunis',
    city: 'Tunis',
    country: 'Tunisie',
    region: 'Maghreb',
    tagline: 'Une médina qui travaille, un café où l’on refait le monde.',
    intro:
      'Tunis vit entre la médina et la mer. Un lablabi brûlant le matin, des parties de tawla interminables, et le couscous du vendredi qui rassemble trois générations.',
    life: [
      'Le lablabi du matin, préparé devant vous',
      'Les parties de tawla interminables du souk El Attarine',
      'Le couscous du vendredi, roulé à la main la veille',
    ],
    languages: ['Arabe', 'Français', 'Anglais', 'Italien'],
    season: 'Mars à juin, septembre à novembre',
    from: 16,
  },
  {
    slug: 'kyoto',
    city: 'Kyoto',
    country: 'Japon',
    region: 'Asie',
    tagline: 'La ville la plus discrète du monde, si l’on est invité.',
    intro:
      'Kyoto ne se livre pas aux horaires de visite. Elle se comprend dans une machiya de bois, dans un atelier de tissage de Nishijin, dans une cuisine obanzai faite pour soi.',
    life: [
      'Le marché de Nishiki avant l’ouverture des boutiques',
      'Les métiers à tisser de Nishijin, encore en bois',
      'Le ménage du matin devant sa porte, avant tout le monde',
    ],
    languages: ['Japonais', 'Anglais'],
    season: 'Avril, mai, octobre et novembre',
    from: 34,
  },
  {
    slug: 'chiang-mai',
    city: 'Chiang Mai',
    country: 'Thaïlande',
    region: 'Asie',
    tagline: 'Le Nord thaï se mange, se teint à l’indigo, se lève tôt.',
    intro:
      'Chiang Mai est une ville d’artisans et de cuisiniers. Le khao soi change de recette d’une famille à l’autre, et l’aumône aux moines se fait avant la chaleur.',
    life: [
      'L’aumône du matin, à six heures, devant la maison',
      'Le curry pilé au mortier, jamais au robot',
      'Les bains d’indigo mor hom qui teignent les mains',
    ],
    languages: ['Thaï', 'Lanna', 'Anglais'],
    season: 'Novembre à février',
    from: 15,
  },
  {
    slug: 'ubud',
    city: 'Ubud',
    country: 'Indonésie',
    region: 'Asie',
    tagline: 'Chaque journée commence par une offrande posée à terre.',
    intro:
      'Ubud est d’abord une organisation villageoise : le banjar décide, le subak partage l’eau des rizières, et trois générations partagent la même cour.',
    life: [
      'Les canang sari tressés au réveil, posés sans cérémonie',
      'L’eau des rizières répartie par le subak, depuis mille ans',
      'Le gamelan répété le soir, dans le pavillon du village',
    ],
    languages: ['Indonésien', 'Balinais', 'Anglais'],
    season: 'Avril à octobre',
    from: 14,
  },
  {
    slug: 'medellin',
    city: 'Medellín',
    country: 'Colombie',
    region: 'Amérique du Sud',
    tagline: 'Une ville qui a changé d’histoire et tient à la raconter.',
    intro:
      'Medellín se lit dans ses barrios accrochés à la pente. Les escaliers de la Comuna 13 servent d’abord à rentrer chez soi, et la salsa se danse dans des salons de quartier.',
    life: [
      'Le tinto de six heures, servi dans un gobelet minuscule',
      'Le marché Minorista, où l’on connaît son marchand par son prénom',
      'Les salons de danse de Manrique, le jeudi soir',
    ],
    languages: ['Espagnol', 'Anglais'],
    season: 'Toute l’année — décembre à mars pour le sec',
    from: 17,
  },
  {
    slug: 'cusco',
    city: 'Cusco',
    country: 'Pérou',
    region: 'Amérique du Sud',
    tagline: 'À 3 400 mètres, on tisse, on partage, on prend son temps.',
    intro:
      'Cusco n’est pas qu’un départ de trek. C’est une ville quechua où San Pedro nourrit les familles et où les tisseuses lisent leurs motifs comme une langue.',
    life: [
      'La soupe du matin au marché de San Pedro, avant six heures',
      'Les motifs tissés qui racontent une vallée, pas une mode',
      'La pachamanca cuite sous la terre, pour les jours qui comptent',
    ],
    languages: ['Espagnol', 'Quechua', 'Anglais'],
    season: 'Avril à octobre',
    from: 16,
  },
  {
    slug: 'salvador',
    city: 'Salvador de Bahia',
    country: 'Brésil',
    region: 'Amérique du Sud',
    tagline: 'Le tambour n’est pas une attraction : c’est l’heure qu’il est.',
    intro:
      'Salvador est la ville la plus africaine des Amériques, et cela se vit au quotidien : l’acarajé frit au coin de la rue, la roda qui se forme sans prévenir.',
    life: [
      'L’acarajé frit devant vous, à la tombée du jour',
      'La roda de capoeira qui se forme en cinq minutes',
      'Les répétitions de blocos, entendues de trois rues',
    ],
    languages: ['Portugais', 'Anglais', 'Espagnol'],
    season: 'Toute l’année — septembre à mars pour le sec',
    from: 15,
  },
];

export const DESTINATION_BY_SLUG: Record<string, Destination> = Object.fromEntries(
  DESTINATIONS.map((d) => [d.slug, d]),
);

export const REGIONS: Region[] = ['Europe', 'Maghreb', 'Asie', 'Amérique du Sud'];
