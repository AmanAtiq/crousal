import {
  ArrowRightIcon,
  CakeSliceIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  CrownIcon,
  FacebookIcon,
  InstagramIcon,
  MessageCircleIcon,
  PaletteIcon,
  SparklesIcon,
  TruckIcon,
  WineIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import RichTextContent from "@/components/RichTextContent";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";
import { normalizeNavLabel } from "@/lib/nav";

const PortfolioIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13.2 11.2C13.4 11.2 13.6 11.4 13.6 11.6V12.4C13.6 12.625 13.4 12.8 13.2 12.8H2.8C2.575 12.8 2.4 12.625 2.4 12.4V11.6C2.4 11.4 2.575 11.2 2.8 11.2H13.2ZM14.8 3.20001C15.45 3.20001 16 3.75001 16 4.40001C16 5.07501 15.45 5.60001 14.8 5.60001C14.725 5.60001 14.65 5.60001 14.6 5.60001L12.8 10.4H3.2L1.375 5.60001C1.325 5.60001 1.25 5.60001 1.2 5.60001C0.525 5.60001 0 5.07501 0 4.40001C0 3.75001 0.525 3.20001 1.2 3.20001C1.85 3.20001 2.4 3.75001 2.4 4.40001C2.4 4.60001 2.35 4.75001 2.275 4.90001L4.1 6.00001C4.475 6.22501 4.975 6.10001 5.2 5.70001L7.225 2.12501C6.975 1.92501 6.8 1.57501 6.8 1.20001C6.8 0.550012 7.325 1.20401e-05 8 1.20401e-05C8.65 1.20401e-05 9.2 0.550012 9.2 1.20001C9.2 1.57501 9.025 1.92501 8.75 2.12501L10.775 5.70001C11 6.10001 11.5 6.22501 11.9 6.00001L13.7 4.90001C13.625 4.75001 13.6 4.60001 13.6 4.40001C13.6 3.75001 14.125 3.20001 14.8 3.20001Z" fill="currentColor"/>
  </svg>
);

const OrderIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.5002 3.67499L11.3502 4.82499C11.2502 4.92499 11.0502 4.92499 10.9252 4.82499L8.1502 2.04999C8.0502 1.92499 8.0502 1.72499 8.1502 1.62499L9.3002 0.474988C9.7752 -1.23754e-05 10.5502 -1.23754e-05 11.0002 0.474988L12.5002 1.97499C12.9752 2.42499 12.9752 3.19999 12.5002 3.67499ZM7.1752 2.59999C7.2752 2.49999 7.4752 2.49999 7.6002 2.59999L10.3752 5.37499C10.5002 5.49999 10.5002 5.69999 10.3752 5.79999L3.8002 12.375L0.775195 12.9C0.350195 12.975 0.000195311 12.625 0.0751953 12.2L0.600195 9.17499L7.1752 2.59999ZM3.1752 8.59999C3.3002 8.74999 3.5252 8.74999 3.6502 8.59999L7.5002 4.74999C7.6502 4.62499 7.6502 4.39999 7.5002 4.27499C7.3752 4.12499 7.1502 4.12499 7.0252 4.27499L3.1752 8.12499C3.0252 8.24999 3.0252 8.47499 3.1752 8.59999ZM2.2752 10.7V9.49999H1.3502L1.0752 11.125L1.8502 11.9L3.4752 11.625V10.7H2.2752Z" fill="currentColor"/>
  </svg>
);

const ConsultaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M23.4563 9.00002C23.4563 14.0063 18.1688 18 11.7563 18C9.45 18 7.25625 17.4938 5.45625 16.5938C4.21875 17.325 2.53125 18 0.506252 18C0.281252 18 0.168752 17.9438 0.0562515 17.775C1.52737e-06 17.6063 0.0562515 17.3813 0.168752 17.2688C0.168752 17.2688 1.40625 15.9188 2.19375 14.175C0.843752 12.7125 0.0562515 10.9688 0.0562515 9.00002C0.0562515 4.05002 5.2875 2.5034e-05 11.7563 2.5034e-05C18.1688 2.5034e-05 23.4563 4.05002 23.4563 9.00002ZM30.3188 21.375C31.05 23.1188 32.2875 24.4688 32.2875 24.4688C32.4563 24.5813 32.4563 24.8063 32.4 24.975C32.3438 25.1438 32.175 25.2 32.0063 25.2C29.925 25.2 28.2375 24.525 27 23.7938C25.2 24.6938 23.0625 25.2 20.7563 25.2C15.8625 25.2 11.7 22.95 9.95625 19.7438C10.5188 19.8 11.1375 19.8 11.7563 19.8C19.1813 19.8 25.2563 14.9625 25.2563 9.00002C25.2563 8.66252 25.2 8.26877 25.1438 7.87502C29.4188 9.22502 32.4563 12.4875 32.4563 16.2C32.4563 18.1688 31.6125 19.9125 30.3188 21.375Z" fill="currentColor"/>
  </svg>
);

const DesignIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9.45013 17.4375L14.4001 21.5437C14.4001 21.7125 14.4564 21.8812 14.4564 22.05C14.4564 26.3812 11.4751 28.8 7.25638 28.8C2.13763 28.8 0.0563793 24.75 0.00012932 20.1375C0.562629 20.475 2.53138 22.05 3.15013 22.05C3.48763 22.05 3.82513 21.825 3.93763 21.4875C5.11888 18.45 7.14388 17.55 9.45013 17.4375ZM25.7626 -4.81606e-05C27.3939 -4.81606e-05 28.8564 1.1812 28.8564 2.81245C28.8564 3.71245 28.4626 4.61245 28.0689 5.39995C21.7126 17.2687 19.6876 19.8 16.1439 19.8C15.7501 19.8 15.3001 19.7437 14.9064 19.6312L11.3064 16.65C11.0251 15.975 10.8564 15.2437 10.8564 14.5125C10.8564 11.475 12.0376 11.25 23.5126 0.956202C24.1314 0.393702 24.9189 -4.81606e-05 25.7626 -4.81606e-05Z" fill="currentColor"/>
  </svg>
);

const ExecucaoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M25.1998 21.6C23.5686 21.6 23.3998 19.8 20.9811 19.8C18.5623 19.8 18.3373 21.6 16.7623 21.6C15.2436 21.6 15.0186 19.8 12.5998 19.8C10.1811 19.8 9.89984 21.6 8.38109 21.6C6.80609 21.6 6.63734 19.8 4.16234 19.8C1.74359 19.8 1.57484 21.6 -0.000155449 21.6V17.1C-0.000155449 15.6375 1.18109 14.4 2.69984 14.4H3.59984V6.29995H7.19984V14.4H10.7998V6.29995H14.3998V14.4H17.9998V6.29995H21.5998V14.4H22.4998C23.9623 14.4 25.1998 15.6375 25.1998 17.1V21.6ZM25.1998 28.8H-0.000155449V23.4C2.41859 23.4 2.58734 21.6 4.16234 21.6C5.73734 21.6 5.96234 23.4 8.38109 23.4C10.7998 23.4 11.0248 21.6 12.5998 21.6C14.1748 21.6 14.3436 23.4 16.7623 23.4C19.2373 23.4 19.4061 21.6 20.9811 21.6C22.4998 21.6 22.7248 23.4 25.1998 23.4V28.8ZM5.39984 5.39995C4.38734 5.39995 3.59984 4.61245 3.59984 3.59995C3.59984 1.8562 5.39984 2.3062 5.39984 -4.81606e-05C6.07484 -4.81606e-05 7.19984 1.68745 7.19984 3.14995C7.19984 4.6687 6.35609 5.39995 5.39984 5.39995ZM12.5998 5.39995C11.5873 5.39995 10.7998 4.61245 10.7998 3.59995C10.7998 1.8562 12.5998 2.3062 12.5998 -4.81606e-05C13.2748 -4.81606e-05 14.3998 1.68745 14.3998 3.14995C14.3998 4.6687 13.5561 5.39995 12.5998 5.39995ZM19.7998 5.39995C18.7873 5.39995 17.9998 4.61245 17.9998 3.59995C17.9998 1.8562 19.7998 2.3062 19.7998 -4.81606e-05C20.4748 -4.81606e-05 21.5998 1.68745 21.5998 3.14995C21.5998 4.6687 20.7561 5.39995 19.7998 5.39995Z" fill="currentColor"/>
  </svg>
);

const EntregaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M35.0999 19.8C35.5499 19.8 35.9999 20.25 35.9999 20.7V22.5C35.9999 23.0062 35.5499 23.4 35.0999 23.4H32.3999C32.3999 26.3812 29.9812 28.8 26.9999 28.8C24.0187 28.8 21.5999 26.3812 21.5999 23.4H14.3999C14.3999 26.3812 11.9812 28.8 8.9999 28.8C6.01865 28.8 3.5999 26.3812 3.5999 23.4H2.6999C1.18115 23.4 -9.72748e-05 22.2187 -9.72748e-05 20.7V2.69995C-9.72748e-05 1.23745 1.18115 -4.81606e-05 2.6999 -4.81606e-05H20.6999C22.1624 -4.81606e-05 23.3999 1.23745 23.3999 2.69995V5.39995H25.8749C26.5499 5.39995 27.2812 5.73745 27.7874 6.2437L33.3562 11.8125C33.8624 12.3187 34.1999 13.05 34.1999 13.725V19.8H35.0999ZM8.9999 26.1C10.4624 26.1 11.6999 24.9187 11.6999 23.4C11.6999 21.9375 10.4624 20.7 8.9999 20.7C7.48115 20.7 6.2999 21.9375 6.2999 23.4C6.2999 24.9187 7.48115 26.1 8.9999 26.1ZM26.9999 26.1C28.4624 26.1 29.6999 24.9187 29.6999 23.4C29.6999 21.9375 28.4624 20.7 26.9999 20.7C25.4812 20.7 24.2999 21.9375 24.2999 23.4C24.2999 24.9187 25.4812 26.1 26.9999 26.1ZM31.4999 14.4V13.725L25.8749 8.09995H23.3999V14.4H31.4999Z" fill="currentColor"/>
  </svg>
);

const AsteriskCheckmarkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.6002 9.3C18.6002 14.4375 14.4002 18.6 9.3002 18.6C4.1627 18.6 0.000195324 14.4375 0.000195324 9.3C0.000195324 4.2 4.1627 -6.55651e-07 9.3002 -6.55651e-07C14.4002 -6.55651e-07 18.6002 4.2 18.6002 9.3ZM8.2127 14.25L15.1127 7.35C15.3377 7.125 15.3377 6.7125 15.1127 6.4875L14.2502 5.6625C14.0252 5.4 13.6502 5.4 13.4252 5.6625L7.8002 11.2875L5.1377 8.6625C4.9127 8.4 4.5377 8.4 4.3127 8.6625L3.4502 9.4875C3.2252 9.7125 3.2252 10.125 3.4502 10.35L7.3502 14.25C7.5752 14.475 7.9877 14.475 8.2127 14.25Z" fill="currentColor"/>
  </svg>
);

const QuoteClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.75 0C12.0312 0 15.5 3.46875 15.5 7.75C15.5 12.0312 12.0312 15.5 7.75 15.5C3.46875 15.5 0 12.0312 0 7.75C0 3.46875 3.46875 0 7.75 0ZM10.625 9.78125C10.6875 9.71875 10.75 9.59375 10.75 9.46875C10.75 9.3125 10.6562 9.1875 10.5625 9.09375L8.75 7.75V3.25C8.75 3 8.5 2.75 8.25 2.75H7.25C6.96875 2.75 6.75 3 6.75 3.25V8.125C6.75 8.53125 6.90625 8.875 7.21875 9.09375L9.3125 10.6562C9.375 10.7188 9.5 10.7812 9.59375 10.7812C9.78125 10.7812 9.90625 10.6875 10 10.5625L10.625 9.78125Z" fill="currentColor"/>
  </svg>
);

const PaperPlaneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.0499 0.250097C12.4749 9.74871e-05 13.0249 0.350097 12.9249 0.850097L11.1249 11.6501C11.0749 12.0501 10.6499 12.2751 10.2999 12.1251L7.19993 10.8001L5.59993 12.7501C5.24993 13.1751 4.54993 12.9501 4.54993 12.3501V10.3251L10.5499 3.0001C10.6749 2.8501 10.4749 2.6751 10.3499 2.8001L3.17493 9.1251L0.499926 8.0001C0.0499257 7.8251 -7.42935e-05 7.1751 0.449926 6.9251L12.0499 0.250097Z" fill="currentColor"/>
  </svg>
);

const processSteps = [
  {
    number: "01",
    title: "Consulta",
    description: "Reunião para entender a visão, estilo e requisitos do seu evento ou celebração.",
    icon: ConsultaIcon,
  },
  {
    number: "02",
    title: "Design",
    description: "Esboços e proposta artística com opções de sabores, cores e elementos decorativos.",
    icon: DesignIcon,
  },
  {
    number: "03",
    title: "Execucao",
    description: "Produção artesanal com ingredientes premium e atenção a cada detalhe.",
    icon: ExecucaoIcon,
  },
  {
    number: "04",
    title: "Entrega",
    description: "Transporte especializado e montagem no local do evento com equipa dedicada.",
    icon: EntregaIcon,
  },
] as const;

type PortfolioCard = {
  category: string;
  title: string;
  subtitle: string;
  image: string;
  large?: boolean;
};

