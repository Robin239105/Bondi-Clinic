import { images } from "../../../data/images";
import Button from "../../ui/Button";

export default function ShopFeature() {
  return (
    <section className="grid bg-primary text-white md:grid-cols-2">
      <img src={images.shop} alt="Cosmeceutical skincare" loading="lazy" width="900" height="900" className="h-full min-h-[420px] w-full object-cover opacity-80" />
      <div className="flex flex-col justify-center p-8 md:p-16">
        <p className="label-text text-gold-light">Clinic selected skincare</p>
        <h2 className="mt-4 display-heading text-6xl">Aspect DR and Cosmedix.</h2>
        <p className="mt-6 leading-8 text-white/78">A considered cosmeceutical range chosen to support treatment results between visits.</p>
        <div className="mt-8"><Button href="/shop" variant="outline">Shop products</Button></div>
      </div>
    </section>
  );
}
