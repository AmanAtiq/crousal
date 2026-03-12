import { useState, useEffect, useCallback } from "react";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";

const fallbackTestimonials = [
  {
    id: 1,
    quote:
      "As pastelarias da Madalena têm uma qualidade inigualável. Cada visita ao Aeroporto de Luanda torna-se especial com os seus doces tradicionais.",
    author: "Ana Ferreira",
    role: "Cliente Fiel",
    brand: "Delícias da Madalena",
    brandColor: "#E97451",
    stars: 5,
    avatar: "AF",
  },
  {
    id: 2,
    quote:
      "O Food Truck da DLM foi a escolha perfeita para o nosso evento corporativo. Profissionalismo, pontualidade e uma qualidade gastronómica excepcional.",
    author: "Carlos Mendes",
    role: "Diretor de Eventos",
    brand: "Food Truck",
    brandColor: "#FF8C00",
    stars: 5,
    avatar: "CM",
  },
  {
    id: 3,
    quote:
      "O bolo do nosso casamento foi uma obra de arte. O Ateliê de Doces transformou a nossa visão em algo absolutamente mágico e delicioso.",
    author: "Sofia & Paulo",
    role: "Casal Feliz",
    brand: "Ateliê de Doces",
    brandColor: "#967BB6",
    stars: 5,
    avatar: "SP",
  },
  {
    id: 4,
    quote:
      "Trabalhamos com o Ateliê de Doces para os nossos eventos empresariais há dois anos. A criatividade e o sabor são sempre impecáveis.",
    author: "Margarida Santos",
    role: "Gestora de Marketing",
    brand: "Ateliê de Doces",
    brandColor: "#967BB6",
    stars: 5,
    avatar: "MS",
  },
  {
    id: 5,
    quote:
      "A tradição e a inovação combinadas na perfeição. Os pastéis e doces das Delícias da Madalena fazem-me sentir em casa, longe de casa.",
    author: "João Rodrigues",
    role: "Empresário",
    brand: "Delícias da Madalena",
    brandColor: "#E97451",
    stars: 5,
    avatar: "JR",
  },
  {
    id: 6,
    quote:
      "O Food Truck apareceu no nosso festival e foi um sucesso absoluto. Filas enormes, sorrisos em todo o lado — e por uma boa razão.",
    author: "Beatriz Lopes",
    role: "Organizadora de Festivais",
    brand: "Food Truck",
    brandColor: "#FF8C00",
    stars: 5,
    avatar: "BL",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-dlm-gold" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-dlm-gold/30" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

export default function TestimonialsCarousel() {
  const g = useContent("global");
  const testimonials = parseContentJson(g.home_testimonials_json, fallbackTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const visibleCount = 3;
  const totalSlides = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrentIndex((index + totalSlides) % totalSlides);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, totalSlides]
  );

  const next = () => goTo(currentIndex + 1, "next");
  const prev = () => goTo(currentIndex - 1, "prev");

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(currentIndex + i) % totalSlides]);
    }
    return visible;
  };

  const visible = getVisibleTestimonials();

  return (
    <section className="w-full bg-dlm-cream py-24 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-inter font-semibold text-[12px] tracking-[3.84px] uppercase text-dlm-gold mb-3">
            {g.home_testimonials_label ?? "Testemunhos"}
          </span>
          <h2
            className="font-playfair font-semibold text-dlm-brown text-center mb-4"
            style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-1px" }}
          >
            {g.home_testimonials_heading ?? "O que dizem sobre nós"}
          </h2>
          <div className="w-20 h-0.5 bg-dlm-gold" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Grid — desktop shows 3, tablet 2, mobile 1 */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-400 ${
              isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
            style={{ transition: "opacity 0.35s ease, transform 0.35s ease" }}
          >
            {visible.map((testimonial, i) => (
              <div
                key={`${testimonial.id}-${i}`}
                className={`relative flex flex-col rounded-3xl border border-dlm-gold/30 bg-white p-8 shadow-[0_4px_24px_-4px_rgba(45,30,20,0.08)] hover:shadow-[0_12px_32px_-8px_rgba(207,164,89,0.15)] transition-all duration-300 ${
                  i === 1 ? "lg:scale-[1.02] lg:shadow-[0_8px_32px_-4px_rgba(207,164,89,0.20)]" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <QuoteIcon />
                </div>

                {/* Stars */}
                <div className="mb-4">
                  <StarRating count={testimonial.stars} />
                </div>

                {/* Quote Text */}
                <blockquote className="font-cormorant text-dlm-brown-text text-lg leading-relaxed italic flex-grow mb-8"
                            style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Divider */}
                <div className="w-12 h-px bg-dlm-gold/40 mb-6" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-inter font-semibold text-white text-sm flex-shrink-0"
                    style={{ backgroundColor: testimonial.brandColor }}
                  >
                    {testimonial.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-playfair font-semibold text-dlm-brown text-base leading-tight">
                      {testimonial.author}
                    </div>
                    <div className="font-inter font-light text-dlm-brown-mid text-sm mt-0.5">
                      {testimonial.role}
                    </div>
                  </div>

                  {/* Brand Tag */}
                  <span
                    className="font-inter font-semibold text-[9px] tracking-[1.5px] uppercase px-3 py-1 rounded-full text-white flex-shrink-0"
                    style={{ backgroundColor: testimonial.brandColor + "CC" }}
                  >
                    {testimonial.brand.split(" ")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-dlm-gold/40 bg-white flex items-center justify-center text-dlm-gold hover:bg-dlm-gold hover:text-dlm-dark transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_-4px_rgba(207,164,89,0.4)]"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 h-2.5 bg-dlm-gold"
                      : "w-2.5 h-2.5 bg-dlm-gold/25 hover:bg-dlm-gold/50"
                  }`}
                  aria-label={`Ir para ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-dlm-gold/40 bg-white flex items-center justify-center text-dlm-gold hover:bg-dlm-gold hover:text-dlm-dark transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_-4px_rgba(207,164,89,0.4)]"
              aria-label="Próximo"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
