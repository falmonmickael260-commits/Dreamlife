import { useCallback, useEffect, useState } from 'react';
import { BecomeHost } from './components/BecomeHost';
import { DestinationGrid } from './components/DestinationGrid';
import { DestinationPage } from './components/DestinationPage';
import { ExperienceSheet } from './components/ExperienceSheet';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Kinds } from './components/Kinds';
import { Loader } from './components/Loader';
import { Manifesto } from './components/Manifesto';
import { Nav } from './components/Nav';
import { Selection } from './components/Selection';
import { StayOptional } from './components/StayOptional';
import { Trust } from './components/Trust';
import type { Experience, Host } from './data/hosts';
import { useReveal } from './lib/useReveal';
import { useRoute } from './lib/useRoute';

export function App() {
  const route = useRoute();
  const [picked, setPicked] = useState<{ host: Host; exp: Experience } | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  );

  // Le loader ne s'ouvre que sur l'accueil : arriver par un lien de
  // destination doit donner la page tout de suite. Il ne joue pas non plus si
  // le visiteur a demandé moins d'animations.
  const [booting, setBooting] = useState(
    () =>
      route.name === 'home' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!booting) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [booting]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Le routage est un simple changement de fragment : les nouveaux `.reveal`
  // doivent être réobservés à chaque écran.
  useReveal([route.name, route.name === 'destination' ? route.slug : '']);

  const onPick = useCallback((host: Host, exp: Experience) => setPicked({ host, exp }), []);

  return (
    <>
      {booting && <Loader onDone={() => setBooting(false)} />}

      <Nav theme={theme} onTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />

      {route.name === 'destination' ? (
        <DestinationPage slug={route.slug} onPick={onPick} />
      ) : (
        <main>
          <Hero />
          <Manifesto />
          <HowItWorks />
          <Kinds />
          <StayOptional />
          <DestinationGrid />
          <Selection onPick={onPick} />
          <Trust />
          <BecomeHost />
        </main>
      )}

      <Footer />

      {picked && (
        <ExperienceSheet host={picked.host} exp={picked.exp} onClose={() => setPicked(null)} />
      )}
    </>
  );
}
