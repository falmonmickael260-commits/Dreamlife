import { initialsOf } from '../lib/format';

/**
 * Les profils d'hôtes de ce prototype sont fictifs. Leur donner le portrait
 * d'une personne réelle serait prêter un faux prénom et une fausse histoire à
 * quelqu'un qui n'a rien demandé — on dessine donc un monogramme, dérivé du
 * prénom, dont la teinte est stable pour un hôte donné.
 *
 * Les six teintes restent dans la gamme de la marque : grès rosé, or brûlé,
 * pierre, vert profond. Aucune couleur vive.
 */
const TONES = [
  ['#8a5a4e', '#f2e6e1'],
  ['#1f3a33', '#dfe7e2'],
  ['#8b6413', '#f3ead6'],
  ['#6b4a5e', '#eee3ea'],
  ['#3f5060', '#e3e9ee'],
  ['#7a5230', '#f1e6db'],
] as const;

export function Monogram({ name, size = 56 }: { name: string; size?: number }) {
  let sum = 0;
  for (const ch of name) sum = (sum * 31 + ch.charCodeAt(0)) % 9973;
  const [fg, bg] = TONES[sum % TONES.length];

  return (
    <span
      aria-hidden="true"
      className="monogram"
      style={{ width: size, height: size, background: bg, color: fg, fontSize: size * 0.33 }}
    >
      {initialsOf(name)}
    </span>
  );
}
