const POINTS = [
  { title: 'Chaque hôte est rencontré', body: 'Chez lui, avant la mise en ligne. Puis une fois par an.' },
  { title: 'L’hôte garde 85 %', body: 'Il fixe son prix. La commission est affichée avant de réserver.' },
  { title: 'Rien n’est débité avant l’accord', body: 'Annulation sans frais jusqu’à 48 heures avant.' },
  { title: 'Les langues sont dites franchement', body: 'Les meilleurs moments se passent souvent sans langue commune.' },
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
