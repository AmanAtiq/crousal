import { useContent } from "@/hooks/useContent";
import RichTextContent from "@/components/RichTextContent";

const values = [
  {
    titleKey: "value_1_title",
    descriptionKey: "value_1_description",
    fallbackTitle: "Qualidade Artesanal",
    fallbackDescription:
      "Ingredientes selecionados e processos tradicionais que garantem o sabor autêntico em cada produto.",
    title: "Qualidade Artesanal",
    description:
      "Ingredientes selecionados e processos tradicionais que garantem o sabor autêntico em cada produto.",
    icon: (
      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 8.1875C11.625 8.625 9.25001 9.8125 7.43751 11.5625L0.437506 1.625C5.72205e-06 0.9375 0.500006 0 1.31251 0H8.25001C8.93751 0 9.62501 0.4375 9.93751 1L14.25 8.1875ZM31.25 0C32.0625 0 32.5625 0.9375 32.125 1.625L25.125 11.5625C23.3125 9.8125 20.9375 8.625 18.3125 8.1875L22.625 1C23 0.375 23.625 0 24.3125 0H31.25ZM16.3125 10C22.375 10 27.3125 14.9375 27.3125 21C27.3125 27.125 22.375 32 16.3125 32C10.1875 32 5.31251 27.125 5.31251 21C5.31251 14.9375 10.1875 10 16.3125 10ZM22.0625 19.875C22.5 19.4375 22.25 18.75 21.6875 18.625L18.375 18.1875L16.9375 15.1875C16.8125 14.9375 16.5625 14.8125 16.25 14.8125C16 14.8125 15.75 14.9375 15.625 15.1875L14.1875 18.1875L10.875 18.625C10.3125 18.75 10.0625 19.4375 10.5 19.875L12.875 22.1875L12.3125 25.4375C12.1875 26 12.8125 26.4375 13.375 26.1875L16.3125 24.625L19.1875 26.1875C19.75 26.4375 20.375 26 20.25 25.4375L19.6875 22.1875L22.0625 19.875Z" fill="#CFA459"/>
      </svg>
    ),
  },
  {
    titleKey: "value_2_title",
    descriptionKey: "value_2_description",
    fallbackTitle: "Tradição Centenária",
    fallbackDescription:
      "Décadas de experiência na arte da pastelaria, confeitaria e panificação portuguesa.",
    title: "Tradição Centenária",
    description:
      "Décadas de experiência na arte da pastelaria, confeitaria e panificação portuguesa.",
    icon: (
      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 0C24.0625 0 31 6.9375 31 15.5C31 24.0625 24.0625 31 15.5 31C6.93748 31 -2.47955e-05 24.0625 -2.47955e-05 15.5C-2.47955e-05 6.9375 6.93748 0 15.5 0ZM21.25 19.5625C21.375 19.4375 21.5 19.1875 21.5 18.9375C21.5 18.625 21.3125 18.375 21.125 18.1875L17.5 15.5V6.5C17.5 6 17 5.5 16.5 5.5H14.5C13.9375 5.5 13.5 6 13.5 6.5V16.25C13.5 17.0625 13.8125 17.75 14.4375 18.1875L18.625 21.3125C18.75 21.4375 19 21.5625 19.1875 21.5625C19.5625 21.5625 19.8125 21.375 20 21.125L21.25 19.5625Z" fill="#CFA459"/>
      </svg>
    ),
  },
  {
    titleKey: "value_3_title",
    descriptionKey: "value_3_description",
    fallbackTitle: "Compromisso Local",
    fallbackDescription:
      "Produção sustentável e apoio aos produtores locais, respeitando o ambiente e a comunidade.",
    title: "Compromisso Local",
    description:
      "Produção sustentável e apoio aos produtores locais, respeitando o ambiente e a comunidade.",
    icon: (
      <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.4375 0.8125C35.625 3.5 36.3125 6.75 36.3125 9.875C36.3125 20.625 29.375 29.4375 19.5625 30.125C14.5 30.6875 10.6875 28.0625 8.62498 25.3125C5.43748 28 4.24998 30.75 4.12498 31C3.68748 32 2.56248 32.5 1.49998 32.0625C0.499975 31.625 -2.47955e-05 30.5 0.437475 29.4375C1.93748 25.875 8.56248 16.1875 24.3125 16.1875C24.8125 16.1875 25.3125 15.75 25.3125 15.1875C25.3125 14.6875 24.8125 14.1875 24.3125 14.1875C16.125 14.1875 10.375 16.625 6.37498 19.5C6.31248 19.0625 6.31248 18.625 6.31248 18.1875C6.31248 11.5625 11.6875 6.1875 18.3125 6.1875H23.3125C27.25 6.1875 30.6875 4.125 32.625 0.75C33.0625 0 34.0625 0.0625 34.4375 0.8125Z" fill="#CFA459"/>
      </svg>
    ),
  },
];

export default function ValuesSection() {
  const content = useContent("home");

  return (
    <section id="sobre" className="w-full bg-dlm-cream-dark py-24 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-inter font-semibold text-[12px] tracking-[3.84px] uppercase text-dlm-gold mb-3">
            {content.values_label ?? "A DLM"}
          </span>
          <h2
            className="font-playfair font-semibold text-dlm-brown text-center mb-4"
            style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-1px" }}
          >
            {content.values_heading ?? "Excelência em cada detalhe"}
          </h2>
          <div className="w-20 h-0.5 bg-dlm-gold" />
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.titleKey}
              className="flex flex-col items-center text-center rounded-3xl border border-dlm-gold/40 bg-dlm-cream-dark p-10 hover:shadow-[0_12px_32px_-8px_rgba(207,164,89,0.15)] transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-dlm-gold/10 mb-8">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair font-bold text-dlm-brown text-xl mb-4">
                {content[value.titleKey] ?? value.fallbackTitle}
              </h3>

              {/* Description */}
              <RichTextContent
                className="font-inter text-base font-light leading-relaxed text-dlm-brown-mid"
                content={content[value.descriptionKey] ?? value.fallbackDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
