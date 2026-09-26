const STEPS = [
  { n: '01', title: 'Choisissez un habitant', body: 'Pas un logement, pas un circuit. Une personne.' },
  { n: '02', title: 'Écrivez-lui', body: 'Le cadre se décide à deux, jamais par la plateforme.' },
  { n: '03', title: 'Vivez sa journée', body: 'Vous suivez son rythme. Les imprévus font le voyage.' },
];

export function HowItWorks() {
  return (
    <section className="section" id="fonctionnement">
      <div className="wrap">
        <div className="eyebrow" data-rise>
          <span className="eyebrow__num">01</span>
          <span>Comment cela fonctionne</span>
        </div>

        <div className="steps" data-rise-group>
          {STEPS.map((s) => (
            <article className="step" key={s.n}>
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
