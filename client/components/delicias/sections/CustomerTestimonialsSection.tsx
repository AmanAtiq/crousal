import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";

const TestimonialQuoteIcon = () => (
  <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path opacity="0.4" d="M29 14C30.625 14 32 15.375 32 17V25C32 26.6875 30.625 28 29 28H21C19.3125 28 18 26.6875 18 25V10C18 4.5 22.4375 0 28 0H28.5C29.3125 0 30 0.6875 30 1.5V4.5C30 5.375 29.3125 6 28.5 6H28C25.75 6 24 7.8125 24 10V14H29ZM11 14C12.625 14 14 15.375 14 17V25C14 26.6875 12.625 28 11 28H3C1.3125 28 0 26.6875 0 25V10C0 4.5 4.4375 0 10 0H10.5C11.3125 0 12 0.6875 12 1.5V4.5C12 5.375 11.3125 6 10.5 6H10C7.75 6 6 7.8125 6 10V14H11Z" fill="#E97451"/>
  </svg>
);

const testimonials = [
  {
    quote:
      '"O melhor pastel de nata de Luanda! Sempre que passo no aeroporto trago uma caixa para a familia. O atendimento e rapido e o cafe e excelente."',
    initials: "AM",
    name: "Ana Mendes",
    description: "cliente frequente • 12 avaliacoes",
  },
  {
    quote:
      '"Ambiente acolhedor no Patriota, parece uma padaria europeia. O atendimento e incrivel e os bolos sao sempre fresquinhos. Recomendo o pastel de Belem!"',
    initials: "JL",
    name: "Joao Lemos",
    description: "cliente desde 2020",
  },
  {
    quote:
      '"Encomendei um bolo para o aniversario da minha filha - perfeito, lindo e delicioso! Toda a familia adorou. A equipa e muito profissional e atenciosa."',
    initials: "CS",
    name: "Carla Santos",
    description: "cliente Atelie & Delicias",
  },
];

export const CustomerTestimonialsSection = () => {
  const content = useContent("delicias");
  const items = parseContentJson(content.testimonials_json, testimonials);

  return (
    <section className="relative w-full bg-white px-10 py-20">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-[64px]">
          <h2 className="mb-2.5 text-[40px] leading-[60px] tracking-[-0.8px] text-[#b14e33]">{content.testimonials_title ?? "O que dizem os nossos clientes"}</h2>
          <div className="h-[3px] w-[70px] bg-[#e97451] opacity-40" />
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((testimonial) => (
            <Card key={testimonial.name} className="overflow-visible rounded-[30px] border-[#ffd9cc] bg-[#fffaf5] shadow-[0px_15px_25px_-8px_#e9745133]">
              <CardContent className="relative p-9">
                <div className="mb-[53px]">
                  <div className="mb-4">
                    <TestimonialQuoteIcon />
                  </div>
                  <p className="text-[17.6px] leading-[28.2px] text-[#3f2e26]">{testimonial.quote}</p>
                </div>

                <div className="flex items-center gap-[15px]">
                  <Avatar className="h-[50px] w-[50px] bg-[#e97451]">
                    <AvatarFallback className="bg-[#e97451] text-base font-bold text-white">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-base font-bold leading-6 text-[#b14e33]">{testimonial.name}</div>
                    <div className="text-[14.4px] leading-[21.6px] text-[#7a5a4a]">{testimonial.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="h-3.5 w-3.5 rounded-[7.2px] bg-[#e97451]" />
          <div className="h-3 w-3 rounded-md bg-[#ffd7cc]" />
          <div className="h-3 w-3 rounded-md bg-[#ffd7cc]" />
          <div className="h-3 w-3 rounded-md bg-[#ffd7cc]" />
        </div>
      </div>
    </section>
  );
};
