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
    note: 'Deux heures, un café, une conversation.',
  },
  {
    id: 'repas',
    label: 'Partager un repas',
    short: 'Un repas',
    note: 'À sa table, souvent avec sa famille.',
  },
  {
    id: 'quartier',
    label: 'Découvrir son quartier',
    short: 'Son quartier',
    note: 'Ses rues, son boulanger, ses raccourcis.',
  },
  {
    id: 'spots',
    label: 'Ses endroits préférés',
    short: 'Ses endroits',
    note: 'Pas les incontournables. Les siens.',
  },
  {
    id: 'cuisine',
    label: 'Cuisiner ensemble',
    short: 'Cuisiner',
    note: 'Le marché d’abord, la cuisine ensuite.',
  },
  {
    id: 'savoirFaire',
    label: 'Un savoir-faire',
    short: 'Un savoir-faire',
    note: 'Un atelier, un métier, des mains qui travaillent.',
  },
  {
    id: 'musique',
    label: 'Musique et traditions',
    short: 'Musique',
    note: 'Ce qui se joue quand personne ne regarde.',
  },
  {
    id: 'maison',
    label: 'Être reçu chez lui',
    short: 'Chez lui',
    note: 'Franchir le seuil. Sans dormir sur place.',
  },
  {
    id: 'hebergement',
    label: 'Être hébergé',
    short: 'Hébergement',
    note: 'Proposé par certains hôtes. Jamais une condition.',
    isStay: true,
  },
  {
    id: 'journee',
    label: 'Une journée, ou plusieurs',
    short: 'Une journée',
    note: 'Du matin au soir, à son rythme.',
    isStay: true,
  },
];

export const KIND_BY_ID: Record<KindId, Kind> = Object.fromEntries(
  KINDS.map((k) => [k.id, k]),
) as Record<KindId, Kind>;
