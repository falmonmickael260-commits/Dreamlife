/**
 * Les dix formes d'expérience que peut proposer un habitant.
 *
 * L'ordre compte : il va du geste le plus court (un café) au plus engageant
 * (plusieurs jours), et l'hébergement n'arrive qu'en neuvième position — la
 * plateforme n'est pas un service de logement, c'est une rencontre.
 */
export type KindId =
  | 'cafe'
  | 'repas'
  | 'quartier'
  | 'spots'
  | 'cuisine'
  | 'savoirFaire'
  | 'musique'
  | 'maison'
  | 'hebergement'
  | 'journee';

export type Kind = {
  id: KindId;
  label: string;
  short: string;
  note: string;
  /** Vrai pour les deux seules formes qui impliquent de dormir chez l'hôte. */
  isStay?: boolean;
};

export const KINDS: Kind[] = [
  {
    id: 'cafe',
    label: 'Passer un moment ensemble',
    short: 'Un moment',
    note: 'Deux heures, un café, une conversation. La façon la plus simple de commencer.',
  },
  {
    id: 'repas',
    label: 'Partager un repas',
    short: 'Un repas',
    note: 'À la table de votre hôte, souvent avec sa famille. Ce que l’on mange vraiment, pas ce qui est sur les cartes.',
  },
  {
    id: 'quartier',
    label: 'Découvrir son quartier',
    short: 'Son quartier',
    note: 'Les rues qu’il traverse tous les jours, le boulanger qu’il tutoie, les raccourcis.',
  },
  {
    id: 'spots',
    label: 'Ses endroits préférés',
    short: 'Ses endroits',
    note: 'Pas les incontournables. Les siens — ceux où il emmène ses amis.',
  },
  {
    id: 'cuisine',
    label: 'Cuisiner ensemble',
    short: 'Cuisiner',
    note: 'Le marché d’abord, puis la cuisine. On repart avec un plat qu’on sait refaire.',
  },
  {
    id: 'savoirFaire',
    label: 'Un savoir-faire',
    short: 'Un savoir-faire',
    note: 'Un atelier, un métier, des mains qui travaillent. Deux heures pour comprendre un geste.',
  },
  {
    id: 'musique',
    label: 'Musique et traditions',
    short: 'Musique',
    note: 'Ce qui se joue, se danse et se fête quand aucun touriste ne regarde.',
  },
  {
    id: 'maison',
    label: 'Être reçu chez lui',
    short: 'Chez lui',
    note: 'Franchir le seuil, voir comment on vit ici. Sans dormir sur place.',
  },
  {
    id: 'hebergement',
    label: 'Être hébergé',
    short: 'Hébergement',
    note: 'Proposé par certains hôtes seulement. Jamais une condition pour réserver le reste.',
    isStay: true,
  },
  {
    id: 'journee',
    label: 'Une journée, ou plusieurs',
    short: 'Une journée',
    note: 'Votre hôte vous accompagne du matin au soir, à son rythme et dans sa vie.',
    isStay: true,
  },
];

export const KIND_BY_ID: Record<KindId, Kind> = Object.fromEntries(
  KINDS.map((k) => [k.id, k]),
) as Record<KindId, Kind>;