const portfolioCards: PortfolioCard[] = [
  {
    category: "Casamentos",
    title: "Casamento Sofia e Pedro",
    subtitle: "140 convidados - Hotel Epic Sana",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1800&q=80",
    large: true,
  },
  {
    category: "Corporativo",
    title: "Vinho e aromas",
    subtitle: "Mesa sensorial premium",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1800&q=80",
  },
  {
    category: "Aniversarios",
    title: "30 anos - Dra. Antonieta",
    subtitle: "Bolo de chocolate com gold leaf",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1800&q=80",
  },
  {
    category: "Corporativo",
    title: "Mesa de doces - Unitel Gala",
    subtitle: "320 sobremesas premium",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1800&q=80",
  },
  {
    category: "Casamentos",
    title: "Cupcakes de caramelo",
    subtitle: "120 unidades personalizadas",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=1800&q=80",
  },
];

const signatureCards = [
  {
    line: "Colecao Premium",
    title: "Ouro",
    desc: "Folha de ouro comestivel, frutos secos e chocolate belga",
    image: "/atelie/unsplash_image_5.jpg",
  },
  {
    line: "Colecao Primavera",
    title: "Flores",
    desc: "Flores comestiveis, sabores leves e frescos",
    image: "/atelie/unsplash_image_6.jpg",
  },
  {
    line: "Colecao Outono",
    title: "Vintage",
    desc: "Sabores tradicionais portugueses com apresentacao contemporanea",
    image: "/atelie/unsplash_image_7.jpg",
  },
] as const;

const testimonials = [
  {
    initials: "MC",
    name: "Mariana Costa",
    role: "Casamento - 250 convidados",
    quote: "O bolo do nosso casamento foi uma verdadeira obra de arte. Ficou exatamente como imaginamos e o sabor foi surpreendente.",
  },
  {
    initials: "PL",
    name: "Paulo Lopes",
    role: "Unitel - Evento corporativo",
    quote: "Encomendamos para aniversario da empresa e foi um sucesso. Um bolo institucional sofisticado com o nosso logo em chocolate.",
  },
  {
    initials: "AS",
    name: "Ana Santos",
    role: "Cliente frequente",
    quote: "Ja recomendamos varias vezes para casais especiais e nunca desilude. A atencao ao detalhe e a qualidade dos ingredientes e excepcional.",
  },
] as const;

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type StatItem = {
  value: string;
  label: string;
};

type CollectionCard = {
  line: string;
  title: string;
  desc: string;
  image: string;
};

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

type FooterContactItem = {
  type: string;
  text: string;
};

const BrandMark = ({ color, clipId }: { color: string; clipId: string }) => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath={`url(#${clipId})`}>
      <path opacity="0.15" d="M19.7574 11.0711L11.2721 2.58578C10.491 1.80473 9.2247 1.80473 8.44365 2.58578L-0.0416375 11.0711C-0.822686 11.8521 -0.822686 13.1184 -0.0416375 13.8995L8.44365 22.3848C9.2247 23.1658 10.491 23.1658 11.2721 22.3848L19.7574 13.8995C20.5384 13.1184 20.5384 11.8521 19.7574 11.0711Z" fill={color}/>
      <path d="M19.4038 11.7175L11.6257 3.93934C11.0399 3.35356 10.0901 3.35356 9.50434 3.93934L1.72616 11.7175C1.14037 12.3033 1.14037 13.2531 1.72616 13.8388L9.50434 21.617C10.0901 22.2028 11.0399 22.2028 11.6257 21.617L19.4038 13.8388C19.9896 13.2531 19.9896 12.3033 19.4038 11.7175Z" stroke={color} strokeWidth="2"/>
      <path d="M19.0503 12.9498L13.3934 7.29292C13.0029 6.90239 12.3697 6.90239 11.9792 7.29292L6.32234 12.9498C5.93181 13.3403 5.93181 13.9735 6.32234 14.364L11.9792 20.0208C12.3697 20.4114 13.0029 20.4114 13.3934 20.0208L19.0503 14.364C19.4408 13.9735 19.4408 13.3403 19.0503 12.9498Z" stroke={color} strokeWidth="1.5"/>
      <circle cx="24" cy="24" r="4" fill={color}/>
    </g>
    <defs>
      <clipPath id={clipId}>
        <rect width="48" height="48" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const MailSvgIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M23.5312 5.95312C23.7188 5.8125 24 5.95312 24 6.1875V15.75C24 17.0156 22.9688 18 21.75 18H2.25C0.984375 18 0 17.0156 0 15.75V6.1875C0 5.95312 0.234375 5.8125 0.421875 5.95312C1.5 6.79688 2.85938 7.82812 7.64062 11.2969C8.625 12 10.3125 13.5469 12 13.5469C13.6406 13.5469 15.375 12 16.3125 11.2969C21.0938 7.82812 22.4531 6.79688 23.5312 5.95312ZM12 12C10.875 12.0469 9.32812 10.6406 8.53125 10.0781C2.29688 5.57812 1.82812 5.15625 0.421875 4.03125C0.140625 3.84375 0 3.51562 0 3.14062V2.25C0 1.03125 0.984375 0 2.25 0H21.75C22.9688 0 24 1.03125 24 2.25V3.14062C24 3.51562 23.8125 3.84375 23.5312 4.03125C22.125 5.15625 21.6562 5.57812 15.4219 10.0781C14.625 10.6406 13.0781 12.0469 12 12Z" fill="currentColor"/>
  </svg>
);

const CallSvgIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15.4688 0.84375C15.8125 0.9375 16.0625 1.21875 16.0625 1.5625C16.0625 9.59375 9.5625 16.0625 1.5625 16.0625C1.1875 16.0625 0.90625 15.8438 0.8125 15.5L0.0625 12.25C0 11.9062 0.15625 11.5312 0.5 11.375L4 9.875C4.3125 9.75 4.65625 9.84375 4.875 10.0938L6.4375 12C8.875 10.8438 10.8438 8.84375 11.9688 6.46875L10.0625 4.90625C9.8125 4.6875 9.71875 4.34375 9.84375 4.03125L11.3438 0.53125C11.5 0.1875 11.875 0 12.2188 0.09375L15.4688 0.84375Z" fill="#967BB6"/>
  </svg>
);

const WhatsAppSvgIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11.875 2.0625C13.1875 3.375 14 5.09375 14 6.96875C14 10.7812 10.8125 13.9062 6.96875 13.9062C5.8125 13.9062 4.6875 13.5938 3.65625 13.0625L0 14L0.96875 10.4062C0.375 9.375 0.03125 8.1875 0.03125 6.9375C0.03125 3.125 3.15625 0 6.96875 0C8.84375 0 10.5938 0.75 11.875 2.0625ZM6.96875 12.7188C10.1562 12.7188 12.8125 10.125 12.8125 6.96875C12.8125 5.40625 12.1562 3.96875 11.0625 2.875C9.96875 1.78125 8.53125 1.1875 7 1.1875C3.8125 1.1875 1.21875 3.78125 1.21875 6.9375C1.21875 8.03125 1.53125 9.09375 2.09375 10.0312L2.25 10.25L1.65625 12.375L3.84375 11.7812L4.03125 11.9062C4.9375 12.4375 5.9375 12.7188 6.96875 12.7188ZM10.1562 8.40625C10.3125 8.5 10.4375 8.53125 10.4688 8.625C10.5312 8.6875 10.5312 9.03125 10.375 9.4375C10.2188 9.84375 9.53125 10.2188 9.21875 10.25C8.65625 10.3438 8.21875 10.3125 7.125 9.8125C5.375 9.0625 4.25 7.3125 4.15625 7.21875C4.0625 7.09375 3.46875 6.28125 3.46875 5.40625C3.46875 4.5625 3.90625 4.15625 4.0625 3.96875C4.21875 3.78125 4.40625 3.75 4.53125 3.75C4.625 3.75 4.75 3.75 4.84375 3.75C4.96875 3.75 5.09375 3.71875 5.25 4.0625C5.375 4.40625 5.75 5.25 5.78125 5.34375C5.8125 5.4375 5.84375 5.53125 5.78125 5.65625C5.46875 6.3125 5.09375 6.28125 5.28125 6.59375C5.96875 7.75 6.625 8.15625 7.65625 8.65625C7.8125 8.75 7.90625 8.71875 8.03125 8.625C8.125 8.5 8.46875 8.09375 8.5625 7.9375C8.6875 7.75 8.8125 7.78125 8.96875 7.84375C9.125 7.90625 9.96875 8.3125 10.1562 8.40625Z" fill="currentColor"/>
  </svg>
);

const LocationSvgIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5.375 15.6875C0.8125 9.125 0 8.4375 0 6C0 2.6875 2.65625 0 6 0C9.3125 0 12 2.6875 12 6C12 8.4375 11.1562 9.125 6.59375 15.6875C6.3125 16.125 5.65625 16.125 5.375 15.6875ZM6 8.5C7.375 8.5 8.5 7.40625 8.5 6C8.5 4.625 7.375 3.5 6 3.5C4.59375 3.5 3.5 4.625 3.5 6C3.5 7.40625 4.59375 8.5 6 8.5Z" fill="currentColor"/>
  </svg>
);

