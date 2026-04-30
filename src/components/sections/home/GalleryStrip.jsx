import { galleryImages } from "../../../data/images";

export default function GalleryStrip() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {galleryImages.slice(0, 4).map((image) => (
        <img key={image} src={image} alt="" loading="lazy" width="600" height="720" className="h-72 w-full object-cover md:h-96" />
      ))}
    </section>
  );
}
