import { useEffect, useState } from 'react';
import { Arch } from './Glyph';

export function Nav({ onTheme, theme }: { onTheme: () => void; theme: 'light' | 'dark' }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 64);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${solid ? ' nav--solid' : ''}`}>
      <div className="nav__inner wrap">
        <a className="mark" href="#/" aria-label="DreamLife — accueil">
          <Arch size={22} />
          <span className="mark__word">
            Dream<span className="mark__word-2">Life</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Navigation principale">
          <a className="link" href="#destinations">
            Destinations
          </a>
          <a className="link" href="#rencontres">
            Rencontres
          </a>
          <a className="link" href="#hote">
            Devenir hôte
          </a>
        </nav>

        <div className="nav__actions">
          <button
            className="nav__theme"
            onClick={onTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
                <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
              </svg>
            )}
          </button>
          <a className="btn btn--sm" href="#destinations">
            <span>Réserver</span>
          </a>
        </div>
      </div>
    </header>
  );
}
