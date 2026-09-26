import type { Experience, Host } from '../data/hosts';
import { ALL_EXPERIENCES } from '../data/hosts';
import { DESTINATION_BY_SLUG } from '../data/destinations';
import { KIND_BY_ID } from '../data/kinds';
import { duration, euros } from '../lib/format';
import { Glyph } from './Glyph';
import { Monogram } from './Monogram';

/** Six expériences prises dans six villes différentes, pour montrer l'étendue. */
const PICKS = ['nap-1-a', 'rak-2-a', 'kyo-1-a', 'cnx-1-a', 'mde-1-a', 'ssa-2-a'];

export function Selection({ onPick }: { onPick: (host: Host, exp: Experience) => void }) {
  const items = PICKS.map((id) => ALL_EXPERIENCES.find((x) => x.exp.id === id)!).filter(Boolean);

  return (
    <section className="section picks">
      <div className="wrap">
        <div className="eyebrow" data-rise>
          <span className="eyebrow__num">05</span>
          <span>Cette semaine sur DreamLife</span>
        </div>
        <h2 className="picks__title" data-line-group>
          <span className="mask">
            <span data-line>Six invitations</span>
          </span>
        </h2>

        <ul className="picks__grid" data-rise-group>
          {items.map(({ host, exp }) => (
            <li className="pick" key={exp.id}>
              <button className="pick__btn" onClick={() => onPick(host, exp)}>
                <p className="pick__kind">
                  <Glyph id={exp.kind} size={17} />
                  <span>{KIND_BY_ID[exp.kind].short}</span>
                </p>
                <h3 className="pick__title">{exp.title}</h3>
                <p className="pick__blurb">{exp.blurb}</p>
                <footer className="pick__foot">
                  <Monogram name={host.firstName} size={36} />
                  <span className="pick__who">
                    <strong>{host.firstName}</strong>
                    <small>{DESTINATION_BY_SLUG[host.destination].city}</small>
                  </span>
                  <span className="pick__price">
                    {euros(exp.price)}
                    <small>{duration(exp.hours)}</small>
                  </span>
                </footer>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
