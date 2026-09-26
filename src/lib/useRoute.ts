import { useEffect, useState } from 'react';

export type Route = { name: 'home' } | { name: 'destination'; slug: string };

function parse(hash: string): Route {
  const m = /^#\/destination\/([a-z-]+)$/.exec(hash);
  return m ? { name: 'destination', slug: m[1] } : { name: 'home' };
}

/**
 * Routage minimal sur le fragment d'URL : pas de dépendance de plus pour deux
 * écrans, et les liens restent partageables.
 */
export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onHash = () => {
      setRoute(parse(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}

export const hrefFor = (route: Route) =>
  route.name === 'home' ? '#/' : `#/destination/${route.slug}`;
