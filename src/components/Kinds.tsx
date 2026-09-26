import { KINDS } from '../data/kinds';
import { Glyph } from './Glyph';

/**
 * Les dix formes de rencontre. Les deux qui impliquent de dormir chez l'hôte
 * sont marquées « optionnel » — c'est le point de doctrine de la marque, il
 * doit être lisible ici et pas seulement dans une page d'aide.
 */
export function Kinds() {
  return (
    <section className="section kinds" id="rencontres">
      <div className="wrap">
        <div className="kinds__head">
          <div className="eyebrow reveal">
            <span className="eyebrow__num">02</span>
            <span>Ce que l’on peut vivre</span>
          </div>
          <h2 className="kinds__title reveal" data-reveal-delay="80">
            Dix façons d’entrer dans la vie de quelqu’un
          </h2>
          <p className="lead reveal" data-reveal-delay="140">
            Chaque hôte choisit ce qu’il veut partager. Certains n’offrent qu’un café, d’autres
            trois jours. Les deux dernières formes seulement supposent de dormir sur place.
          </p>
        </div>

        <ul className="kinds__grid">
          {KINDS.map((k, i) => (
            <li className="kind reveal" data-reveal-delay={(i % 5) * 70} key={k.id}>
              <span className="kind__glyph">
                <Glyph id={k.id} size={26} />
              </span>
              <h3 className="kind__label">{k.label}</h3>
              <p className="kind__note">{k.note}</p>
              {k.isStay && <span className="kind__tag">Optionnel</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
