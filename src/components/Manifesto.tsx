/** La promesse, dite une seule fois, en grand, sans image derrière. */
export function Manifesto() {
  return (
    <section className="manifesto">
      <div className="wrap-narrow">
        <p className="manifesto__lines reveal">
          <span>Ne voyagez pas seulement</span>
          <span>pour voir un endroit.</span>
          <em>Découvrez-le à travers</em>
          <em>ceux qui l’habitent.</em>
        </p>
        <p className="manifesto__foot reveal" data-reveal-delay="180">
          Un habitant vous ouvre quelques heures de sa vie. Vous ne suivez pas un guide, vous
          accompagnez quelqu’un. Ce n’est pas une visite — c’est une rencontre, et elle vaut pour
          les deux.
        </p>
      </div>
    </section>
  );
}
