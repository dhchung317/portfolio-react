import { useLayoutEffect, useRef } from 'react';
import ImageCollection from './ImageCollection';
export default function ProjectTile({ tile, expanded, onToggle }) {
  const card = useRef(null);
  useLayoutEffect(() => {
    if (!expanded) return;
    const reducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    card.current.scrollIntoView({
      block: 'start',
      behavior: reducedMotion ? 'instant' : 'smooth',
    });
  }, [expanded]);
  const {
    title,
    category,
    image,
    imageAlt,
    summary,
    description,
    details = [],
    images = [],
    imageGroups = [],
    imageNote,
    githubLink,
    demoLink,
    demoLabel,
  } = tile;
  return (
    <details ref={card} className="project-tile" open={expanded}>
      <summary
        className="project-summary"
        onClick={(event) => {
          event.preventDefault();
          onToggle();
        }}
      >
        <div className="project-cover">
          <img src={image} alt={imageAlt || title} loading="lazy" />
        </div>
        <div className="project-intro">
          <p className="eyebrow">{category}</p>
          <h2>{title}</h2>
          <p>{summary}</p>
          <span className="project-toggle">
            <span className="when-closed">Explore project</span>
            <span className="when-open visually-hidden">Close project</span>
            <span className="toggle-symbol" aria-hidden="true">
              +
            </span>
          </span>
        </div>
      </summary>
      <div className="project-details">
        <p>{description}</p>
        {details.length > 0 && (
          <ul>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        {(demoLink || githubLink) && (
          <div className="project-links">
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noreferrer">
                {demoLabel || 'Visit project'} <span aria-hidden="true">↗</span>
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
        {imageNote && <p className="image-note">{imageNote}</p>}
        {imageGroups.map((group) => (
          <section className="project-image-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.description && (
              <p className="image-group-description">{group.description}</p>
            )}
            <ImageCollection
              images={group.images}
              label={`${title}: ${group.title}`}
            />
          </section>
        ))}
        {images.length > 0 && (
          <ImageCollection images={images} label={`${title} screenshots`} />
        )}
      </div>
    </details>
  );
}
