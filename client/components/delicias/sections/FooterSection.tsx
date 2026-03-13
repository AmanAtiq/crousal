import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RichTextContent from "@/components/RichTextContent";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";

const menuLinks = [
  "Menu completo",
  "Loja Patriota",
  "Aeroporto partidas",
  "Aeroporto chegadas",
  "Encomendas especiais",
];

const brandLinks = [
  "Food Truck · eventos",
  "Atelie de Doces · cakes",
  "DLM Group · corporate",
];

const contactInfo = [
  { type: "phone", text: "+244 999 999 999" },
  { type: "email", text: "delicias@dlm.ao" },
  { type: "whatsapp", text: "WhatsApp · +244 923 456 789" },
];

const legalLinks = ["Politica de privacidade", "Termos de uso", "Cookies"];

export const FooterSection = () => {
  const content = useContent("delicias");
  const menuItems = parseContentJson(content.footer_menu_links_json, menuLinks);
  const brandItems = parseContentJson(content.footer_brand_links_json, brandLinks);
  const menuItemsFull = parseContentJson<Array<{ label: string; href: string }>>(content.footer_menu_links_full_json, menuItems.map((label) => ({ label, href: "#" })));
  const brandItemsFull = parseContentJson<Array<{ label: string; href: string }>>(content.footer_brand_links_full_json, brandItems.map((label) => ({ label, href: "#" })));
  const contacts = parseContentJson(content.footer_contact_json, contactInfo);
  const legalItems = parseContentJson(content.footer_legal_links_json, legalLinks);
  const legalItemsFull = parseContentJson<Array<{ label: string; href: string }>>(content.footer_legal_links_full_json, legalItems.map((label) => ({ label, href: "#" })));

  return (
    <footer className="w-full border-t-[6px] border-[#e97451] bg-[#b14e33]">
      <div className="mx-auto max-w-[1360px] px-10 py-[66px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          <div className="flex flex-col gap-5">
            <h3 className="text-[19.2px] leading-[28.8px] text-[#ffd9c9]">DELICIAS DA MADALENA</h3>
            <RichTextContent className="text-base leading-6 text-[#fff0e0] opacity-90" content={content.footer_description ?? "Delicias da Madalena e uma marca do grupo DLM, com sabor tradicional e energia contemporanea para Luanda."} />
            <nav className="flex flex-col gap-5">
              {menuItemsFull.map((link) => (
                <a key={link.label} href={link.href} className="text-base leading-6 text-[#fff0e0] opacity-90 transition-opacity hover:opacity-100">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[19.2px] leading-[28.8px] text-[#ffd9c9]">OUTROS BRANDS</h3>
            <nav className="flex flex-col gap-5">
              {brandItemsFull.map((link) => (
                <a key={link.label} href={link.href} className="text-base leading-6 text-[#fff0e0] opacity-90 transition-opacity hover:opacity-100">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[19.2px] leading-[28.8px] text-[#ffd9c9]">CONTACTOS</h3>
            <div className="flex flex-col gap-5">
              {contacts.map((contact) => (
                <div key={contact.text} className="flex items-center gap-[7.6px] opacity-90">
                  {contact.type === "phone" ? (
                    <InfoPhoneIcon className="h-[14px] w-[14px] text-[#fff0e0]" />
                  ) : contact.type === "email" ? (
                    <MailSvgIcon className="h-4 w-4 text-[#fff0e0]" />
                  ) : contact.type === "location" ? (
                    <InfoLocationIcon className="text-[#fff0e0]" />
                  ) : (
                    <WhatsAppSvgIcon className="h-4 w-4 text-[#fff0e0]" />
                  )}
                  <span className="text-base leading-6 text-[#fff0e0]">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[19.2px] leading-[28.8px] text-[#ffd9c9]">SOCIAL</h3>
            <div className="flex gap-[17px]">
              {[InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className="h-auto w-11 rounded-[22px] border border-[#ffd7c833] bg-[#fff5eb1a] opacity-90 hover:bg-[#fff5eb2a] hover:opacity-100"
                >
                  <Icon className="h-5 w-5 text-[#fff0e0]" />
                </Button>
              ))}
            </div>
            <Separator className="my-4 bg-[#e974514c]" />
            <div className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0"><InfoLocationIcon className="text-[#f0e0d8]" /></span>
              <div className="flex flex-col gap-1">
                <span className="text-base leading-6 text-[#f0e0d8]">Patriota & Aeroporto</span>
                <span className="text-base leading-6 text-[#f0e0d8]">Luanda, Angola</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-[#e9745166]" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-[15.2px] leading-[22.8px]">
            <span className="font-bold text-[#ffd9c9]">{content.footer_copyright ?? "© 2026 Delicias da Madalena · uma marca DLM Group"}</span>
          </div>

          <nav className="flex flex-wrap items-center gap-8">
            {legalItemsFull.map((link) => (
              <a key={link.label} href={link.href} className="text-[15.2px] leading-[22.8px] text-[#f0cfc0] transition-colors hover:text-[#ffd9c9]">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

function MailSvgIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M23.5312 5.95312C23.7188 5.8125 24 5.95312 24 6.1875V15.75C24 17.0156 22.9688 18 21.75 18H2.25C0.984375 18 0 17.0156 0 15.75V6.1875C0 5.95312 0.234375 5.8125 0.421875 5.95312C1.5 6.79688 2.85938 7.82812 7.64062 11.2969C8.625 12 10.3125 13.5469 12 13.5469C13.6406 13.5469 15.375 12 16.3125 11.2969C21.0938 7.82812 22.4531 6.79688 23.5312 5.95312ZM12 12C10.875 12.0469 9.32812 10.6406 8.53125 10.0781C2.29688 5.57812 1.82812 5.15625 0.421875 4.03125C0.140625 3.84375 0 3.51562 0 3.14062V2.25C0 1.03125 0.984375 0 2.25 0H21.75C22.9688 0 24 1.03125 24 2.25V3.14062C24 3.51562 23.8125 3.84375 23.5312 4.03125C22.125 5.15625 21.6562 5.57812 15.4219 10.0781C14.625 10.6406 13.0781 12.0469 12 12Z" fill="currentColor"/>
    </svg>
  );
}

function InfoLocationIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <path d="M5.375 15.6875C0.8125 9.125 0 8.4375 0 6C0 2.6875 2.65625 0 6 0C9.3125 0 12 2.6875 12 6C12 8.4375 11.1562 9.125 6.59375 15.6875C6.3125 16.125 5.65625 16.125 5.375 15.6875ZM6 8.5C7.375 8.5 8.5 7.40625 8.5 6C8.5 4.625 7.375 3.5 6 3.5C4.59375 3.5 3.5 4.625 3.5 6C3.5 7.40625 4.59375 8.5 6 8.5Z" fill="currentColor"/>
    </svg>
  );
}

function WhatsAppSvgIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11.875 2.0625C13.1875 3.375 14 5.09375 14 6.96875C14 10.7812 10.8125 13.9062 6.96875 13.9062C5.8125 13.9062 4.6875 13.5938 3.65625 13.0625L0 14L0.96875 10.4062C0.375 9.375 0.03125 8.1875 0.03125 6.9375C0.03125 3.125 3.15625 0 6.96875 0C8.84375 0 10.5938 0.75 11.875 2.0625ZM6.96875 12.7188C10.1562 12.7188 12.8125 10.125 12.8125 6.96875C12.8125 5.40625 12.1562 3.96875 11.0625 2.875C9.96875 1.78125 8.53125 1.1875 7 1.1875C3.8125 1.1875 1.21875 3.78125 1.21875 6.9375C1.21875 8.03125 1.53125 9.09375 2.09375 10.0312L2.25 10.25L1.65625 12.375L3.84375 11.7812L4.03125 11.9062C4.9375 12.4375 5.9375 12.7188 6.96875 12.7188ZM10.1562 8.40625C10.3125 8.5 10.4375 8.53125 10.4688 8.625C10.5312 8.6875 10.5312 9.03125 10.375 9.4375C10.2188 9.84375 9.53125 10.2188 9.21875 10.25C8.65625 10.3438 8.21875 10.3125 7.125 9.8125C5.375 9.0625 4.25 7.3125 4.15625 7.21875C4.0625 7.09375 3.46875 6.28125 3.46875 5.40625C3.46875 4.5625 3.90625 4.15625 4.0625 3.96875C4.21875 3.78125 4.40625 3.75 4.53125 3.75C4.625 3.75 4.75 3.75 4.84375 3.75C4.96875 3.75 5.09375 3.71875 5.25 4.0625C5.375 4.40625 5.75 5.25 5.78125 5.34375C5.8125 5.4375 5.84375 5.53125 5.78125 5.65625C5.46875 6.3125 5.09375 6.28125 5.28125 6.59375C5.96875 7.75 6.625 8.15625 7.65625 8.65625C7.8125 8.75 7.90625 8.71875 8.03125 8.625C8.125 8.5 8.46875 8.09375 8.5625 7.9375C8.6875 7.75 8.8125 7.78125 8.96875 7.84375C9.125 7.90625 9.96875 8.3125 10.1562 8.40625Z" fill="currentColor"/>
    </svg>
  );
}

function InfoPhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <path d="M15.4688 0.84375C15.8125 0.9375 16.0625 1.21875 16.0625 1.5625C16.0625 9.59375 9.5625 16.0625 1.5625 16.0625C1.1875 16.0625 0.90625 15.8438 0.8125 15.5L0.0625 12.25C0 11.9062 0.15625 11.5312 0.5 11.375L4 9.875C4.3125 9.75 4.65625 9.84375 4.875 10.0938L6.4375 12C8.875 10.8438 10.8438 8.84375 11.9688 6.46875L10.0625 4.90625C9.8125 4.6875 9.71875 4.34375 9.84375 4.03125L11.3438 0.53125C11.5 0.1875 11.875 0 12.2188 0.09375L15.4688 0.84375Z" fill="currentColor"/>
    </svg>
  );
}
