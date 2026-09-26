import { useMemo, useState } from 'react';
import { DESTINATION_BY_SLUG } from '../data/destinations';
import { HOSTS_BY_DESTINATION, type Experience, type Host } from '../data/hosts';
import { KIND_BY_ID, type KindId } from '../data/kinds';
import { coverOf, photosOf } from '../data/photos';
import { euros } from '../lib/format';
import { HostCard } from './HostCard';
import { Photo } from './Photo';

export function DestinationPage({
  slug,
  onPick,
}: {
  slug: string;
  onPick: (host: Host, exp: Experience) => void;
}) {
  const dest = DESTINATION_BY_SLUG[slug];
  const hosts = useMemo(() => HOSTS_BY_DESTINATION(slug), [slug]);
  const [filter, setFilter] = useState<KindId | 'all'>('all');

  if (!dest) {
    return (
      <main className="section wrap">
        <h1 className="dp__title">Cette destination n’existe pas encore.</h1>
        <p className="lead">
          Le prototype couvre dix villes.{' '}
          <a className="link" href="#destinations">
            Revenir à la liste
          </a>
          .
        </p>
      </main>
    );
  }

  const kinds = Array.from(
    new Set(hosts.flatMap((h) => h.experiences.map((e) => e.kind))),
  ) as KindId[];

  const shown =
    filter === 'all'
      ? hosts
      : hosts
          .map((h) => ({ ...h, experiences: h.experiences.filter((e) => e.kind === filter) }))
          .filter((h) => h.experiences.length);

  const gallery = photosOf(slug).slice(1, 4);

  return (
    <main className="dp">
      <div className="dp__hero">
        <img
          className="dp__hero-img"
          src={coverOf(slug).src}
          srcSet={coverOf(slug).srcset}
          sizes="100vw"
          alt={coverOf(slug).alt}
        />
        <div className="dp__hero-scrim" />
        <div className="wrap dp__hero-body">
          <a className="dp__back" href="#destinations">
            ← Toutes les destinations
          </a>
          <p className="dp__country">
            {dest.country} · {dest.region}
          </p>
          <h1 className="dp__title">{dest.city}</h1>
          <p className="dp__tagline">{dest.tagline}</p>
        </div>
        <p className="dp__credit">
          <span>{coverOf(slug).caption}</span>
          <a href={coverOf(slug).page} target="_blank" rel="noreferrer noopener">
            {coverOf(slug).author} · {coverOf(slug).license}
          </a>
        </p>
      </div>

      <section className="wrap dp__intro">
        <div className="dp__intro-text">
          <p className="lead reveal">{dest.intro}</p>
        </div>
        <dl className="dp__facts reveal" data-reveal-delay="100">
          <div>
            <dt>Ce que vous entendrez</dt>
            <dd>{dest.languages.join(', ')}</dd>
          </div>
          <div>
            <dt>La bonne saison</dt>
            <dd>{dest.season}</dd>
          </div>
          <div>
            <dt>À partir de</dt>
            <dd>{euros(dest.from)} par personne</dd>
          </div>
          <div>
            <dt>Hôtes disponibles</dt>
            <dd>{hosts.length}</dd>
          </div>
        </dl>
      </section>

      <section className="wrap dp__life">
        <div className="eyebrow reveal">
          <span className="eyebrow__num">—</span>
          <span>Ce qui se passe ici tous les jours</span>
        </div>
        <ul className="dp__life-list">
          {dest.life.map((l, i) => (
            <li className="reveal" data-reveal-delay={i * 90} key={l}>
              <span className="dp__life-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="dp__life-t">{l}</span>
            </li>
          ))}
        </ul>
        {gallery.length > 0 && (
          <div className="dp__gallery">
            {gallery.map((p, i) => (
              <div className="reveal" data-reveal-delay={i * 100} key={p.id}>
                <Photo photo={p} ratio="3 / 2" credit="always" sizes="(max-width: 800px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="wrap dp__hosts">
        <div className="dp__hosts-head">
          <div>
            <div className="eyebrow reveal">
              <span className="eyebrow__num">—</span>
              <span>Les habitants qui vous reçoivent</span>
            </div>
            <h2 className="dp__hosts-title reveal" data-reveal-delay="70">
              {hosts.length} hôtes à {dest.city}
            </h2>
          </div>
          <div className="filters reveal" data-reveal-delay="110" role="group" aria-label="Filtrer par forme de rencontre">
            <button
              className={`chip${filter === 'all' ? ' is-on' : ''}`}
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
            >
              Tout
            </button>
            {kinds.map((k) => (
              <button
                key={k}
                className={`chip${filter === k ? ' is-on' : ''}`}
                onClick={() => setFilter(k)}
                aria-pressed={filter === k}
              >
                {KIND_BY_ID[k].short}
              </button>
            ))}
          </div>
        </div>

        <div className="dp__hosts-grid">
          {shown.map((h) => (
            <HostCard host={h} onPick={onPick} key={h.id} />
          ))}
        </div>

        <p className="dp__proto">
          Profils de démonstration : les prénoms, les citations et les tarifs sont écrits pour ce
          prototype. Les photographies ci-dessus documentent la ville, pas ces personnes.
        </p>
      </section>
    </main>
  );
}
