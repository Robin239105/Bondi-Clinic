import { galleryImages } from "../../../data/images";

export default function InstagramStrip() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
      {galleryImages.map((image) => (
        <img key={image} src={image} alt="" loading="lazy" width="420" height="420" className="aspect-square w-full object-cover transition-opacity hover:opacity-90" />
      ))}
    </section>
  );
}
