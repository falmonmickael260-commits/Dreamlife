import { initialsOf } from '../lib/format';

/**
 * Les profils d'hôtes de ce prototype sont fictifs. Leur donner le portrait
 * d'une personne réelle serait prêter un faux nom et une fausse histoire à
 * quelqu'un qui n'a rien demandé — on dessine donc un monogramme, dérivé du
 * prénom, dont la teinte est stable pour un hôte donné.
 */
const TONES = [
  ['#B0532F', '#F0DCD2'],
  ['#1D3A31', '#DCE7E1'],
  ['#8A5A2B', '#F0E3CF'],
  ['#5B3A52', '#EADFE7'],
  ['#2F4A66', '#DCE5EE'],
  ['#6B5220', '#EFE7CF'],
] as const;

export function Monogram({ name, size = 56 }: { name: string; size?: number }) {
  let sum = 0;
  for (const ch of name) sum = (sum * 31 + ch.charCodeAt(0)) % 9973;
  const [fg, bg] = TONES[sum % TONES.length];

  return (
    <span
      aria-hidden="true"
      className="monogram"
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        fontSize: size * 0.34,
      }}
    >
      {initialsOf(name)}
    </span>
  );
}
