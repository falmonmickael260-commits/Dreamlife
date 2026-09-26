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
            Pas besoin d’une chambre. Seulement d’une vie, et de quelques heures.
          </h2>
          <p className="lead reveal" data-reveal-delay="130">
            Ce qui vous semble banal est ce que personne ne peut acheter ailleurs.
          </p>
          <ul className="become__list">
            <li className="reveal" data-reveal-delay="170">Vous fixez votre prix, vous gardez 85 %</li>
            <li className="reveal" data-reveal-delay="200">Vous acceptez ou refusez chaque demande</li>
            <li className="reveal" data-reveal-delay="230">Vous n’êtes jamais obligé d’héberger</li>
          </ul>
          <div className="become__cta reveal" data-reveal-delay="260">
            <a className="btn" href="#destinations">
              Proposer une expérience
            </a>
          </div>
        </div>

        <div className="become__photo reveal" data-reveal-delay="120">
          <Photo photo={coverOf('tunis')} ratio="4 / 5" credit="hover" sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
      </div>
    </section>
  );
}
