import { useState } from 'react';
import { DESTINATIONS, REGIONS, type Region } from '../data/destinations';
import { HOSTS } from '../data/hosts';
import { coverOf } from '../data/photos';
import { euros } from '../lib/format';
import { Photo } from './Photo';

export function DestinationGrid() {
  const [region, setRegion] = useState<Region | 'Toutes'>('Toutes');
  const shown = DESTINATIONS.filter((d) => region === 'Toutes' || d.region === region);

  return (
    <section className="section dests" id="destinations">
      <div className="wrap">
        <div className="dests__head">
          <div>
            <div className="eyebrow reveal">
              <span className="eyebrow__num">04</span>
              <span>Dix destinations pour commencer</span>
            </div>
            <h2 className="dests__title reveal" data-reveal-delay="80">
              Quatre continents,
              <br />
              <em>trente habitants</em>
            </h2>
          </div>

          <div className="filters reveal" data-reveal-delay="140" role="group" aria-label="Filtrer par région">
            {(['Toutes', ...REGIONS] as const).map((r) => (
              <button
                key={r}
                className={`chip${region === r ? ' is-on' : ''}`}
                onClick={() => setRegion(r)}
                aria-pressed={region === r}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <ul className="dests__grid">
          {shown.map((d, i) => {
            const hosts = HOSTS.filter((h) => h.destination === d.slug).length;
            return (
              <li className="dest reveal" data-reveal-delay={(i % 3) * 90} key={d.slug}>
                <a className="dest__link" href={`#/destination/${d.slug}`}>
                  <Photo
                    photo={coverOf(d.slug)}
                    ratio="5 / 4"
                    credit="hover"
                    creditLink={false}
                    className="dest__photo"
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <div className="dest__body">
                    <p className="dest__country">{d.country}</p>
                    <h3 className="dest__city">{d.city}</h3>
                    <p className="dest__foot">
                      <span>
                        {hosts} hôtes · dès {euros(d.from)}
                      </span>
                      <span className="dest__arrow" aria-hidden="true">
                        →
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
