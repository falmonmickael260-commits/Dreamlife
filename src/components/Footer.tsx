import { DESTINATIONS } from '../data/destinations';
import { Arch } from './Glyph';

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brand">
            <span className="mark mark--foot">
              <Arch size={26} dot="var(--clay)" />
              <span className="mark__word">
                Dream<span className="mark__word-2">Life</span>
              </span>
            </span>
            <p className="foot__signature">Découvrez le monde à travers ceux qui l’habitent.</p>
          </div>

          <nav className="foot__cols" aria-label="Pied de page">
            <div>
              <h3>Destinations</h3>
              <ul>
                {DESTINATIONS.map((d) => (
                  <li key={d.slug}>
                    <a className="link" href={`#/destination/${d.slug}`}>
                      {d.city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>La plateforme</h3>
              <ul>
                <li>
                  <a className="link" href="#fonctionnement">
                    Comment cela fonctionne
                  </a>
                </li>
                <li>
                  <a className="link" href="#rencontres">
                    Formes de rencontre
                  </a>
                </li>
                <li>
                  <a className="link" href="#hote">
                    Devenir hôte
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="foot__legal">
          <p>
            <strong>Prototype.</strong> Hôtes et expériences sont fictifs. Aucun paiement n’est
            collecté.
          </p>
          <p>
            Photographies documentaires : Wikimedia Commons, licences libres, auteur affiché au
            survol. Elles montrent des lieux réels, jamais les hôtes de ce prototype.
          </p>
          <p className="foot__copy">© {new Date().getFullYear()} DreamLife</p>
        </div>
      </div>
    </footer>
  );
}
