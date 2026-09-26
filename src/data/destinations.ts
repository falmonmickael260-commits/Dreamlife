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
    tagline: 'Une ville qui ne se visite pas : elle s’habite, fort et à voix haute.',
    intro:
      'Marseille se raconte par ses quartiers plus que par son port. À Noailles on fait ses courses en quatre langues ; à l’Estaque on mange des panisses debout ; dans les cabanons de la Pointe Rouge on déjeune jusqu’à cinq heures de l’après-midi.',
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
    tagline: 'Ici la rue est le salon commun, et tout le monde y a sa chaise.',
    intro:
      'À Naples, la vie se passe en bas de chez soi. Le linge tendu au-dessus des ruelles, le café bu debout en trente secondes, le ragù du dimanche qui mijote depuis l’aube : rien de tout cela n’est un spectacle, c’est l’organisation normale de la journée.',
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
    tagline: 'Derrière chaque porte basse de la médina, il y a une cour et du thé.',
    intro:
      'La médina n’est pas un décor : c’est un système de voisinage. Le four à pain du quartier cuit encore la pâte des familles, les artisans travaillent dans des ateliers de trois mètres carrés, et le hammam du coin reste le vrai centre social du derb.',
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
    tagline: 'Une médina qui travaille, un café où l’on refait le monde en boucle.',
    intro:
      'Tunis vit entre la médina et la mer. On y déjeune d’un lablabi brûlant dans un bol de pain rassis, on joue au tawla des heures au fond d’un café, et le couscous du vendredi rassemble encore trois générations autour du même plat.',
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
    tagline: 'La ville la plus discrète du monde, si on prend le temps d’être invité.',
    intro:
      'Kyoto ne se livre pas aux horaires de visite. Elle se comprend dans une machiya de bois où l’on retire ses chaussures, dans un atelier de tissage de Nishijin qui n’a pas changé de métier depuis quatre générations, dans la cuisine obanzai que l’on prépare pour soi et pas pour les cartes.',
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
    tagline: 'Le Nord thaï se mange, se teint à l’indigo et se lève très tôt.',
    intro:
      'Chiang Mai est une ville d’artisans et de cuisiniers. Le khao soi n’a pas deux fois la même recette d’une famille à l’autre, les villages de Sankamphaeng vivent encore de l’argent et du bois, et l’aumône du matin aux moines se fait avant que la chaleur ne tombe sur la ville.',
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
    tagline: 'Un village où chaque journée commence par une offrande posée à terre.',
    intro:
      'Ubud est d’abord une organisation villageoise : le banjar décide, le subak partage l’eau des rizières, et les canang sari sont tressés puis déposés chaque matin devant les maisons. Les familles vivent dans des enceintes où trois générations partagent la même cour.',
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
    tagline: 'Une ville qui a changé d’histoire, et qui tient à la raconter elle-même.',
    intro:
      'Medellín se lit dans ses barrios accrochés à la pente. Les escaliers mécaniques de la Comuna 13 y sont d’abord un moyen de rentrer chez soi, le tinto se boit dix fois par jour debout, et la salsa se danse dans des salons de quartier que personne n’a mis sur une carte.',
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
    tagline: 'À 3 400 mètres, on tisse, on partage et on prend son temps.',
    intro:
      'Cusco ne se résume pas au point de départ d’un trek. C’est une ville quechua où le marché de San Pedro nourrit les familles, où les tisseuses de Chinchero lisent leurs motifs comme une langue, et où le repas se cuit encore sous la terre pour les grandes occasions.',
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
    tagline: 'Le tambour n’est pas une attraction : c’est la manière de compter le temps.',
    intro:
      'Salvador est la ville la plus africaine des Amériques, et cela se vit au quotidien : l’acarajé frit au coin de la rue par des baianas qui tiennent leur place depuis trente ans, la roda de capoeira qui se forme sans prévenir, les répétitions de percussions qui traversent les murs du Rio Vermelho.',
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
