import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/*
 * Toute la chorégraphie du site tient ici, pilotée par des attributs de
 * données posés dans le balisage. Les composants restent donc lisibles, et il
 * n'existe qu'un seul endroit où régler le tempo.
 *
 * Règle tenue partout : on anime DEPUIS un état masqué (`gsap.from`). Le
 * contenu est donc visible sans JavaScript, et aucune règle `opacity: 0` ne
 * peut rester collée si une animation échoue.
 *
 *   data-line          une ligne de titre, elle monte depuis son masque
 *   data-rise          un bloc, il monte de quelques pixels en apparaissant
 *   data-rise-group    ses enfants montent en cascade
 *   data-wipe          un cadre photo, il se dévoile de bas en haut
 *   data-parallax      une image de fond, elle dérive lentement au scroll
 *   data-count         un nombre, il se compte à l'entrée dans l'écran
 *   data-marquee       une bande de texte en défilement continu
 */

const REVEAL = { start: 'top 88%', once: true } as const;

function lines(scope: HTMLElement | Document, immediate: boolean) {
  const groups = new Map<Element, HTMLElement[]>();
  scope.querySelectorAll<HTMLElement>('[data-line]').forEach((el) => {
    const key = el.closest('[data-line-group]') ?? el.parentElement ?? el;
    groups.set(key, [...(groups.get(key) ?? []), el]);
  });

  groups.forEach((els, key) => {
    gsap.from(els, {
      yPercent: 112,
      duration: 1.25,
      ease: 'expo.out',
      stagger: 0.085,
      ...(immediate
        ? { delay: 0.15 }
        : { scrollTrigger: { trigger: key as Element, ...REVEAL } }),
    });
  });
}

function rises(scope: HTMLElement | Document) {
  scope.querySelectorAll<HTMLElement>('[data-rise]').forEach((el) => {
    gsap.from(el, {
      y: 26,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      delay: Number(el.dataset.riseDelay ?? 0) / 1000,
      scrollTrigger: { trigger: el, ...REVEAL },
    });
  });

  // Huit enfants au maximum : au-delà, les derniers paraissent en retard.
  scope.querySelectorAll<HTMLElement>('[data-rise-group]').forEach((el) => {
    gsap.from(Array.from(el.children).slice(0, 12), {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.07,
      scrollTrigger: { trigger: el, ...REVEAL },
    });
  });
}

function wipes(scope: HTMLElement | Document) {
  scope.querySelectorAll<HTMLElement>('[data-wipe]').forEach((frame) => {
    const image = frame.querySelector('img');
    const tl = gsap.timeline({ scrollTrigger: { trigger: frame, ...REVEAL } });
    tl.from(frame, {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 1.35,
      ease: 'expo.out',
    });
    if (image) tl.from(image, { scale: 1.16, duration: 1.8, ease: 'expo.out' }, 0);
  });
}

function parallax(scope: HTMLElement | Document) {
  scope.querySelectorAll<HTMLElement>('[data-parallax]').forEach((layer) => {
    const amount = Number(layer.dataset.parallax || 8);
    gsap.fromTo(
      layer,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: {
          trigger: layer.parentElement ?? layer,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      },
    );
  });
}

function counts(scope: HTMLElement | Document) {
  scope.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count);
    if (!Number.isFinite(to)) return;
    const holder = { n: 0 };
    gsap.to(holder, {
      n: to,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = String(Math.round(holder.n));
      },
      scrollTrigger: { trigger: el, ...REVEAL },
    });
  });
}

function marquees(scope: HTMLElement | Document) {
  scope.querySelectorAll<HTMLElement>('[data-marquee]').forEach((track) => {
    // La bande contient deux copies identiques : décaler de la moitié boucle
    // donc sans raccord visible.
    gsap.to(track, {
      xPercent: -50,
      duration: Number(track.dataset.marquee || 46),
      ease: 'none',
      repeat: -1,
    });
  });
}

/**
 * Monte la chorégraphie pour l'écran courant. `deps` doit changer à chaque
 * changement de route : useGSAP défait alors tout avant de reconstruire.
 */
export function useSiteMotion(deps: unknown[]) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        lines(document, true);
        rises(document);
        wipes(document);
        parallax(document);
        counts(document);
        marquees(document);
      });

      // Moins d'animations : on ne joue que la bande de villes, qui porte de
      // l'information, et encore, deux fois plus lentement.
      mm.add('(prefers-reduced-motion: reduce)', () => {
        document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
          el.textContent = el.dataset.count ?? el.textContent;
        });
      });

      return () => mm.revert();
    },
    { dependencies: deps, revertOnUpdate: true },
  );
}

/** Le fondu d'entrée d'un écran, joué à chaque changement de route. */
export function useScreenIn(key: string) {
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('[data-screen]', { opacity: 0, duration: 0.7, ease: 'power2.out' });
    },
    { dependencies: [key] },
  );
}
