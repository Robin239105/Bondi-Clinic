import { products } from "../../../data/products";
import ProductCard from "../../ui/ProductCard";
import SectionLabel from "../../ui/SectionLabel";
import Button from "../../ui/Button";

export default function ProductCarousel() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel>Shop</SectionLabel>
          <h2 className="display-heading mt-6 max-w-2xl text-4xl leading-tight text-primary md:text-5xl">
            Clinic Selected <span className="font-display italic text-gold">Skincare</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-primary/90">
            A considered cosmeceutical range chosen to support treatment results between visits.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/shop" variant="outline" size="lg">View All Products</Button>
        </div>
      </div>
    </section>
  );
}
