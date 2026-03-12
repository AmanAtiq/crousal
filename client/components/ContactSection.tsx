import RichTextContent from "@/components/RichTextContent";
import { useContent } from "@/hooks/useContent";

const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15.4688 0.84375C15.8125 0.9375 16.0625 1.21875 16.0625 1.5625C16.0625 9.59375 9.5625 16.0625 1.5625 16.0625C1.1875 16.0625 0.90625 15.8438 0.8125 15.5L0.0625 12.25C0 11.9062 0.15625 11.5312 0.5 11.375L4 9.875C4.3125 9.75 4.65625 9.84375 4.875 10.0938L6.4375 12C8.875 10.8438 10.8438 8.84375 11.9688 6.46875L10.0625 4.90625C9.8125 4.6875 9.71875 4.34375 9.84375 4.03125L11.3438 0.53125C11.5 0.1875 11.875 0 12.2188 0.09375L15.4688 0.84375Z" fill="#CFA459"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M23.5312 5.95312C23.7188 5.8125 24 5.95312 24 6.1875V15.75C24 17.0156 22.9688 18 21.75 18H2.25C0.984375 18 0 17.0156 0 15.75V6.1875C0 5.95312 0.234375 5.8125 0.421875 5.95312C1.5 6.79688 2.85938 7.82812 7.64062 11.2969C8.625 12 10.3125 13.5469 12 13.5469C13.6406 13.5469 15.375 12 16.3125 11.2969C21.0938 7.82812 22.4531 6.79688 23.5312 5.95312ZM12 12C10.875 12.0469 9.32812 10.6406 8.53125 10.0781C2.29688 5.57812 1.82812 5.15625 0.421875 4.03125C0.140625 3.84375 0 3.51562 0 3.14062V2.25C0 1.03125 0.984375 0 2.25 0H21.75C22.9688 0 24 1.03125 24 2.25V3.14062C24 3.51562 23.8125 3.84375 23.5312 4.03125C22.125 5.15625 21.6562 5.57812 15.4219 10.0781C14.625 10.6406 13.0781 12.0469 12 12Z" fill="#CFA459"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[#CFA459]">
    <path d="M5.375 15.6875C0.8125 9.125 0 8.4375 0 6C0 2.6875 2.65625 0 6 0C9.3125 0 12 2.6875 12 6C12 8.4375 11.1562 9.125 6.59375 15.6875C6.3125 16.125 5.65625 16.125 5.375 15.6875ZM6 8.5C7.375 8.5 8.5 7.40625 8.5 6C8.5 4.625 7.375 3.5 6 3.5C4.59375 3.5 3.5 4.625 3.5 6C3.5 7.40625 4.59375 8.5 6 8.5Z" fill="currentColor"/>
  </svg>
);

export default function ContactSection() {
  const content = useContent("home");

  return (
    <section id="contacto" className="bg-dlm-cream py-20 px-4">
      <div className="mx-auto max-w-[1400px] text-center">
        {/* Label */}
        <p className="font-inter text-[12px] font-semibold uppercase tracking-[3.84px] text-dlm-gold">
          {content.contact_label ?? "Contacto"}
        </p>

        {/* Heading */}
        <h2 className="mt-4 font-playfair text-5xl font-semibold leading-[1.5] tracking-[-0.02em] text-dlm-brown md:text-6xl">
          {content.contact_heading ?? "Fale connosco"}
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 h-0.5 w-20 bg-dlm-gold" />

        {/* Description */}
        <RichTextContent
          className="mx-auto mt-12 max-w-lg font-inter text-base font-light leading-[1.8] text-dlm-brown-mid"
          content={
            content.contact_description ??
            "Para encomendas especiais, parcerias ou qualquer questão, estamos disponíveis."
          }
        />

        {/* Contact Items */}
        <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
          {/* Phone */}
          <div className="flex flex-col items-center gap-2">
            <PhoneIcon />
            <span className="font-cormorant text-[19px] font-light text-dlm-brown-text">
              {content.contact_phone ?? "+244 999 999 999"}
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-2">
            <MailIcon />
            <span className="font-cormorant text-[19px] font-light text-dlm-brown-text">
              {content.contact_email ?? "info@dlm.ao"}
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center gap-2">
            <LocationIcon />
            <span className="font-cormorant text-[19px] font-light text-dlm-brown-text">
              {content.contact_location ?? "Luanda, Angola"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
