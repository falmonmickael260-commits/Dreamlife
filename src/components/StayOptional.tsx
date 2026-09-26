/**
 * Le point qui sépare DreamLife d'une plateforme de logement. Une bande pleine,
 * un chiffre qui se compte à l'entrée dans l'écran, aucune explication de plus.
 */
export function StayOptional() {
  return (
    <section className="stay">
      <div className="wrap stay__inner">
        <div className="stay__left">
          <div className="eyebrow eyebrow--invert" data-rise>
            <span className="eyebrow__num">03</span>
            <span>L’hébergement</span>
          </div>
          <h2 className="stay__title" data-line-group>
            <span className="mask">
              <span data-line>L’hébergement</span>
            </span>
            <span className="mask">
              <em data-line>n’est pas le sujet.</em>
            </span>
          </h2>
          <p className="stay__lead" data-rise data-rise-delay="120">
            Dormez à l’hôtel ou chez vous, et réservez seulement la rencontre.
          </p>
        </div>

        <dl className="stay__figures" data-rise-group>
          <div>
            <dt>
              <span data-count="54">54</span>
              <span className="stay__of">sur 60</span>
            </dt>
            <dd>expériences sans aucune nuit sur place</dd>
          </div>
          <div>
            <dt>Aucun hôte</dt>
            <dd>ne peut conditionner une expérience à un logement</dd>
          </div>
          <div>
            <dt>Une option</dt>
            <dd>affichée comme telle, jamais mise en avant</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
