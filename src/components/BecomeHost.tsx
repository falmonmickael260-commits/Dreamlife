import { coverOf } from '../data/photos';
import { Photo } from './Photo';

export function BecomeHost() {
  return (
    <section className="section become" id="hote">
      <div className="wrap become__inner">
        <div className="become__text">
          <div className="eyebrow" data-rise>
            <span className="eyebrow__num">07</span>
            <span>Devenir hôte</span>
          </div>
          <h2 className="become__title" data-line-group>
            <span className="mask">
              <span data-line>Pas besoin d’une chambre.</span>
            </span>
            <span className="mask">
              <em data-line>Seulement d’une vie.</em>
            </span>
          </h2>
          <p className="lead" data-rise data-rise-delay="120">
            Ce qui vous semble banal est ce que personne ne peut acheter ailleurs.
          </p>
          <ul className="become__list" data-rise-group>
            <li>Vous fixez votre prix, vous gardez 85 %</li>
            <li>Vous acceptez ou refusez chaque demande</li>
            <li>Vous n’êtes jamais obligé d’héberger</li>
          </ul>
          <div className="become__cta" data-rise>
            <a className="btn" href="#destinations">
              <span>Proposer une expérience</span>
            </a>
          </div>
        </div>

        <div className="become__photo">
          <Photo photo={coverOf('tunis')} ratio="4 / 5" credit="hover" sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
      </div>
    </section>
  );
}