export default function Atelie() {
  const g = useContent("global");
  const c = useContent("atelie");
  const heroImage =
    c.hero_image ??
    "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=2200&q=80";
  const processData = parseContentJson<ProcessStep[]>(c.process_steps_json, [...processSteps]);
  const portfolioData = parseContentJson<PortfolioCard[]>(c.portfolio_cards_json, portfolioCards);
  const statsData = parseContentJson<StatItem[]>(c.stats_json, []);
  const collectionData = parseContentJson<CollectionCard[]>(c.collections_json, [...signatureCards]);
  const testimonialData = parseContentJson<Testimonial[]>(c.testimonials_json, [...testimonials]);
  const quoteHighlights = parseContentJson<string[]>(c.quote_highlights_json, []);
  const footerContact = parseContentJson<FooterContactItem[]>(c.footer_contact_json, []);
  const processIcons = [ConsultaIcon, DesignIcon, ExecucaoIcon, EntregaIcon] as const;
  const footerContactDefaults: FooterContactItem[] = [
    { type: "phone", text: "+244 923 456 789" },
    { type: "whatsapp", text: "+244 923 456 789" },
    { type: "email", text: "atelie@dlm.ao" },
    { type: "location", text: "Luanda, Angola (por marcacao)" },
  ];
  const footerContactMap = {
    phone: CallSvgIcon,
    whatsapp: WhatsAppSvgIcon,
    email: MailSvgIcon,
    location: LocationSvgIcon,
  } as const;
  const navLinks = parseContentJson<Array<{ label: string; href: string }>>(g.nav_links_json, [
    { label: "Inicio", href: "/" },
    { label: "Food Truck", href: "/food-truck" },
    { label: "Delicias", href: "/delicias" },
    { label: "Atelie", href: "/atelie" },
    { label: "Contacto", href: "/contacto" },
  ]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf5ed] text-[#4d3522]">
      <section
        className="relative min-h-[765px] text-white"
        style={{
          backgroundImage: `linear-gradient(118deg, rgba(44,28,15,0.92) 0%, rgba(150,123,182,0.4) 50%, rgba(44,28,15,0.9) 100%), url('${heroImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <header className="absolute inset-x-0 top-0 z-50 border-b border-[#967bb6]/40 bg-[#2c1c0f]/90 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-4">
            <Link to="/atelie" className="flex shrink-0 items-center gap-3">
              <BrandMark color="#967bb6" clipId="atelie-nav-clip" />
              <span className="font-playfair text-xl font-bold tracking-wider text-white">ATELIE</span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-inter text-[11px] font-medium uppercase tracking-[2.24px] transition-colors ${
                    item.href === "/atelie"
                      ? "relative text-white after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:bg-[#967bb6]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {normalizeNavLabel(item.label)}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center md:flex">
              <Link
                to="/contacto"
                className="rounded-full border border-[#967bb6]/80 bg-[#967bb6]/10 px-8 py-2.5 font-inter text-[11px] font-semibold uppercase tracking-[2.24px] text-[#d6c2ee] transition-colors hover:bg-[#967bb6]/20"
              >
                {g.nav_smart_quote_label ?? "Smart Quote"}
              </Link>
            </div>
          </div>
        </header>

     {/* 1. Added justify-center to move the content box to the middle of the screen */}
<div className="mx-auto flex min-h-[765px] w-full max-w-[1440px] items-center justify-center px-5 pb-20 pt-28 lg:px-8">
  
  {/* 2. Added mx-auto to center the box, kept text-left for content alignment */}
  <div className="w-full max-w-[1000px] text-left mx-auto">
    
    {/* 3. Badges remain left-aligned by default */}
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <span className="rounded-full border border-[#967bb6]/30 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[2.24px] text-[#967bb6]">
        {c.hero_badge_1 ?? "DLM Group"}
      </span>
      <span className="rounded-full border border-[#967bb6]/30 bg-[#967bb6]/20 px-6 py-2 text-[12.8px] font-semibold uppercase tracking-[5.12px] text-[#bca3de]">
        {c.hero_badge_2 ?? "Alta confeitaria artistica"}
      </span>
    </div>

    <h1 className="font-playfair text-[clamp(56px,11vw,120px)] font-black leading-[0.9] tracking-[-2.4px] text-white drop-shadow-[0_2px_30px_rgba(150,123,182,0.5)]">
      {c.hero_heading ?? "Atelie de Doces"}
    </h1>
    <p className="mt-2 font-cormorant text-[clamp(24px,4vw,48px)] font-bold uppercase tracking-[0.3em] text-[#967bb6] [text-shadow:0_0_30px_#967bb6]">
      {c.hero_subheading ?? "Where Art Becomes Cake"}
    </p>
    <RichTextContent
      className="mt-7 max-w-[992px] font-cormorant text-[clamp(22px,3vw,35px)] italic leading-[1.5] text-white/95 [text-shadow:0_2px_15px_rgba(0,0,0,0.3)]"
      content={
        c.hero_description ??
        "Luxury, Artistic, Premium - Bolos de autor para momentos inesqueciveis."
      }
    />

    {/* 4. Buttons remain left-aligned by default */}
    <div className="mt-9 flex flex-wrap gap-4">
      <a href="#portfolio" className="inline-flex h-[61px] items-center rounded-full bg-[#967bb6] px-9 text-[12.8px] font-bold uppercase tracking-[2.56px] text-white shadow-[0_10px_30px_-5px_#967bb6]">
        <PortfolioIcon className="mr-3 h-4 w-4" />
        Ver portfolio
      </a>
      <a href="#orcamento" className="inline-flex h-[61px] items-center rounded-full border-2 border-[#967bb6] px-9 text-[12.8px] font-bold uppercase tracking-[2.56px] text-white">
        <OrderIcon className="mr-3 h-4 w-4" />
        Pedido personalizado
      </a>
    </div>
  </div>
</div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center md:block">
          <p className="text-[10px] uppercase tracking-[2.88px] text-white">Deslizar</p>
          <ChevronDownIcon className="mx-auto mt-2 h-5 w-5 text-[#967bb6]" />
        </div>
      </section>

      <section className="bg-[#faf5ed] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="relative mx-auto hidden h-[760px] w-full max-w-[1400px] xl:block">
            <p className="absolute left-1/2 top-0 w-[188px] -translate-x-1/2 text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-[#967BB6]">{c.process_label ?? "O nosso processo"}</p>
            <h2 className="absolute left-1/2 top-[38px] w-[702px] -translate-x-1/2 text-center font-playfair text-[61px] font-extrabold leading-[91.2px] tracking-[-0.02em] text-[#4D3522]">{c.process_title ?? "Da consulta à obra de arte"}</h2>
            <div className="absolute left-1/2 top-[140px] h-[3px] w-[100px] -translate-x-1/2 bg-[#967BB6] shadow-[0_0_20px_#967BB6]" />

            <div className="absolute left-8 top-[207px] grid w-[1336px] grid-cols-4 gap-8">
              {processData.slice(0, 4).map((step, index) => {
                const Icon = processIcons[index] ?? CrownIcon;
                return (
                  <article key={step.number} className="relative h-[414px] overflow-hidden rounded-[32px] border-2 border-[#967BB6] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.10)]">
                    <div className="absolute left-0 top-0 h-[5px] w-full bg-[linear-gradient(91deg,#967BB6_0%,#B79AD9_50%,#967BB6_100%)]" />
                    <p className="absolute left-1/2 top-[42px] -translate-x-1/2 text-center font-playfair text-5xl font-black leading-[72px] text-[#967BB6]/20">{step.number}</p>
                    <span className="absolute left-1/2 top-[130px] inline-flex h-[70px] w-[70px] -translate-x-1/2 items-center justify-center rounded-[35px] bg-[rgba(150,123,182,0.10)]">
                      <Icon className="h-[29px] w-[29px] text-[#967BB6]" />
                    </span>
                    <h3 className="absolute left-1/2 top-[225px] w-[220px] -translate-x-1/2 text-center font-playfair text-[21px] font-extrabold leading-[31.2px] tracking-[-0.02em] text-[#4D3522]">{step.title}</h3>
                    <p className="absolute left-1/2 top-[266px] w-[222px] -translate-x-1/2 text-center text-base font-light leading-[27.2px] text-[#4D3522]">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mx-auto max-w-[1400px] xl:hidden">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#967bb6]">{c.process_label ?? "O nosso processo"}</p>
            <h2 className="mt-4 text-center font-playfair text-[clamp(42px,5vw,58px)] font-bold text-[#4d3522]">{c.process_title ?? "Da consulta à obra de arte"}</h2>
            <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#967bb6] shadow-[0_0_20px_#967bb6]" />

            <div className="mx-auto mt-14 grid max-w-[740px] grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
              {processData.map((step, index) => {
                const Icon = processIcons[index] ?? CrownIcon;
                return (
                  <article key={step.number} className="relative flex h-[414px] w-full max-w-[310px] flex-col items-center overflow-hidden rounded-[32px] border-2 border-[#967BB6] bg-white px-7 py-8 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.10)]">
                    <div className="absolute left-0 top-0 h-[5px] w-full bg-[linear-gradient(91deg,#967BB6_0%,#B79AD9_50%,#967BB6_100%)]" />
                    <p className="font-playfair text-5xl font-black leading-[72px] text-[#967BB6]/20">{step.number}</p>
                    <span className="mt-4 inline-flex h-[70px] w-[70px] items-center justify-center rounded-[35px] bg-[rgba(150,123,182,0.10)]">
                      <Icon className="h-[29px] w-[29px] text-[#967BB6]" />
                    </span>
                    <h3 className="mt-6 font-playfair text-[21px] font-extrabold leading-[31.2px] tracking-[-0.02em] text-[#4D3522]">{step.title}</h3>
                    <p className="mt-3 text-center text-base font-light leading-[27.2px] text-[#4D3522]">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#f8f1e0] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="relative mx-auto hidden h-[1117px] w-full max-w-[1400px] xl:block">
            <p className="absolute left-1/2 top-0 w-[104px] -translate-x-1/2 text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-[#967BB6]">{c.portfolio_label ?? "Portfolio"}</p>
            <h2 className="absolute left-1/2 top-[38px] w-[695px] -translate-x-1/2 text-center font-playfair text-[61px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#4D3522]">{c.portfolio_title ?? "Obras de arte comestiveis"}</h2>
            <div className="absolute left-1/2 top-[140px] h-[3px] w-[100px] -translate-x-1/2 bg-[#967BB6] shadow-[0_0_20px_#967BB6]" />

            <div className="absolute left-1/2 top-[205px] flex -translate-x-1/2 items-center gap-[14px]">
              <button className="h-[42px] w-[113px] rounded-[40px] border-2 border-[#967BB6] bg-[#967BB6] text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_10px_20px_-5px_#967BB6]">Todos</button>
              <button className="h-[42px] w-[159px] rounded-[40px] border-2 border-[#967BB6] bg-transparent text-[11px] font-bold uppercase tracking-[0.1em] text-[#967BB6]">Casamentos</button>
              <button className="h-[42px] w-[163px] rounded-[40px] border-2 border-[#967BB6] bg-transparent text-[11px] font-bold uppercase tracking-[0.1em] text-[#967BB6]">Corporativo</button>
              <button className="h-[42px] w-[167px] rounded-[40px] border-2 border-[#967BB6] bg-transparent text-[11px] font-bold uppercase tracking-[0.1em] text-[#967BB6]">Aniversarios</button>
              <button className="h-[42px] w-[140px] rounded-[40px] border-2 border-[#967BB6] bg-transparent text-[11px] font-bold uppercase tracking-[0.1em] text-[#967BB6]">Colecoes</button>
            </div>

            <div className="absolute left-[44px] top-[296px] grid w-[1324px] grid-cols-4 gap-8">
              {portfolioData.map((item, index) => (
                <article key={`${item.title}-${index}`} className={`overflow-hidden rounded-[32px] shadow-[0_20px_40px_-12px_rgba(150,123,182,0.30)] ${item.large ? "col-span-2" : "col-span-1"}`}>
                  <div className={`relative ${item.large ? "h-[379px]" : "h-[379px]"}`}>
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(150,123,182,0.95)_0%,rgba(150,123,182,0)_70%)]" />
                    <div className="absolute bottom-5 left-8 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">#{item.category}</p>
                      <p className="mt-1 font-playfair text-[21px] font-bold leading-[1.4]">{item.title}</p>
                      <p className="text-sm font-light opacity-90">{item.subtitle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="xl:hidden">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#967bb6]">{c.portfolio_label ?? "Portfolio"}</p>
            <h2 className="mt-4 text-center font-playfair text-[clamp(42px,5vw,58px)] font-bold text-[#4d3522]">{c.portfolio_title ?? "Obras de arte comestiveis"}</h2>
            <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#967bb6] shadow-[0_0_20px_#967bb6]" />
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {portfolioData.map((item) => (
                <article key={item.title} className="relative h-[316px] overflow-hidden rounded-[24px]">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(150,123,182,0.95)_0%,rgba(150,123,182,0)_70%)]" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">#{item.category}</p>
                    <p className="mt-1 font-playfair text-xl font-bold">{item.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#967bb6] py-11">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-8 px-5 text-center text-white md:grid-cols-4 lg:px-8">
          {(statsData.length > 0 ? statsData : [
            { value: "250+", label: "Casamentos" },
            { value: "500+", label: "Eventos" },
            { value: "15", label: "Anos de experiencia" },
            { value: "100%", label: "Artesanal" },
          ]).map((item) => (
            <div key={item.label}>
              <p className="font-playfair text-[42px] font-bold leading-none">{item.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[2.2px] text-white/95">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#faf5ed] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="relative mx-auto hidden h-[758px] w-full max-w-[1400px] xl:block">
            <p className="absolute left-1/2 top-0 w-[219px] -translate-x-1/2 text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-[#967BB6]">{c.collections_label ?? "Colecoes Exclusivas"}</p>
            <h2 className="absolute left-1/2 top-[38px] w-[477px] -translate-x-1/2 text-center font-playfair text-[61px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#4D3522]">{c.collections_title ?? "Edicoes limitadas"}</h2>
            <div className="absolute left-1/2 top-[140px] h-[3px] w-[100px] -translate-x-1/2 bg-[#967BB6] shadow-[0_0_20px_#967BB6]" />

            {collectionData.map((card, index) => (
              <article
                key={card.title}
                className="absolute top-[207px] h-[551px] w-[424px] overflow-hidden rounded-[32px] shadow-[0_20px_40px_-12px_rgba(150,123,182,0.30)]"
                style={{ left: `${32 + index * 456}px` }}
              >
                <img src={card.image} alt={`Colecao ${card.title}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(150,123,182,0.95)_0%,rgba(150,123,182,0)_50%)]" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">{card.line}</p>
                  <p className="mt-2 font-playfair text-[29px] font-extrabold leading-[43.2px]">{card.title}</p>
                  <p className="mt-2 max-w-[354px] text-sm font-light leading-[21.6px] text-white/90">{card.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-2 border-b-2 border-white pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                    Ver colecao
                    <ChevronRightIcon className="h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="xl:hidden">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#967bb6]">{c.collections_label ?? "Colecoes exclusivas"}</p>
            <h2 className="mt-4 text-center font-playfair text-[clamp(42px,5vw,58px)] font-bold text-[#4d3522]">{c.collections_title ?? "Edicoes limitadas"}</h2>
            <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#967bb6] shadow-[0_0_20px_#967bb6]" />
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {collectionData.map((card) => (
                <article key={card.title} className="relative h-[420px] overflow-hidden rounded-[24px] shadow-[0_20px_40px_-12px_rgba(150,123,182,0.30)]">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(150,123,182,0.95)_0%,rgba(150,123,182,0)_50%)]" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">{card.line}</p>
                    <p className="mt-1 font-playfair text-[29px] font-extrabold">{card.title}</p>
                    <p className="mt-1 max-w-[300px] text-sm font-light text-white/90">{card.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f1e0] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="relative mx-auto hidden h-[523px] w-full max-w-[1400px] xl:block">
            <p className="absolute left-1/2 top-0 w-[132px] -translate-x-1/2 text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-[#967BB6]">{c.testimonials_label ?? "Depoimentos"}</p>
            <h2 className="absolute left-1/2 top-[38px] w-[633px] -translate-x-1/2 text-center font-playfair text-[61px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#4D3522]">{c.testimonials_title ?? "O que dizem os clientes"}</h2>
            <div className="absolute left-1/2 top-[140px] h-[3px] w-[100px] -translate-x-1/2 bg-[#967BB6] shadow-[0_0_20px_#967BB6]" />

            {testimonialData.map((item, index) => (
              <article
                key={item.name}
                className="absolute h-[316px] w-[424px] rounded-[32px] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.10)]"
                style={{ left: `${32 + index * 456}px`, top: "207px" }}
              >
                <p className="absolute left-[42px] top-[46px] w-[332px] text-base font-light leading-[1.8] text-[#4D3522]">
                  &quot;{item.quote}&quot;
                </p>
                <span className="absolute left-[42px] top-[218px] inline-flex h-14 w-14 items-center justify-center rounded-[28px] bg-[#967BB6] text-[19px] font-bold text-white">
                  {item.initials}
                </span>
                <p className="absolute left-[114px] top-[223px] font-playfair text-base font-extrabold tracking-[-0.02em] text-[#4D3522]">
                  {item.name}
                </p>
                <p className="absolute left-[114px] top-[252px] text-[13px] font-light text-[#4D3522]">
                  {item.role}
                </p>
                <p className="absolute right-6 top-[18px] font-playfair text-8xl leading-[1] text-[#967BB6]/10">&quot;</p>
              </article>
            ))}
          </div>

          <div className="xl:hidden">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#967bb6]">{c.testimonials_label ?? "Depoimentos"}</p>
            <h2 className="mt-4 text-center font-playfair text-[clamp(42px,5vw,58px)] font-bold text-[#4d3522]">{c.testimonials_title ?? "O que dizem os clientes"}</h2>
            <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#967BB6] shadow-[0_0_20px_#967BB6]" />
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {testimonialData.map((item) => (
                <article key={item.name} className="rounded-[32px] bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.10)]">
                  <p className="text-base font-light leading-[1.8] text-[#4D3522]">&quot;{item.quote}&quot;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-[28px] bg-[#967BB6] text-[19px] font-bold text-white">{item.initials}</span>
                    <div>
                      <p className="font-playfair text-base font-extrabold tracking-[-0.02em] text-[#4D3522]">{item.name}</p>
                      <p className="text-[13px] font-light text-[#4D3522]">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="orcamento" className="bg-[linear-gradient(122deg,#FAF5ED_0%,#FFF_100%)] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="relative mx-auto hidden h-[899px] w-full max-w-[1400px] xl:block">
            <p className="absolute left-[52px] top-[213px] text-[11px] font-semibold uppercase tracking-[0.4em] text-[#967BB6]">{c.quote_label ?? "Pedido personalizado"}</p>
            <h2 className="absolute left-[52px] top-[246px] w-[489px] font-playfair text-[40px] font-extrabold leading-[60px] tracking-[-0.02em] text-[#4D3522]">
              {c.quote_title ?? "Crie o bolo dos seus sonhos"}
            </h2>
            <RichTextContent className="absolute left-[52px] top-[334px] w-[624px] text-base font-light leading-[28.8px] text-[#4D3522]" content={c.quote_description ?? "Cada bolo e uma peca unica, criada especialmente para si. Conte-nos a sua visao e nos transformaremos em arte comestivel."} />

            <div className="absolute left-[52px] top-[419px] flex w-[636px] flex-col gap-[19px]">
              {(quoteHighlights.length > 0 ? quoteHighlights : [
                "Consultoria especializada com a nossa equipa de cake designers",
                "Degustacao gratuita de sabores e recheios",
                "Entrega e montagem no local do evento",
                "Servico premium para casamentos e eventos corporativos",
              ]).map((item) => (
                <div key={item} className="flex items-start gap-4 text-[#4D3522]">
                  <AsteriskCheckmarkIcon className="mt-1 h-5 w-5 text-[#967BB6]" />
                  <p className="text-lg leading-[26.4px]">{item}</p>
                </div>
              ))}
            </div>

            <div className="absolute left-[52px] top-[614px] inline-flex h-[72px] w-[636px] items-center gap-4 rounded-2xl border-l-4 border-l-[#967BB6] bg-[rgba(150,123,182,0.10)] pl-7">
              <QuoteClockIcon className="h-4 w-4 text-[#967BB6]" />
              <p className="text-base font-semibold text-[#967BB6]">{c.quote_banner ?? "Pedidos com antecedencia minima de 15 dias"}</p>
            </div>

            <form
              className="absolute left-[752px] top-24 h-[707px] w-[636px] overflow-hidden rounded-[32px] border-2 border-[#967BB6] bg-white shadow-[0_30px_60px_-12px_rgba(150,123,182,0.40)]"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = {
                  name: formData.get("name"),
                  phone: formData.get("phone"),
                  eventType: formData.get("eventType"),
                  guests: formData.get("guests"),
                  date: formData.get("date"),
                  time: formData.get("time"),
                  details: formData.get("details"),
                };
                try {
                  const res = await fetch("/api/contact-quote", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  if (res.ok) {
                    alert("Pedido enviado com sucesso!");
                    form.reset();
                  } else {
                    alert("Erro ao enviar pedido. Tente novamente.");
                  }
                } catch {
                  alert("Erro de rede. Tente novamente.");
                }
              }}
            >
              <div className="absolute -left-[314px] -top-[349px] h-[1406px] w-[1264px] bg-[radial-gradient(67.24%_74.78%_at_50%_50%,rgba(150,123,182,0.10)_0%,rgba(150,123,182,0.00)_70%)]" />
              <h3 className="absolute left-[50px] top-[50px] font-playfair text-[32px] font-extrabold leading-[48px] tracking-[-0.02em] text-[#4D3522]">Solicitar orcamento</h3>

              <div className="absolute left-[50px] top-[130px] grid w-[536px] grid-cols-2 gap-4">
                <input name="name" className="h-14 rounded-2xl border-2 border-[#EEE] px-5 text-base" placeholder="Seu nome completo" required />
                <input name="phone" className="h-14 rounded-2xl border-2 border-[#EEE] px-5 text-base" placeholder="+244 900 000 000" required />
                <select name="eventType" aria-label="Tipo de Evento" title="Tipo de Evento" className="h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base" required>
                  <option>Casamento</option>
                  <option>Aniversario</option>
                  <option>Evento corporativo</option>
                </select>
                <select name="guests" aria-label="Numero de convidados" title="Numero de convidados" className="h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base" required>
                  <option>50-100</option>
                  <option>100-200</option>
                  <option>200-300</option>
                </select>
                <input name="date" type="date" className="col-span-1 h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base" required />
                <input name="time" type="time" className="col-span-1 h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base" required />
                <textarea name="details" className="col-span-2 min-h-[116px] rounded-2xl border-2 border-[#EEE] px-5 py-4 text-base" placeholder="Cores, estilo, sabores preferidos, inspiracoes..." />
                <button type="submit" className="col-span-2 inline-flex h-[53px] items-center justify-center gap-2 rounded-[60px] bg-[#967BB6] text-[13px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_20px_-5px_#967BB6]">
                  <PaperPlaneIcon className="h-4 w-4" />
                  Solicitar orcamento
                </button>
              </div>
            </form>
          </div>

          <div className="xl:hidden">
            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[4px] text-[#967bb6]">{c.quote_label ?? "Pedido personalizado"}</p>
                <h2 className="mt-3 font-playfair text-[clamp(34px,3.4vw,50px)] font-bold text-[#4d3522]">{c.quote_title ?? "Crie o bolo dos seus sonhos"}</h2>
                <RichTextContent className="mt-4 max-w-[560px] text-sm leading-7 text-[#4D3522]" content={c.quote_description ?? "Cada bolo e uma peca unica, criada especialmente para si. Conte-nos a sua visao e nos transformaremos em arte comestivel."} />
                <ul className="mt-7 space-y-3 text-sm text-[#4D3522]">
                  {(quoteHighlights.length > 0 ? quoteHighlights : [
                    "Consultoria especializada com a nossa equipa de cake designers",
                    "Degustacao gratuita de sabores e recheios",
                    "Entrega e montagem no local do evento",
                    "Servico premium para casamentos e eventos corporativos",
                  ]).map((item) => (
                    <li key={item} className="flex items-start gap-3"><AsteriskCheckmarkIcon className="mt-0.5 h-4 w-4 text-[#967bb6]" /> {item}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 rounded-xl border-l-4 border-[#967BB6] bg-[#967bb6]/10 px-4 py-3 text-sm font-medium text-[#7A5D9C]"><QuoteClockIcon className="h-4 w-4 text-[#967bb6]" />{c.quote_banner ?? "Pedidos com antecedencia minima de 15 dias"}</div>
              </div>

              <form className="rounded-[32px] border-2 border-[#967BB6] bg-white p-6 shadow-[0_30px_60px_-12px_rgba(150,123,182,0.40)] lg:p-8">
                <h3 className="font-playfair text-4xl font-extrabold text-[#4d3522]">Solicitar orcamento</h3>
                <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input className="h-14 rounded-2xl border-2 border-[#EEE] px-4 text-sm" placeholder="Seu nome completo" />
                  <input className="h-14 rounded-2xl border-2 border-[#EEE] px-4 text-sm" placeholder="+244 900 000 000" />
                  <select aria-label="Tipo de evento" title="Tipo de evento" className="h-14 rounded-2xl border-2 border-[#EEE] px-4 text-sm"><option>Casamento</option></select>
                  <select aria-label="Numero de convidados" title="Numero de convidados" className="h-14 rounded-2xl border-2 border-[#EEE] px-4 text-sm"><option>50-100</option></select>
                  <input className="md:col-span-2 h-14 rounded-2xl border-2 border-[#EEE] px-4 text-sm" placeholder="mm/dd/yyyy" />
                  <textarea className="md:col-span-2 min-h-[116px] rounded-2xl border-2 border-[#EEE] px-4 py-3 text-sm" placeholder="Cores, estilo, sabores preferidos, inspiracoes..." />
                </div>
                <button className="mt-4 inline-flex h-[53px] w-full items-center justify-center gap-2 rounded-[60px] bg-[#967BB6] text-[13px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_20px_-5px_#967BB6]">
                  <PaperPlaneIcon className="h-4 w-4" />
                  Solicitar orcamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-[5px] border-[#967BB6] bg-[#2C1C0F] py-[85px] text-[#CBB89E]">
        <div className="mx-auto hidden h-[353px] w-full max-w-[1400px] px-8 xl:block">
          <div className="relative h-full w-full">
            <div className="absolute left-0 top-0 inline-flex h-12 w-12 items-center justify-center shadow-[0_0_10px_0_#967BB6]">
              <span className="absolute h-4 w-4 rotate-45 border-2 border-[#967BB6]" />
              <span className="absolute h-2.5 w-2.5 rotate-45 border border-[#967BB6]" />
              <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-[#967BB6]" />
            </div>

            <p className="absolute left-16 top-1 font-playfair text-2xl font-extrabold text-white">ATELIE</p>
            <p className="absolute left-16 top-[37px] font-playfair text-[10px] font-semibold uppercase tracking-[0.3em] text-[#967BB6]">DLM GROUP</p>
            <p className="absolute left-0 top-[78px] w-[434px] text-base font-light leading-[28.8px]">
              {c.footer_description ?? "Alta confeitaria artistica para momentos inesqueciveis. Bolos de autor que transformam celebracoes em obras de arte."}
            </p>

            <div className="absolute left-0 top-[193px] flex gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[22px] border-2 border-[#967BB6]/30"><InstagramIcon className="h-5 w-5" /></span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[22px] border-2 border-[#967BB6]/30"><FacebookIcon className="h-5 w-5" /></span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[22px] border-2 border-[#967BB6]/30"><WhatsAppSvgIcon className="h-5 w-5" /></span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[22px] border-2 border-[#967BB6]/30"><MailSvgIcon className="h-5 w-5" /></span>
            </div>

            <div className="absolute left-[481px] top-0">
              <p className="font-cormorant text-[19px] font-semibold uppercase tracking-[0.2em] text-[#967BB6]">Marcas</p>
              <ul className="mt-6 space-y-4 text-base font-light">
                <li><Link to="/delicias">Delicias da Madalena</Link></li>
                <li><Link to="/food-truck">Food Truck</Link></li>
                <li><Link to="/atelie">Atelie de Doces</Link></li>
              </ul>
            </div>

            <div className="absolute left-[746px] top-0">
              <p className="font-cormorant text-[19px] font-semibold uppercase tracking-[0.2em] text-[#967BB6]">Links Rapidos</p>
              <ul className="mt-6 space-y-4 text-base font-light">
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#orcamento">Pedidos</a></li>
                <li><a href="#processo">{c.process_label ?? "Processo"}</a></li>
              </ul>
            </div>

            <div className="absolute left-[1011px] top-0">
              <p className="font-cormorant text-[19px] font-semibold uppercase tracking-[0.2em] text-[#967BB6]">Contacto</p>
              <ul className="mt-6 space-y-4 text-base font-light">
                {(footerContact.length > 0 ? footerContact : footerContactDefaults).map((item) => {
                  const Icon = footerContactMap[item.type as keyof typeof footerContactMap];
                  return (
                    <li key={`${item.type}-${item.text}`} className="flex items-center gap-3">
                      {Icon ? <Icon className="h-4 w-4 text-[#967BB6]" /> : <span className="text-[#967BB6]">•</span>}
                      <form
                        className="absolute left-[752px] top-24 h-[707px] w-[636px] overflow-hidden rounded-[32px] border-2 border-[#967BB6] bg-white shadow-[0_30px_60px_-12px_rgba(150,123,182,0.40)]"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const form = e.currentTarget;
                          const formData = new FormData(form);
                          const data = {
                            name: formData.get("name"),
                            phone: formData.get("phone"),
                            eventType: formData.get("eventType"),
                            guests: formData.get("guests"),
                            date: formData.get("date"),
                            time: formData.get("time"),
                            details: formData.get("details"),
                          };
                          // Simple validation
                          if (!data.name || !data.phone || !data.eventType || !data.guests || !data.date || !data.time) {
                            alert("Por favor, preencha todos os campos obrigatórios.");
                            return;
                          }
                          try {
                            const res = await fetch("/api/atelie-quote", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(data),
                            });
                            if (res.ok) {
                              alert("Pedido enviado com sucesso!");
                              form.reset();
                            } else {
                              alert("Erro ao enviar pedido. Tente novamente.");
                            }
                          } catch {
                            alert("Erro de rede. Tente novamente.");
                          }
                        }}
                      >
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-[#967BB6]/20 pt-6 text-xs text-[#967BB6]/50">
            <p>{c.footer_copyright ?? "© 2026 Atelie de Doces - Uma marca do grupo DLM"}</p>
          </div>
        </div>

        <a
          href="https://wa.me/244923456789"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-7 right-7 z-50 inline-flex h-[70px] w-[70px] items-center justify-center rounded-[35px] border-[3px] border-white bg-[#25D366] text-white shadow-[0_10px_30px_-5px_#25D366]"
          aria-label="Abrir WhatsApp"
        >
          <WhatsAppSvgIcon className="h-8 w-8" />
        </a>
      </footer>
    </div>
  );
}
