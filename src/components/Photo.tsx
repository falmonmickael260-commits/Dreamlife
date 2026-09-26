import type { Photo as PhotoData } from '../data/photos';

/**
 * Toute photographie passe par ici, et porte son crédit.
 *
 * Ce n'est pas seulement une obligation de licence : afficher le lieu et
 * l'auteur est exactement ce qui distingue une image documentaire d'une image
 * de catalogue. Le crédit fait donc partie du dessin.
 *
 * Le cadre porte `data-wipe` : il se dévoile de bas en haut à l'entrée dans
 * l'écran, et l'image se décompresse en même temps (cf. lib/motion.ts).
 */
export function Photo({
  photo,
  ratio = '4 / 3',
  credit = 'hover',
  creditLink = true,
  sizes,
  priority,
  wipe = true,
  className = '',
}: {
  photo: PhotoData;
  ratio?: string;
  credit?: 'hover' | 'always' | 'none';
  /** `false` quand la photo est déjà dans un lien : un <a> dans un <a> est invalide. */
  creditLink?: boolean;
  sizes?: string;
  priority?: boolean;
  wipe?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`photo photo--${credit} ${className}`}
      style={{ aspectRatio: ratio }}
      {...(wipe ? { 'data-wipe': '' } : {})}
    >
      <img
        src={photo.src}
        srcSet={photo.srcset}
        alt={photo.alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        draggable={false}
      />
      {credit !== 'none' && (
        <figcaption className="photo__credit">
          <span className="photo__place">{photo.caption}</span>
          {creditLink ? (
            <a href={photo.page} target="_blank" rel="noreferrer noopener">
              {photo.author} · {photo.license}
            </a>
          ) : (
            <span className="photo__author">
              {photo.author} · {photo.license}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
