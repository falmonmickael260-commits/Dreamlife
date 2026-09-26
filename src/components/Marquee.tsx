import { DESTINATIONS } from '../data/destinations';

/**
 * La bande des dix villes, en défilement continu. Elle dit l'étendue de la
 * plateforme sans en faire une liste à lire, et donne au bas du hero le
 * mouvement qu'une page de revue n'a pas.
 *
 * Le contenu est écrit deux fois : la piste se décale de la moitié de sa
 * largeur, donc la boucle n'a pas de raccord visible.
 */
export function Marquee() {
  const cities = DESTINATIONS.map((d) => d.city);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" data-marquee="52">
        {[0, 1].map((copy) => (
          <span className="marquee__run" key={copy}>
            {cities.map((city) => (
              <span className="marquee__item" key={city}>
                {city}
                <i className="marquee__dot" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
