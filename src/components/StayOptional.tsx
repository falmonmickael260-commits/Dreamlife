/**
 * Le point qui différencie DreamLife des plateformes de logement. Il a droit à
 * une bande pleine, sombre, et à une formulation sans ambiguïté.
 */
export function StayOptional() {
  return (
    <section className="stay">
      <div className="wrap stay__inner">
        <div className="stay__left">
          <div className="eyebrow eyebrow--invert reveal">
            <span className="eyebrow__num">03</span>
            <span>À propos de l’hébergement</span>
          </div>
          <h2 className="stay__title reveal" data-reveal-delay="80">
            L’hébergement n’est pas le sujet.
          </h2>
        </div>

        <div className="stay__right">
          <p className="stay__lead reveal" data-reveal-delay="120">
            Vous pouvez dormir à l’hôtel, chez vous, dans un appartement loué — et réserver
            uniquement une expérience avec un habitant. C’est même le cas le plus fréquent.
          </p>
          <ul className="stay__list">
            <li className="reveal" data-reveal-delay="160">
              <strong>Sur les soixante expériences du prototype, cinquante-quatre</strong> ne
              comportent aucune nuit sur place.
            </li>
            <li className="reveal" data-reveal-delay="200">
              <strong>Aucun hôte</strong> ne peut conditionner une expérience à une réservation
              d’hébergement.
            </li>
            <li className="reveal" data-reveal-delay="240">
              <strong>Quand un hôte propose une chambre</strong>, c’est une proposition
              supplémentaire, affichée comme telle, et jamais mise en avant à la place du reste.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
