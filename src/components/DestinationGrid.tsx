import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DESTINATIONS, REGIONS, type Region } from '../data/destinations';
import { HOSTS } from '../data/hosts';
import { coverOf } from '../data/photos';
import { euros } from '../lib/format';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * La grille des destinations est la pièce la plus animée du site, et sa
 * chorégraphie lui est propre — elle ne passe donc pas par lib/motion.ts.
 *
 * Trois mouvements se superposent :
 *   1. à l'entrée dans l'écran, chaque cadre se dévoile de bas en haut et son
 *      image se décompresse ;
 *   2. pendant tout le défilement, l'image dérive dans son cadre — d'où une
 *      image volontairement plus haute que le cadre, sans quoi la dérive
 *      laisserait un bord vide ;
 *   3. au changement de filtre, la grille se recompose en cascade, sans
 *      attendre le scroll puisque le lecteur vient de cliquer.
 */
export function DestinationGrid() {
  const [region, setRegion] = useState<Region | 'Toutes'>('Toutes');
  const grid = useRef<HTMLUListElement>(null);
  const firstPass = useRef(true);
  const shown = DESTINATIONS.filter((d) => region === 'Toutes' || d.region === region);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const cards = gsap.utils.toArray<HTMLElement>('.dest', grid.current);
      if (!cards.length) return;

      const immediate = !firstPass.current;
      firstPass.current = false;

      cards.forEach((card, i) => {
        const frame = card.querySelector<HTMLElement>('.dest__frame');
        const image = card.querySelector<HTMLElement>('.dest__img');
        const body = card.querySelector<HTMLElement>('.dest__body');

        const tl = gsap.timeline({
          delay: immediate ? i * 0.06 : 0,
          ...(immediate
            ? {}
            : { scrollTrigger: { trigger: card, start: 'top 88%', once: true } }),
        });

        if (frame) {
          tl.from(frame, {
            clipPath: 'inset(100% 0% 0% 0%)',
            duration: 1.3,
            ease: 'expo.out',
            delay: immediate ? 0 : i * 0.08,
          });
        }
        if (image) tl.from(image, { scale: 1.2, duration: 1.7, ease: 'expo.out' }, 0);
        if (body) tl.from(body, { y: 22, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.25);

        // La dérive, liée à la position de défilement.
        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
            },
          );
        }
      });
    },
    { dependencies: [region], revertOnUpdate: true },
  );

  return (
    <section className="section dests" id="destinations">
      <div className="wrap">
        <div className="dests__head">
          <div>
            <div className="eyebrow" data-rise>
              <span className="eyebrow__num">04</span>
              <span>Dix destinations pour commencer</span>
            </div>
            <h2 className="dests__title" data-line-group>
              <span className="mask">
                <span data-line>Quatre continents,</span>
              </span>
              <span className="mask">
                <em data-line>trente habitants</em>
              </span>
            </h2>
          </div>

          <div className="filters" data-rise role="group" aria-label="Filtrer par région">
            {(['Toutes', ...REGIONS] as const).map((r) => (
              <button
                key={r}
                className={`chip${region === r ? ' is-on' : ''}`}
                onClick={() => setRegion(r)}
                aria-pressed={region === r}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <ul className="dests__grid" ref={grid}>
          {shown.map((d) => {
            const hosts = HOSTS.filter((h) => h.destination === d.slug).length;
            const photo = coverOf(d.slug);
            return (
              <li className="dest" key={d.slug}>
                <a className="dest__link" href={`#/destination/${d.slug}`}>
                  <span className="dest__frame">
                    <img
                      className="dest__img"
                      src={photo.src}
                      srcSet={photo.srcset}
                      sizes="(max-width: 700px) 100vw, 33vw"
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                    <span className="dest__reveal">
                      <span>Découvrir</span>
                    </span>
                  </span>

                  <span className="dest__body">
                    <span className="dest__country">{d.country}</span>
                    <span className="dest__city">{d.city}</span>
                    <span className="dest__rule" />
                    <span className="dest__foot">
                      <span>
                        {hosts} hôtes · dès {euros(d.from)}
                      </span>
                      <span className="dest__arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
