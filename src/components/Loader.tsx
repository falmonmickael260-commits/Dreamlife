import { useEffect, useRef, useState } from 'react';

/**
 * Le loader d'ouverture.
 *
 * Le principe est le même que celui du hero : l'arche se dessine, le point de
 * terre cuite arrive au centre — c'est quelqu'un sur le seuil — puis le mot se
 * déplie de part et d'autre, DREAM vers la gauche et LIFE vers la droite. Le
 * voile se lève enfin sur la photographie du hero, sans coupure : le fond du
 * loader est la même encre que celle du hero, donc l'œil ne voit qu'un
 * dévoilement.
 *
 * Il est passable : un clic, une touche ou la molette l'interrompent, et il ne
 * joue pas du tout si le visiteur a demandé moins d'animations.
 */
const TOTAL = 2600;

export function Loader({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (done.current) return;
      done.current = true;
      setLeaving(true);
      // La durée de la levée du voile, définie une seule fois dans le CSS.
      window.setTimeout(onDone, 760);
    };

    const timer = window.setTimeout(finish, TOTAL);
    const skip = () => finish();

    window.addEventListener('pointerdown', skip);
    window.addEventListener('keydown', skip);
    window.addEventListener('wheel', skip, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('wheel', skip);
    };
  }, [onDone]);

  return (
    <div className={`loader${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="loader__stage">
        <svg className="loader__arch" viewBox="0 0 120 108" fill="none" aria-hidden="true">
          {/* L'arche, dessinée d'un seul trait continu. */}
          <path
            className="loader__arch-path"
            d="M26 96V54a34 34 0 0 1 68 0v42"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle className="loader__dot" cx="60" cy="62" r="8" />
        </svg>

        <p className="loader__word">
          <span className="loader__word-1">Dream</span>
          <span className="loader__word-2">Life</span>
        </p>

        <span className="loader__rule" aria-hidden="true" />

        <p className="loader__signature">Découvrez le monde à travers ceux qui l’habitent.</p>
      </div>

      <span className="sr-only">Chargement de DreamLife</span>
    </div>
  );
}
