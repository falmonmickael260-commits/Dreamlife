const POINTS = [
  {
    title: 'Chaque hôte est rencontré',
    body: 'Pas de validation automatique : un membre de l’équipe locale rencontre l’hôte chez lui avant la mise en ligne, et revient une fois par an.',
  },
  {
    title: 'Le prix va à l’habitant',
    body: 'L’hôte fixe son prix et en garde 85 %. La commission de la plateforme est affichée sur chaque fiche, avant la réservation.',
  },
  {
    title: 'Rien n’est débité avant l’accord',
    body: 'Vous écrivez, l’hôte répond, et le paiement n’intervient qu’ensuite. Annulation sans frais jusqu’à quarante-huit heures avant.',
  },
  {
    title: 'Les langues sont dites franchement',
    body: 'Si votre hôte parle trois mots d’anglais, c’est écrit. Beaucoup des meilleurs moments se passent sans langue commune.',
  },
];

export function Trust() {
  return (
    <section className="section trust">
      <div className="wrap">
        <div className="eyebrow reveal">
          <span className="eyebrow__num">06</span>
          <span>Ce qui tient la plateforme</span>
        </div>
        <h2 className="trust__title reveal" data-reveal-delay="80">
          Une rencontre demande plus de garanties qu’une chambre
        </h2>
        <ul className="trust__grid">
          {POINTS.map((p, i) => (
            <li className="trust__item reveal" data-reveal-delay={(i % 2) * 90} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
