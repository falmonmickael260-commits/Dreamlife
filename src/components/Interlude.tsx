import { photosOf } from '../data/photos';

/**
 * Une respiration : une seule photographie, pleine largeur, et une ligne.
 * C'est le moment où la page arrête de parler et laisse regarder.
 *
 * L'image n'est pas choisie au hasard — une Balinaise montre à des visiteurs
 * comment tresser une offrande. C'est exactement ce que la plateforme propose.
 */
export function Interlude() {
  const photo = photosOf('ubud')[1];

  return (
    <section className="interlude">
      <img
        className="interlude__img"
        src={photo.src}
        srcSet={photo.srcset}
        sizes="100vw"
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <div className="interlude__scrim" aria-hidden="true" />
      <p className="interlude__line wrap">
        Personne ne peut vous vendre cela.
        <em>Quelqu’un peut vous le montrer.</em>
      </p>
      <p className="interlude__credit">
        <span>{photo.caption}</span>
        <a href={photo.page} target="_blank" rel="noreferrer noopener">
          {photo.author} · {photo.license}
        </a>
      </p>
    </section>
  );
}
