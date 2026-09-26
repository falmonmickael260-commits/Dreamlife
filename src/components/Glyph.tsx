import type { KindId } from '../data/kinds';

/**
 * Dix pictogrammes dessinés au trait, sur une grille de 24, avec le même
 * épaississement partout. Pas d'emoji : une plateforme premium ne met pas
 * d'emoji dans son interface.
 */
const PATHS: Record<KindId, string> = {
  cafe: 'M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Zm11 1h2.2a2 2 0 0 1 0 4H16M4 21h13',
  repas: 'M6 3v8m0 0a2.5 2.5 0 0 0 2.5-2.5V3M6 11v10M15 21V3c2.2.7 3.4 2.6 3.4 5.2 0 2-.9 3.4-2.3 3.9',
  quartier: 'M3 21h18M5 21V9l5-4 5 4v12M9 21v-5h3v5M18 21v-7l-3-2',
  spots: 'M12 21s6.2-6 6.2-10.4A6.2 6.2 0 0 0 5.8 10.6C5.8 15 12 21 12 21Zm0-8.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  cuisine: 'M4 10h16M6 10v8.5A2.5 2.5 0 0 0 8.5 21h7a2.5 2.5 0 0 0 2.5-2.5V10M9 7c0-1.6.8-2.4 1.6-3.1.6-.5.9-1 .9-1.9M14 7c0-1.2.6-1.8 1.2-2.3',
  savoirFaire: 'M3 20.5 9 14.5m0 0 1.6-3.6a4.6 4.6 0 0 1 6.3-6.3l-2.4 2.4 2.1 2.1 2.4-2.4a4.6 4.6 0 0 1-6.3 6.3L9 14.5Zm-6 6 1.8 1.8',
  musique: 'M9 18V6l10-2v12M9 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm10-2a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z',
  maison: 'M4 11 12 4l8 7v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Zm5 10v-6h6v6',
  hebergement: 'M3 19v-6.5A1.5 1.5 0 0 1 4.5 11H20a1 1 0 0 1 1 1v7M3 19h18M7.5 11V8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3',
  journee: 'M12 4v2m0 12v2M4 12H2m20 0h-2M6 6 4.6 4.6M19.4 19.4 18 18M18 6l1.4-1.4M4.6 19.4 6 18M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z',
};

export function Glyph({ id, size = 22 }: { id: KindId; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[id]} />
    </svg>
  );
}

/**
 * La marque : une arche — le seuil que l'on franchit quand quelqu'un vous
 * reçoit — et le point qui se tient à l'intérieur.
 */
export function Arch({ size = 26, dot = 'var(--clay)' }: { size?: number; dot?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 26.5V15.5a8 8 0 0 1 16 0v11"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle cx="16" cy="17.6" r="2.6" fill={dot} />
    </svg>
  );
}
