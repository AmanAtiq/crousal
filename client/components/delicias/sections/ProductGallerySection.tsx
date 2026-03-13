import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";

const TagLabelIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0 7.90625V1.5C0 0.6875 0.65625 0 1.5 0H7.875C8.28125 0 8.65625 0.1875 8.9375 0.46875L15.5312 7.0625C16.125 7.65625 16.125 8.625 15.5312 9.1875L9.15625 15.5625C8.59375 16.1562 7.625 16.1562 7.03125 15.5625L0.4375 8.96875C0.15625 8.6875 0 8.3125 0 7.90625ZM3.5 2C2.65625 2 2 2.6875 2 3.5C2 4.34375 2.65625 5 3.5 5C4.3125 5 5 4.34375 5 3.5C5 2.6875 4.3125 2 3.5 2Z" fill="#E97451"/>
  </svg>
);

const filterButtons = [
  { label: "TODOS", active: true },
  { label: "#PASTELARIA", active: false },
  { label: "#BOLOS", active: false },
  { label: "#SALGADOS", active: false },
  { label: "#INTERIOR", active: false },
];

const galleryItems = [
  { title: "Croissants", category: "#Pastelaria", image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=1200&q=80", large: false },
  { title: "Bolo de Aniversario", category: "#Bolos", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80", large: true },
  { title: "Cafe & Pasteis", category: "#Cafe", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80", large: false },
  { title: "Pao Artesanal", category: "#Paes", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80", large: false },
  { title: "Tortas Doces", category: "#Tortas", image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=1200&q=80", large: false },
  { title: "Loja Patriota", category: "#Interior", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80", large: false },
  { title: "Doces Tipicos", category: "#Pastelaria", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=1200&q=80", large: false },
  { title: "Cupcakes", category: "#Bolos", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=80", large: false },
];

export const ProductGallerySection = () => {
  const content = useContent("delicias");
  const filters = parseContentJson(content.gallery_filters_json, filterButtons.map((button) => button.label));
  const parsedItems = parseContentJson(content.gallery_items_json, galleryItems);
  const items = parsedItems.map((item, index) => ({
    ...item,
    title: item.title?.trim() || galleryItems[index]?.title || "Doces Típicos",
    category: item.category?.trim() || galleryItems[index]?.category || "#Pastelaria",
  }));

  return (
    <section className="relative w-full bg-[#fff9f5] py-8 md:py-[70px]">
      <div className="mx-auto px-4 md:px-10">
        <header className="mb-8 md:mb-[54px]">
          <h2 className="mb-2.5 text-[24px] md:text-[40px] leading-[32px] md:leading-[60px] tracking-[-0.8px] text-[#b14e33]">{content.gallery_title ?? "Galeria de sabores"}</h2>
          <div className="h-[3px] w-[70px] bg-[#e97451] opacity-40" />
        </header>

        <div className="mb-8 md:mb-16 flex flex-wrap gap-2 md:gap-[6px]">
          {filters.map((label, index) => (
            <Button
              key={label}
              variant={index === 0 ? "default" : "outline"}
              className={`h-auto rounded-[40px] px-4 md:px-6 py-2 text-xs md:text-sm font-bold ${
                index === 0
                  ? "border-[#e97451] bg-[#e97451] text-white hover:bg-[#e97451]/90"
                  : "border-[#e97451] bg-transparent text-[#e97451] hover:bg-[#e97451]/10"
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const isLargeCard = item.large ?? index === 1;

            return (
              <Card
                key={`${item.title}-${index}`}
                className={`overflow-hidden rounded-[18px] md:rounded-[24px] border-none bg-[#F5E3DB] shadow-[0_10px_20px_-5px_rgba(233,116,81,0.20)`}
              >
                <CardContent className="flex h-full flex-col p-0">
                  <div className="flex-1">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex h-[40px] md:h-[54px] items-center gap-2 md:gap-[5.6px] bg-white px-3 md:px-[15px]">
                    <span className="shrink-0">
                      <TagLabelIcon />
                    </span>
                    <span className="text-xs md:text-base leading-5 md:leading-6 text-[#5e3a2c]">
                      {item.title} • {item.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
