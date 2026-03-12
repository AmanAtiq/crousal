import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import RichTextContent from "@/components/RichTextContent";
import { useContent } from "@/hooks/useContent";

export const HeroIntroSection = () => {
  const c = useContent("delicias");
  const heroVisual = c.hero_visual_image ?? "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1200&q=80";
  const heroHeading = normalizeDeliciasHeading(c.hero_heading);
  const heroSubheading = normalizeDeliciasSubheading(c.hero_subheading);
  const heroQuote = normalizeDeliciasQuote(c.hero_quote);
  const heroDescription = normalizeDeliciasDescription(c.hero_description);

  return (
    <section className="relative w-full border-b-4 border-[#e97451] bg-[linear-gradient(127deg,rgba(252,233,224,1)_0%,rgba(255,217,204,1)_100%)] py-20">
      <div className="pointer-events-none absolute right-[169px] top-[190px] flex h-[358px] w-[117px] rotate-[15deg] items-center text-[320px] leading-[480px] text-[#2a2a2a] opacity-10">
        🥐
      </div>

      <div className="mx-auto max-w-[1360px] px-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-[14.9px]">
              <h1 className="font-inter whitespace-nowrap text-[61px] leading-[66.88px] tracking-[-0.02em] text-[#8f3e2b]">
                {heroHeading}
              </h1>
              <h2 className="font-inter whitespace-nowrap text-[32px] font-bold leading-[35.2px] tracking-[0.1em] text-[#e97451]">
                {heroSubheading}
              </h2>
            </div>

            <p className="flex h-[33px] w-[351.47px] flex-col justify-center font-inter text-[26.8px] italic font-light leading-[43.2px] text-[#B1553A]">
              {heroQuote}
            </p>

            <RichTextContent
              className="max-w-[589px] font-inter text-[19px] leading-[30.72px] text-[#5e3a2c]"
              content={heroDescription}
            />

            <Button className="h-14 w-fit rounded-[60px] bg-[#e97451] px-12 font-inter text-base font-bold tracking-[0.1em] text-white shadow-[0px_15px_25px_-10px_#e9745180] hover:bg-[#d66642]">
              {c.hero_cta ?? "VER MENU COMPLETO"}
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="h-[276px] w-full max-w-[530px] overflow-hidden rounded-[120px_20px_120px_20px] border-2 border-dashed border-[#e97451] bg-[#fff0e699]">
              <img src={heroVisual} alt="Delicias hero visual" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function normalizeDeliciasHeading(value?: string) {
  if (!value) return "Delícias da Madalena";
  if (value.trim().toLowerCase() === "delicias da madalena") return "Delícias da Madalena";
  return value;
}

function normalizeDeliciasSubheading(value?: string) {
  if (!value) return "TRADIÇÃO & FUTURO";
  if (value.trim().toUpperCase() === "TRADICAO & FUTURO") return "TRADIÇÃO & FUTURO";
  return value;
}

function normalizeDeliciasQuote(value?: string) {
  const fallback = "Tradition meets the future.";
  const base = (value ?? fallback).trim();

  if ((base.startsWith('"') && base.endsWith('"')) || (base.startsWith("'") && base.endsWith("'"))) {
    return base.slice(1, -1).trim();
  }

  return base;
}

function normalizeDeliciasDescription(value?: string) {
  if (!value) {
    return "Três localizações: Patriota e duas lojas no Aeroporto Internacional. O sabor acolhedor de Luanda, agora com a conveniência grab-and-go para viajantes e o ambiente aconchegante para os locais.";
  }

  return value
    .replace("Tres localizacoes", "Três localizações")
    .replace("conveniencia", "conveniência");
}
