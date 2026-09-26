import type { Experience, Host } from '../data/hosts';
import { KIND_BY_ID } from '../data/kinds';
import { duration, euros } from '../lib/format';
import { Glyph } from './Glyph';
import { Monogram } from './Monogram';

export function HostCard({
  host,
  onPick,
}: {
  host: Host;
  onPick: (host: Host, exp: Experience) => void;
}) {
  return (
    <article className="host reveal">
      <header className="host__head">
        <Monogram name={host.firstName} size={60} />
        <div className="host__id">
          <h3 className="host__name">
            {host.firstName}, {host.age} ans
          </h3>
          <p className="host__job">{host.job}</p>
          <p className="host__meta">
            {host.area} · {host.languages.join(', ')}
          </p>
        </div>
        <p className="host__rating" title={`${host.reviews} avis`}>
          <span>{host.rating.toFixed(1).replace('.', ',')}</span>
          <small>{host.reviews} avis</small>
        </p>
      </header>

      <blockquote className="host__quote">« {host.quote} »</blockquote>

      <ul className="host__exps">
        {host.experiences.map((exp) => (
          <li key={exp.id}>
            <button className="exp" onClick={() => onPick(host, exp)}>
              <span className="exp__glyph">
                <Glyph id={exp.kind} size={20} />
              </span>
              <span className="exp__text">
                <span className="exp__title">{exp.title}</span>
                <span className="exp__kind">{KIND_BY_ID[exp.kind].short}</span>
              </span>
              <span className="exp__price">
                <span>{euros(exp.price)}</span>
                <small>{duration(exp.hours)}</small>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
