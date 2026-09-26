import { useEffect, useRef, useState } from 'react';
import type { Experience, Host } from '../data/hosts';
import { DESTINATION_BY_SLUG } from '../data/destinations';
import { KIND_BY_ID } from '../data/kinds';
import { duration, euros } from '../lib/format';
import { Glyph } from './Glyph';
import { Monogram } from './Monogram';

type Props = { host: Host; exp: Experience; onClose: () => void };

/**
 * Panneau de réservation. C'est une demande, pas un achat : sur DreamLife on
 * écrit d'abord à quelqu'un, et l'hôte accepte ou non. Aucun paiement n'est
 * demandé ici — le prototype s'arrête à l'envoi de la demande.
 */
export function ExperienceSheet({ host, exp, onClose }: Props) {
  const [sent, setSent] = useState(false);
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const panel = useRef<HTMLDivElement>(null);
  const city = DESTINATION_BY_SLUG[host.destination];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    panel.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const total = exp.price * people;

  return (
    <div className="sheet" role="dialog" aria-modal="true" aria-label={exp.title}>
      <button className="sheet__scrim" onClick={onClose} aria-label="Fermer" />

      <div className="sheet__panel" ref={panel} tabIndex={-1}>
        <button className="sheet__close" onClick={onClose} aria-label="Fermer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        {sent ? (
          <div className="sheet__done">
            <div className="sheet__done-mark">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m4 13 5 5L20 7" />
              </svg>
            </div>
            <h2 className="sheet__done-title">Votre demande est partie chez {host.firstName}.</h2>
            <p className="sheet__done-body">
              {host.firstName} répond en général sous vingt-quatre heures. Rien n’est débité
              avant son accord.
            </p>
            <dl className="sheet__recap">
              <div>
                <dt>Expérience</dt>
                <dd>{exp.title}</dd>
              </div>
              <div>
                <dt>Ville</dt>
                <dd>
                  {city.city}, {city.country}
                </dd>
              </div>
              <div>
                <dt>Date souhaitée</dt>
                <dd>{date || 'à convenir ensemble'}</dd>
              </div>
              <div>
                <dt>Personnes</dt>
                <dd>{people}</dd>
              </div>
              <div>
                <dt>Estimation</dt>
                <dd>{euros(total)}</dd>
              </div>
            </dl>
            <p className="sheet__proto">
              Prototype — aucune demande n’est envoyée, aucun paiement n’est collecté.
            </p>
            <button className="btn" onClick={onClose}>
              Continuer à explorer
            </button>
          </div>
        ) : (
          <>
            <p className="sheet__kind">
              <Glyph id={exp.kind} size={18} />
              <span>{KIND_BY_ID[exp.kind].label}</span>
            </p>
            <h2 className="sheet__title">{exp.title}</h2>
            <p className="sheet__where">
              {city.city}, {city.country} · {host.area}
            </p>

            <p className="sheet__blurb">{exp.blurb}</p>

            <div className="sheet__facts">
              <div>
                <dt>Durée</dt>
                <dd>{duration(exp.hours)}</dd>
              </div>
              <div>
                <dt>Par personne</dt>
                <dd>{euros(exp.price)}</dd>
              </div>
              <div>
                <dt>Au maximum</dt>
                <dd>{exp.max} personnes</dd>
              </div>
              <div>
                <dt>Langues</dt>
                <dd>{host.languages.join(', ')}</dd>
              </div>
            </div>

            <h3 className="sheet__sub">Compris dans le prix</h3>
            <ul className="sheet__includes">
              {exp.includes.map((inc) => (
                <li key={inc}>{inc}</li>
              ))}
            </ul>

            <div className="sheet__host">
              <Monogram name={host.firstName} size={46} />
              <div>
                <p className="sheet__host-name">
                  Chez {host.firstName} — {host.job.toLowerCase()}
                </p>
                <p className="sheet__host-quote">« {host.quote} »</p>
              </div>
            </div>

            <form
              className="sheet__form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="sheet__fields">
                <label>
                  <span>Date souhaitée</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().slice(0, 10)}
                  />
                </label>
                <label>
                  <span>Personnes</span>
                  <select value={people} onChange={(e) => setPeople(Number(e.target.value))}>
                    {Array.from({ length: exp.max }, (_, n) => n + 1).map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="sheet__note">
                <span>Un mot pour {host.firstName}</span>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={`Dites-lui qui vous êtes et pourquoi cette expérience vous attire. ${host.firstName} lit tout.`}
                />
              </label>

              <div className="sheet__submit">
                <p className="sheet__total">
                  <span>{euros(total)}</span>
                  <small>
                    {people} × {euros(exp.price)} · rien n’est débité maintenant
                  </small>
                </p>
                <button className="btn" type="submit">
                  Envoyer la demande
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
