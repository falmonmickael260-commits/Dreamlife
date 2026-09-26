import { KINDS } from '../data/kinds';
import { Glyph } from './Glyph';

/**
 * Les dix formes de rencontre, en index éditorial : un numéro, un intitulé, une
 * ligne de précision, un filet. Dix cases encadrées faisaient catalogue ; une
 * liste numérotée fait sommaire de revue.
 *
 * Les deux formes qui supposent de dormir chez l'hôte portent la mention
 * « optionnel » — c'est le point de doctrine de la marque, il doit se lire ici.
 */
export function Kinds() {
  return (
    <section className="section kinds" id="rencontres">
      <div className="wrap">
        <div className="kinds__head">
          <div className="eyebrow" data-rise>
            <span className="eyebrow__num">02</span>
            <span>Ce que l’on peut vivre</span>
          </div>
          <h2 className="kinds__title" data-line-group>
            <span className="mask">
              <span data-line>Dix façons d’entrer</span>
            </span>
            <span className="mask">
              <em data-line>dans la vie de quelqu’un</em>
            </span>
          </h2>
        </div>

        <ol className="index" data-rise-group>
          {KINDS.map((k, i) => (
            <li className="index__row" key={k.id}>
              <span className="index__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="index__label">{k.label}</span>
              <span className="index__note">{k.note}</span>
              {k.isStay ? <span className="index__tag">Optionnel</span> : <span />}
              <span className="index__glyph">
                <Glyph id={k.id} size={20} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
