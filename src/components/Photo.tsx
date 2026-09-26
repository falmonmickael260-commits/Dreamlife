import type { Photo as PhotoData } from '../data/photos';

/**
 * Toute photographie de la plateforme passe par ici, et porte son crédit.
 *
 * Ce n'est pas seulement une obligation de licence : afficher le nom de
 * l'auteur et le lieu est exactement ce qui distingue une image documentaire
 * d'une image de catalogue. Le crédit fait donc partie du design.
 */
export function Photo({
  photo,
  ratio = '4 / 3',
  credit = 'hover',
  creditLink = true,
  sizes,
  priority,
  className = '',
}: {
  photo: PhotoData;
  ratio?: string;
  /** `hover` : crédit révélé au survol. `always` : crédit toujours visible. */
  credit?: 'hover' | 'always' | 'none';
  /**
   * Le crédit pointe normalement vers la page Commons. Passer `false` quand la
   * photo est déjà à l'intérieur d'un lien : un <a> dans un <a> est invalide.
   */
  creditLink?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`photo photo--${credit} ${className}`} style={{ aspectRatio: ratio }}>
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
