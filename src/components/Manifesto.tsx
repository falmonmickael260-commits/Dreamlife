/** La promesse, dite une seule fois, en très grand, ligne à ligne. */
export function Manifesto() {
  return (
    <section className="manifesto">
      <div className="wrap" data-line-group>
        <p className="manifesto__lines">
          <span className="mask">
            <span data-line>Ne voyagez pas seulement</span>
          </span>
          <span className="mask">
            <span data-line>pour voir un endroit.</span>
          </span>
          <span className="mask">
            <em data-line>Découvrez-le à travers</em>
          </span>
          <span className="mask">
            <em data-line>ceux qui l’habitent.</em>
          </span>
        </p>
      </div>
    </section>
  );
}
