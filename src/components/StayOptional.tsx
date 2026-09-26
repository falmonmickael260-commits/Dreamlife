/**
 * Le point qui sépare DreamLife d'une plateforme de logement. Une bande pleine,
 * trois chiffres, aucune explication superflue.
 */
export function StayOptional() {
  return (
    <section className="stay">
      <div className="wrap stay__inner">
        <div className="stay__left">
          <div className="eyebrow eyebrow--invert reveal">
            <span className="eyebrow__num">03</span>
            <span>L’hébergement</span>
          </div>
          <h2 className="stay__title reveal" data-reveal-delay="80">
            L’hébergement n’est pas le sujet.
          </h2>
          <p className="stay__lead reveal" data-reveal-delay="120">
            Dormez à l’hôtel ou chez vous, et réservez seulement la rencontre.
          </p>
        </div>

        <dl className="stay__figures">
          <div className="reveal" data-reveal-delay="160">
            <dt>54 sur 60</dt>
            <dd>expériences sans aucune nuit sur place</dd>
          </div>
          <div className="reveal" data-reveal-delay="200">
            <dt>Aucun hôte</dt>
            <dd>ne peut conditionner une expérience à un logement</dd>
          </div>
          <div className="reveal" data-reveal-delay="240">
            <dt>Une option</dt>
            <dd>affichée comme telle, jamais mise en avant</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
