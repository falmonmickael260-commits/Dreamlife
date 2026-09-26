import { useEffect, useState } from 'react';
import { HERO_ROTATION } from '../data/photos';

/**
 * Trois photographies documentaires en fondu très lent. Le texte tient en
 * quatre lignes : la photographie doit porter, pas le paragraphe.
 */
export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % HERO_ROTATION.length), 6400);
    return () => window.clearInterval(id);
  }, []);

  const current = HERO_ROTATION[i];

  return (
    <section className="hero">
      <div className="hero__stage" aria-hidden="true">
        {HERO_ROTATION.map((p, n) => (
          <img
            key={p.id}
            src={p.src}
            srcSet={p.srcset}
            sizes="100vw"
            alt=""
            className={`hero__img${n === i ? ' is-on' : ''}`}
            loading={n === 0 ? 'eager' : 'lazy'}
            decoding={n === 0 ? 'sync' : 'async'}
            draggable={false}
          />
        ))}
        <div className="hero__scrim" />
      </div>

      <div className="hero__body wrap">
        <p className="hero__kicker">Dix villes · Quatre continents</p>

        <h1 className="hero__title">
          Découvrez le monde
          <br />
          <em>à travers ceux qui l’habitent.</em>
        </h1>

        <p className="hero__lead">
          Un habitant vous ouvre quelques heures de sa vie.
          <br />
          L’hébergement n’est jamais obligatoire.
        </p>

        <div className="hero__cta">
          <a className="btn" href="#destinations">
            Voir les destinations
          </a>
          <a className="btn btn--ghost" href="#rencontres">
            Ce que l’on peut vivre
          </a>
        </div>
      </div>

      <p className="hero__credit">
        <span>{current.caption}</span>
        <a href={current.page} target="_blank" rel="noreferrer noopener">
          {current.author} · {current.license}
        </a>
      </p>
    </section>
  );
}
