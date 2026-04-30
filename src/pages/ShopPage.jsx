import ShopHero from "../components/sections/shop/ShopHero";
import BrandShowcase from "../components/sections/shop/BrandShowcase";
import ProductGrid from "../components/sections/shop/ProductGrid";
import PaymentMethods from "../components/sections/shared/PaymentMethods";

import SEO from "../components/layout/SEO";

export default function ShopPage() {
  return (
    <>
      <SEO 
        title="Shop Clinical Skincare"
        description="Shop our curated range of medical-grade skincare products. Advanced clinical solutions for your at-home skin regimen, delivered Australia-wide."
        url="/shop"
        keywords="buy clinical skincare bondi, medical grade skincare online, best skincare products australia"
      />
      <ShopHero />
      <BrandShowcase />
      <ProductGrid />
      <PaymentMethods />
    </>
  );
}
