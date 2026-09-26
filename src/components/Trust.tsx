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
        <div className="eyebrow" data-rise>
          <span className="eyebrow__num">06</span>
          <span>Ce qui tient la plateforme</span>
        </div>
        <h2 className="trust__title" data-line-group>
          <span className="mask">
            <span data-line>Une rencontre demande</span>
          </span>
          <span className="mask">
            <em data-line>plus de garanties qu’une chambre</em>
          </span>
        </h2>
        <ul className="trust__grid" data-rise-group>
          {POINTS.map((p) => (
            <li className="trust__item" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
