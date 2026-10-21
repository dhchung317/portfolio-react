import artwork from '../data/gallery.json';
import ImageCollection from '../components/ImageCollection';
export default function Gallery({ images = artwork }) {
  return (
    <section className="page-shell gallery-page">
      <header className="page-heading">
        <p className="eyebrow">Away from the keyboard</p>
        <h1>Art gallery</h1>
        <p>A space for drawings, studies, and things made by hand.</p>
      </header>
      {images.length ? (
        <ImageCollection
          images={images}
          label="Art gallery"
          showPreviewCaption={false}
        />
      ) : (
        <div className="gallery-empty">
          <span aria-hidden="true" className="gallery-mark">
            ✳
          </span>
          <h2>A little space for art.</h2>
          <p>The collection is on its way. Check back soon.</p>
        </div>
      )}
    </section>
  );
}
