import { useEffect, useRef, useState } from 'react';

export default function ImageCollection({
  images,
  label = 'Artwork',
  showPreviewCaption = true,
}) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);
  return (
    <>
      <div className="image-collection" aria-label={label}>
        {images.map((image, index) => (
          <figure key={image.src}>
            <button
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Enlarge ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
              <span className="image-enlarge" aria-hidden="true">
                View image ↗
              </span>
            </button>
            {(image.title || image.caption) && (
              <figcaption>
                {image.title && <h2>{image.title}</h2>}
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={selected === null ? 'Image preview' : images[selected].alt}
        onCancel={(event) => {
          event.preventDefault();
          setSelected(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
      >
        {selected !== null && (
          <div className="image-dialog-content">
            <button
              type="button"
              className="dialog-close"
              onClick={() => setSelected(null)}
              autoFocus
            >
              Close <span aria-hidden="true">×</span>
            </button>
            <img src={images[selected].src} alt={images[selected].alt} />
            {showPreviewCaption && (
              <p>
                {images[selected].title ||
                  images[selected].caption ||
                  images[selected].alt}
              </p>
            )}
            {images.length > 1 && (
              <div className="image-navigation">
                <button
                  type="button"
                  onClick={() =>
                    setSelected((selected + images.length - 1) % images.length)
                  }
                >
                  ← Previous
                </button>
                <span>
                  {selected + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelected((selected + 1) % images.length)}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
