import { coverOf } from '../data/photos';
import { Photo } from './Photo';

export function BecomeHost() {
  return (
    <section className="section become" id="hote">
      <div className="wrap become__inner">
        <div className="become__text">
          <div className="eyebrow reveal">
            <span className="eyebrow__num">07</span>
            <span>Devenir hôte</span>
          </div>
          <h2 className="become__title reveal" data-reveal-delay="80">
            Vous n’avez pas besoin d’une chambre. Seulement d’une vie et de quelques heures.
          </h2>
          <p className="lead reveal" data-reveal-delay="130">
            Un repas du dimanche, un atelier, une partie de cartes, le marché du matin : ce qui
            vous semble banal est précisément ce que personne ne peut acheter ailleurs. Vous
            décidez de ce que vous partagez, quand, avec combien de personnes, et à quel prix.
          </p>
          <ul className="become__list">
            <li className="reveal" data-reveal-delay="170">
              Vous fixez votre prix et gardez 85 % de chaque réservation
            </li>
            <li className="reveal" data-reveal-delay="200">
              Vous acceptez ou refusez chaque demande, une par une
            </li>
            <li className="reveal" data-reveal-delay="230">
              Vous n’êtes jamais obligé de proposer un hébergement
            </li>
          </ul>
          <div className="become__cta reveal" data-reveal-delay="260">
            <a className="btn" href="#destinations">
              Proposer une expérience
            </a>
            <a className="link" href="#fonctionnement">
              Comment sont choisis les hôtes
            </a>
          </div>
        </div>

        <div className="become__photo reveal" data-reveal-delay="120">
          <Photo photo={coverOf('tunis')} ratio="4 / 5" credit="always" sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
      </div>
    </section>
  );
}
