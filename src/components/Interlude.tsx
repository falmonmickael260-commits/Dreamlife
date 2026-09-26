import { photosOf } from '../data/photos';

/**
 * Une respiration : une seule photographie, pleine largeur, en dérive lente, et
 * une ligne. C'est le moment où la page arrête de parler et laisse regarder.
 *
 * L'image n'est pas choisie au hasard — une Balinaise montre à des visiteurs
 * comment tresser une offrande. C'est exactement ce que la plateforme propose.
 */
export function Interlude() {
  const photo = photosOf('ubud')[1];

  return (
    <section className="interlude">
      <div className="interlude__stage">
        <img
          className="interlude__img"
          data-parallax="9"
          src={photo.src}
          srcSet={photo.srcset}
          sizes="100vw"
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <div className="interlude__scrim" aria-hidden="true" />
      </div>

      <p className="interlude__line wrap" data-line-group>
        <span className="mask">
          <span data-line>Personne ne peut vous vendre cela.</span>
        </span>
        <span className="mask">
          <em data-line>Quelqu’un peut vous le montrer.</em>
        </span>
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
