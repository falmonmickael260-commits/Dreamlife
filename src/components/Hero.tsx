import { useEffect, useState } from 'react';
import { HERO_ROTATION } from '../data/photos';
import { Marquee } from './Marquee';

/**
 * Trois photographies documentaires en fondu très lent, et un titre dont les
 * lignes montent depuis leur masque. Le texte tient en quatre lignes : c'est la
 * photographie qui doit porter.
 */
export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % HERO_ROTATION.length), 7000);
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

      <div className="hero__body wrap" data-line-group>
        <p className="mask hero__kicker">
          <span data-line>La plateforme des rencontres locales</span>
        </p>

        <h1 className="hero__title">
          <span className="mask">
            <span data-line>Découvrez le monde</span>
          </span>
          <span className="mask">
            <em data-line>à travers ceux</em>
          </span>
          <span className="mask">
            <em data-line>qui l’habitent.</em>
          </span>
        </h1>

        <p className="mask hero__lead">
          <span data-line>Un habitant vous ouvre quelques heures de sa vie.</span>
        </p>

        <div className="hero__cta" data-rise data-rise-delay="900">
          <a className="btn" href="#destinations">
            <span>Voir les destinations</span>
          </a>
          <a className="link hero__link" href="#rencontres">
            Ce que l’on peut vivre
          </a>
        </div>
      </div>

      <Marquee />

      <p className="hero__credit">
        <span>{current.caption}</span>
        <a href={current.page} target="_blank" rel="noreferrer noopener">
          {current.author} · {current.license}
        </a>
      </p>
    </section>
  );
}
