import { useEffect, useState } from 'react';
import { HERO_ROTATION } from '../data/photos';

/**
 * Le hero fait défiler trois photographies documentaires en fondu très lent.
 * Aucun texte n'est posé sur un visage : le bandeau de texte occupe le bas de
 * l'écran et les images sont cadrées en conséquence.
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
        <p className="hero__kicker">
          Marseille · Naples · Marrakech · Tunis · Kyoto · Chiang Mai · Ubud · Medellín · Cusco ·
          Salvador
        </p>

        <h1 className="hero__title">
          Découvrez le monde
          <br />
          <em>à travers ceux qui l’habitent.</em>
        </h1>

        <p className="hero__lead">
          DreamLife met en relation les voyageurs et les habitants qui acceptent de partager
          quelques heures de leur vie — un repas, un quartier, un savoir-faire. L’hébergement
          n’est jamais obligatoire.
        </p>

        <div className="hero__cta">
          <a className="btn" href="#destinations">
            Voir les dix destinations
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
