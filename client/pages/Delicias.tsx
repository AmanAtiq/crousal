import { CustomerTestimonialsSection } from "@/components/delicias/sections/CustomerTestimonialsSection";
import { FooterSection } from "@/components/delicias/sections/FooterSection";
import { HeroIntroSection } from "@/components/delicias/sections/HeroIntroSection";
import { NavigationHeaderSection } from "@/components/delicias/sections/NavigationHeaderSection";
import { ProductGallerySection } from "@/components/delicias/sections/ProductGallerySection";
import { StoreLocationsSection } from "@/components/delicias/sections/StoreLocationsSection";

export default function Delicias() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[linear-gradient(0deg,rgba(254,250,247,1)_0%,rgba(254,250,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <NavigationHeaderSection />
      <HeroIntroSection />
      <StoreLocationsSection />
      <ProductGallerySection />
      <CustomerTestimonialsSection />
      <FooterSection />
    </div>
  );
}
