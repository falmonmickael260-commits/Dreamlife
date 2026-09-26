const STEPS = [
  {
    n: '01',
    title: 'Choisissez une ville, puis un habitant',
    body: 'Dix destinations, une trentaine d’hôtes. On ne choisit pas un logement ni un circuit : on choisit une personne, son quartier et ce qu’elle propose de partager.',
  },
  {
    n: '02',
    title: 'Convenez d’un moment ensemble',
    body: 'Vous écrivez à votre hôte avant de réserver. Deux heures ou trois jours, un repas ou un atelier — le cadre se décide à deux, jamais par la plateforme.',
  },
  {
    n: '03',
    title: 'Vivez la journée, pas le programme',
    body: 'Le jour venu, vous suivez le rythme de quelqu’un qui vit là. Les imprévus font partie de ce que vous êtes venu chercher.',
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="fonctionnement">
      <div className="wrap">
        <div className="eyebrow reveal">
          <span className="eyebrow__num">01</span>
          <span>Comment cela fonctionne</span>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <article className="step reveal" data-reveal-delay={i * 120} key={s.n}>
              <p className="step__n">{s.n}</p>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
