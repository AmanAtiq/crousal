import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  Clock3Icon,
  FacebookIcon,
  InstagramIcon,
  SendIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import RichTextContent from "@/components/RichTextContent";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";
import { normalizeNavLabel } from "@/lib/nav";

type GalleryCard = {
  tag: string;
  title: string;
  image: string;
  large?: boolean;
};

type EventCard = {
  day: string;
  month: string;
  title: string;
  place: string;
};

type FeatureCard = {
  title: string;
  body: string;
};

type TestimonialCard = {
  initials: string;
  name: string;
  meta: string;
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
    <path d="M15.4688 0.84375C15.8125 0.9375 16.0625 1.21875 16.0625 1.5625C16.0625 9.59375 9.5625 16.0625 1.5625 16.0625C1.1875 16.0625 0.90625 15.8438 0.8125 15.5L0.0625 12.25C0 11.9062 0.15625 11.5312 0.5 11.375L4 9.875C4.3125 9.75 4.65625 9.84375 4.875 10.0938L6.4375 12C8.875 10.8438 10.8438 8.84375 11.9688 6.46875L10.0625 4.90625C9.8125 4.6875 9.71875 4.34375 9.84375 4.03125L11.3438 0.53125C11.5 0.1875 11.875 0 12.2188 0.09375L15.4688 0.84375Z" fill="currentColor"/>
  </svg>
);

const WhatsAppSvgIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11.875 2.0625C13.1875 3.375 14 5.09375 14 6.96875C14 10.7812 10.8125 13.9062 6.96875 13.9062C5.8125 13.9062 4.6875 13.5938 3.65625 13.0625L0 14L0.96875 10.4062C0.375 9.375 0.03125 8.1875 0.03125 6.9375C0.03125 3.125 3.15625 0 6.96875 0C8.84375 0 10.5938 0.75 11.875 2.0625ZM6.96875 12.7188C10.1562 12.7188 12.8125 10.125 12.8125 6.96875C12.8125 5.40625 12.1562 3.96875 11.0625 2.875C9.96875 1.78125 8.53125 1.1875 7 1.1875C3.8125 1.1875 1.21875 3.78125 1.21875 6.9375C1.21875 8.03125 1.53125 9.09375 2.09375 10.0312L2.25 10.25L1.65625 12.375L3.84375 11.7812L4.03125 11.9062C4.9375 12.4375 5.9375 12.7188 6.96875 12.7188ZM10.1562 8.40625C10.3125 8.5 10.4375 8.53125 10.4688 8.625C10.5312 8.6875 10.5312 9.03125 10.375 9.4375C10.2188 9.84375 9.53125 10.2188 9.21875 10.25C8.65625 10.3438 8.21875 10.3125 7.125 9.8125C5.375 9.0625 4.25 7.3125 4.15625 7.21875C4.0625 7.09375 3.46875 6.28125 3.46875 5.40625C3.46875 4.5625 3.90625 4.15625 4.0625 3.96875C4.21875 3.78125 4.40625 3.75 4.53125 3.75C4.625 3.75 4.75 3.75 4.84375 3.75C4.96875 3.75 5.09375 3.71875 5.25 4.0625C5.375 4.40625 5.75 5.25 5.78125 5.34375C5.8125 5.4375 5.84375 5.53125 5.78125 5.65625C5.46875 6.3125 5.09375 6.28125 5.28125 6.59375C5.96875 7.75 6.625 8.15625 7.65625 8.65625C7.8125 8.75 7.90625 8.71875 8.03125 8.625C8.125 8.5 8.46875 8.09375 8.5625 7.9375C8.6875 7.75 8.8125 7.78125 8.96875 7.84375C9.125 7.90625 9.96875 8.3125 10.1562 8.40625Z" fill="currentColor"/>
  </svg>
);

const WhatsAppCircle44Icon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="1" width="42" height="42" rx="21" stroke="#FF8C00" strokeOpacity="0.3" strokeWidth="2"/>
    <path d="M27.8401 15.2651C29.4151 16.8401 30.3901 18.9026 30.3901 21.1526C30.3901 25.7276 26.5651 29.4776 21.9526 29.4776C20.5651 29.4776 19.2151 29.1026 17.9776 28.4651L13.5901 29.5901L14.7526 25.2776C14.0401 24.0401 13.6276 22.6151 13.6276 21.1151C13.6276 16.5401 17.3776 12.7901 21.9526 12.7901C24.2026 12.7901 26.3026 13.6901 27.8401 15.2651ZM21.9526 28.0526C25.7776 28.0526 28.9651 24.9401 28.9651 21.1526C28.9651 19.2776 28.1776 17.5526 26.8651 16.2401C25.5526 14.9276 23.8276 14.2151 21.9901 14.2151C18.1651 14.2151 15.0526 17.3276 15.0526 21.1151C15.0526 22.4276 15.4276 23.7026 16.1026 24.8276L16.2901 25.0901L15.5776 27.6401L18.2026 26.9276L18.4276 27.0776C19.5151 27.7151 20.7151 28.0526 21.9526 28.0526ZM25.7776 22.8776C25.9651 22.9901 26.1151 23.0276 26.1526 23.1401C26.2276 23.2151 26.2276 23.6276 26.0401 24.1151C25.8526 24.6026 25.0276 25.0526 24.6526 25.0901C23.9776 25.2026 23.4526 25.1651 22.1401 24.5651C20.0401 23.6651 18.6901 21.5651 18.5776 21.4526C18.4651 21.3026 17.7526 20.3276 17.7526 19.2776C17.7526 18.2651 18.2776 17.7776 18.4651 17.5526C18.6526 17.3276 18.8776 17.2901 19.0276 17.2901C19.1401 17.2901 19.2901 17.2901 19.4026 17.2901C19.5526 17.2901 19.7026 17.2526 19.8901 17.6651C20.0401 18.0776 20.4901 19.0901 20.5276 19.2026C20.5651 19.3151 20.6026 19.4276 20.5276 19.5776C20.1526 20.3651 19.7026 20.3276 19.9276 20.7026C20.7526 22.0901 21.5401 22.5776 22.7776 23.1776C22.9651 23.2901 23.0776 23.2526 23.2276 23.1401C23.3401 22.9901 23.7526 22.5026 23.8651 22.3151C24.0151 22.0901 24.1651 22.1276 24.3526 22.2026C24.5401 22.2776 25.5526 22.7651 25.7776 22.8776Z" fill="#CBB89E"/>
  </svg>
);

const LocationSvgIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5.375 15.6875C0.8125 9.125 0 8.4375 0 6C0 2.6875 2.65625 0 6 0C9.3125 0 12 2.6875 12 6C12 8.4375 11.1562 9.125 6.59375 15.6875C6.3125 16.125 5.65625 16.125 5.375 15.6875ZM6 8.5C7.375 8.5 8.5 7.40625 8.5 6C8.5 4.625 7.375 3.5 6 3.5C4.59375 3.5 3.5 4.625 3.5 6C3.5 7.40625 4.59375 8.5 6 8.5Z" fill="currentColor"/>
  </svg>
);

const LocationRealtimeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g filter="url(#foodtruck-location-realtime-shadow)">
      <rect x="30" y="30" width="80" height="80" rx="40" fill="#FF8C00" shapeRendering="crispEdges" />
      <path d="M68.4375 89.2188C57.0312 72.8125 55 71.0938 55 65C55 56.7188 61.6406 50 70 50C78.2812 50 85 56.7188 85 65C85 71.0938 82.8906 72.8125 71.4844 89.2188C70.7812 90.3125 69.1406 90.3125 68.4375 89.2188ZM70 71.25C73.4375 71.25 76.25 68.5156 76.25 65C76.25 61.5625 73.4375 58.75 70 58.75C66.4844 58.75 63.75 61.5625 63.75 65C63.75 68.5156 66.4844 71.25 70 71.25Z" fill="white" />
    </g>
    <defs>
      <filter id="foodtruck-location-realtime-shadow" x="0" y="0" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.54902 0 0 0 0 0 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_306" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_306" result="shape" />
      </filter>
    </defs>
  </svg>
);

const FeatureScheduleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="80" height="80" rx="40" fill="url(#foodtruck-feature-schedule-gradient)" />
    <path d="M40.1969 24.5C48.7594 24.5 55.6969 31.4375 55.6969 40C55.6969 48.5625 48.7594 55.5 40.1969 55.5C31.6344 55.5 24.6969 48.5625 24.6969 40C24.6969 31.4375 31.6344 24.5 40.1969 24.5ZM45.9469 44.0625C46.0719 43.9375 46.1969 43.6875 46.1969 43.4375C46.1969 43.125 46.0094 42.875 45.8219 42.6875L42.1969 40V31C42.1969 30.5 41.6969 30 41.1969 30H39.1969C38.6344 30 38.1969 30.5 38.1969 31V40.75C38.1969 41.5625 38.5094 42.25 39.1344 42.6875L43.3219 45.8125C43.4469 45.9375 43.6969 46.0625 43.8844 46.0625C44.2594 46.0625 44.5094 45.875 44.6969 45.625L45.9469 44.0625Z" fill="#FF8C00" />
    <defs>
      <linearGradient id="foodtruck-feature-schedule-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF8C00" stopOpacity="0.1" />
        <stop offset="1" stopColor="#FF8C00" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

const FeatureAvailabilityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="80" height="80" rx="40" fill="url(#foodtruck-feature-availability-gradient)" />
    <path d="M53.4344 34H26.9344C26.4969 34 26.1844 33.6875 26.1844 33.25V31C26.1844 29.375 27.4969 28 29.1844 28H32.1844V24.75C32.1844 24.375 32.4969 24 32.9344 24H35.4344C35.8094 24 36.1844 24.375 36.1844 24.75V28H44.1844V24.75C44.1844 24.375 44.4969 24 44.9344 24H47.4344C47.8094 24 48.1844 24.375 48.1844 24.75V28H51.1844C52.8094 28 54.1844 29.375 54.1844 31V33.25C54.1844 33.6875 53.8094 34 53.4344 34ZM26.9344 36H53.4344C53.8094 36 54.1844 36.375 54.1844 36.75V53C54.1844 54.6875 52.8094 56 51.1844 56H29.1844C27.4969 56 26.1844 54.6875 26.1844 53V36.75C26.1844 36.375 26.4969 36 26.9344 36ZM47.7469 42L45.9969 40.25C45.6844 39.9375 45.1844 39.9375 44.9344 40.25L38.3094 46.8125L35.4344 43.9375C35.1219 43.625 34.6219 43.625 34.3719 43.9375L32.5594 45.6875C32.3094 46 32.3094 46.4375 32.5594 46.75L37.7469 51.9375C37.9969 52.25 38.4969 52.25 38.8094 51.9375L47.7469 43.0625C47.9969 42.8125 47.9969 42.3125 47.7469 42Z" fill="#FF8C00" />
    <defs>
      <linearGradient id="foodtruck-feature-availability-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF8C00" stopOpacity="0.1" />
        <stop offset="1" stopColor="#FF8C00" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

const FeatureVersatilityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M38.9998 22C39.4998 22 39.9998 22.5 39.9998 23V25C39.9998 25.5625 39.4998 26 38.9998 26H35.9998C35.9998 29.3125 33.3123 32 29.9998 32C26.6873 32 23.9998 29.3125 23.9998 26H15.9998C15.9998 29.3125 13.3123 32 9.99981 32C6.68731 32 3.99981 29.3125 3.99981 26H2.99981C1.31231 26 -0.00019455 24.6875 -0.00019455 23V3C-0.00019455 1.375 1.31231 0 2.99981 0H22.9998C24.6248 0 25.9998 1.375 25.9998 3V6H28.7498C29.4998 6 30.3123 6.375 30.8748 6.9375L37.0623 13.125C37.6248 13.6875 37.9998 14.5 37.9998 15.25V22H38.9998ZM9.99981 29C11.6248 29 12.9998 27.6875 12.9998 26C12.9998 24.375 11.6248 23 9.99981 23C8.31231 23 6.99981 24.375 6.99981 26C6.99981 27.6875 8.31231 29 9.99981 29ZM29.9998 29C31.6248 29 32.9998 27.6875 32.9998 26C32.9998 24.375 31.6248 23 29.9998 23C28.3123 23 26.9998 24.375 26.9998 26C26.9998 27.6875 28.3123 29 29.9998 29ZM34.9998 16V15.25L28.7498 9H25.9998V16H34.9998Z" fill="#FF8C00" />
  </svg>
);

const LocationTimeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.75 0C12.0312 0 15.5 3.46875 15.5 7.75C15.5 12.0312 12.0312 15.5 7.75 15.5C3.46875 15.5 0 12.0312 0 7.75C0 3.46875 3.46875 0 7.75 0ZM10.625 9.78125C10.6875 9.71875 10.75 9.59375 10.75 9.46875C10.75 9.3125 10.6562 9.1875 10.5625 9.09375L8.75 7.75V3.25C8.75 3 8.5 2.75 8.25 2.75H7.25C6.96875 2.75 6.75 3 6.75 3.25V8.125C6.75 8.53125 6.90625 8.875 7.21875 9.09375L9.3125 10.6562C9.375 10.7188 9.5 10.7812 9.59375 10.7812C9.78125 10.7812 9.90625 10.6875 10 10.5625L10.625 9.78125Z" fill="#FF8C00" />
  </svg>
);

const ReservationCheckmarkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.6 9.3C18.6 14.4375 14.4 18.6 9.29995 18.6C4.16245 18.6 -4.88162e-05 14.4375 -4.88162e-05 9.3C-4.88162e-05 4.2 4.16245 -6.55651e-07 9.29995 -6.55651e-07C14.4 -6.55651e-07 18.6 4.2 18.6 9.3ZM8.21245 14.25L15.1125 7.35C15.3375 7.125 15.3375 6.7125 15.1125 6.4875L14.25 5.6625C14.025 5.4 13.65 5.4 13.425 5.6625L7.79995 11.2875L5.13745 8.6625C4.91245 8.4 4.53745 8.4 4.31245 8.6625L3.44995 9.4875C3.22495 9.7125 3.22495 10.125 3.44995 10.35L7.34995 14.25C7.57495 14.475 7.98745 14.475 8.21245 14.25Z" fill="#FF8C00" />
  </svg>
);

const ReservationCalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0 14.5V6H14V14.5C14 15.3438 13.3125 16 12.5 16H1.5C0.65625 16 0 15.3438 0 14.5ZM10 8.375V9.625C10 9.84375 10.1562 10 10.375 10H11.625C11.8125 10 12 9.84375 12 9.625V8.375C12 8.1875 11.8125 8 11.625 8H10.375C10.1562 8 10 8.1875 10 8.375ZM10 12.375V13.625C10 13.8438 10.1562 14 10.375 14H11.625C11.8125 14 12 13.8438 12 13.625V12.375C12 12.1875 11.8125 12 11.625 12H10.375C10.1562 12 10 12.1875 10 12.375ZM6 8.375V9.625C6 9.84375 6.15625 10 6.375 10H7.625C7.8125 10 8 9.84375 8 9.625V8.375C8 8.1875 7.8125 8 7.625 8H6.375C6.15625 8 6 8.1875 6 8.375ZM6 12.375V13.625C6 13.8438 6.15625 14 6.375 14H7.625C7.8125 14 8 13.8438 8 13.625V12.375C8 12.1875 7.8125 12 7.625 12H6.375C6.15625 12 6 12.1875 6 12.375ZM2 8.375V9.625C2 9.84375 2.15625 10 2.375 10H3.625C3.8125 10 4 9.84375 4 9.625V8.375C4 8.1875 3.8125 8 3.625 8H2.375C2.15625 8 2 8.1875 2 8.375ZM2 12.375V13.625C2 13.8438 2.15625 14 2.375 14H3.625C3.8125 14 4 13.8438 4 13.625V12.375C4 12.1875 3.8125 12 3.625 12H2.375C2.15625 12 2 12.1875 2 12.375ZM12.5 2C13.3125 2 14 2.6875 14 3.5V5H0V3.5C0 2.6875 0.65625 2 1.5 2H3V0.5C3 0.25 3.21875 0 3.5 0H4.5C4.75 0 5 0.25 5 0.5V2H9V0.5C9 0.25 9.21875 0 9.5 0H10.5C10.75 0 11 0.25 11 0.5V2H12.5Z" fill="#FF8C00" />
  </svg>
);

const galleryCards: GalleryCard[] = [
  {
    tag: "Festivais",
    title: "Festival do Mangal 2025",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80",
    large: true,
  },
  {
    tag: "Casamentos",
    title: "Ana e Joao",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  },
  {
    tag: "Corporativo",
    title: "Unitel After Work",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
  },
  {
    tag: "Street Food",
    title: "Ilha do Cabo",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80",
  },
  {
    tag: "Festas",
    title: "Aniversario - Luanda Sul",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=1200&q=80",
  },
];

const events: EventCard[] = [
  { day: "15", month: "MAR", title: "Festival da Cerveja", place: "Praia do Bispo" },
  { day: "22", month: "MAR", title: "Casamento - Sofia e Pedro", place: "Talatona (privado)" },
  { day: "28", month: "MAR", title: "Food Truck Fest", place: "Cidade Alta" },
];

const menu: Array<[string, string]> = [
  ["Pastel de Nata", "350 Kz"],
  ["Bolo de Bolacha (fatia)", "400 Kz"],
  ["Mil-folhas", "450 Kz"],
  ["Brigadeiros (caixa 6)", "500 Kz"],
  ["Baguete Doce", "300 Kz"],
  ["Café + Pastel de Nata", "500 Kz"],
] as const;

const menuEmojis = ["🥐", "🍰", "🍮", "🍫", "🥖", "☕"] as const;

const featureCards: FeatureCard[] = [
  { title: "Horario Movel", body: "Qui-Sab: 17h-23h\nDom: 15h-21h\nSeg-Qua: eventos privados" },
  { title: "Disponibilidade", body: "Festas, casamentos, eventos corporativos.\nCapacidade para 50-500 pessoas." },
  { title: "Versatilidade", body: "Levamos a docaria DLM a qualquer lugar de Luanda.\nSetup em 30 minutos." },
];

const galleryFilters = ["Todos", "Festivais", "Casamentos", "Empresas", "Street Food"] as const;

const reservationHighlights = [
  "Capacidade: 50-500 pessoas",
  "Menu personalizavel com degustacao previa",
  "Equipa dedicada e atendimento premium",
  "Setup completo em 30 minutos",
] as const;

const testimonialCards: TestimonialCard[] = [
  { initials: "MC", name: "Mariana Costa", meta: "Casamento - 180 convidados", quote: "O Food Truck DLM foi o sucesso do nosso casamento. Os doces sao incriveis e a equipa super profissional." },
  { initials: "PL", name: "Paulo Lopes", meta: "Unitel - 300 pessoas", quote: "Contratamos para o festival da empresa e foi um enorme sucesso. Atendimento rapido e sabor impecavel." },
  { initials: "AS", name: "Ana Santos", meta: "Eventos privados", quote: "Ja nos seguiram em 3 festas diferentes. O conceito e fantastico e o design do food truck e lindissimo." },
];

export default function FoodTruck() {
  const g = useContent("global");
  const c = useContent("foodtruck");
  const heroImage =
    c.hero_image ??
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=2200&q=80";
  const features = parseContentJson(c.features_json, featureCards);
  const filters = parseContentJson(c.gallery_filters_json, [...galleryFilters]);
  const gallery = parseContentJson(c.gallery_cards_json, galleryCards);
  const upcomingEvents = parseContentJson(c.events_json, events);
  const reservationPoints = parseContentJson(c.reservation_highlights_json, [...reservationHighlights]);
  const testimonials = parseContentJson(c.testimonials_json, testimonialCards);
  const menuItems = parseContentJson(c.menu_items_json, menu);
  const footerContact = parseContentJson<FooterContactItem[]>(c.footer_contact_json, []);
  const featureIcons = [FeatureScheduleIcon, FeatureAvailabilityIcon, FeatureVersatilityIcon] as const;
  const contactIconMap = {
    phone: CallSvgIcon,
    whatsapp: WhatsAppSvgIcon,
    email: MailSvgIcon,
    location: LocationSvgIcon,
  } as const;
  const navLinks = parseContentJson<Array<{ label: string; href: string }>>(g.nav_links_json, [
    { label: "Início", href: "/" },
    { label: "Food Truck", href: "/food-truck" },
    { label: "Delícias", href: "/delicias" },
    { label: "Ateliê", href: "/atelie" },
    { label: "Contacto", href: "/contacto" },
  ]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf5ed] text-[#4d3522]">
      <section
        className="relative min-h-[720px] border-b border-[#ff8c00]/30 text-white"
        style={{
          backgroundImage: `linear-gradient(116deg, rgba(0,0,0,0.9) 0%, rgba(255,140,0,0.28) 50%, rgba(0,0,0,0.72) 100%), url('${heroImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
      <header className="absolute inset-x-0 top-0 z-50 border-b border-[#ff8c00]/30 bg-[#2C1C0F]/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-4">
          <Link to="/food-truck" className="flex shrink-0 items-center gap-3">
            <BrandMark color="#FF8C00" clipId="foodtruck-nav-clip" />
            <span className="font-playfair text-xl font-bold tracking-wider text-white">FOOD TRUCK</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-inter text-[11px] font-medium uppercase tracking-[2.24px] transition-colors ${
                  item.href === "/food-truck"
                    ? "relative text-white after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:bg-[#FF8C00]"
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
              className="rounded-full border border-[#FF8C00]/80 bg-[#FF8C00]/10 px-8 py-2.5 font-inter text-[11px] font-semibold uppercase tracking-[2.24px] text-[#FF8C00] transition-colors hover:bg-[#FF8C00]/20"
            >
              {g.nav_smart_quote_label ?? "Smart Quote"}
            </Link>
          </div>
        </div>
      </header>
     {/* 1. Added justify-center to move the container to the middle of the screen */}
<div className="mx-auto flex min-h-[720px] w-full max-w-[1440px] items-center justify-center px-5 pb-20 pt-36">
  
  {/* 2. Added mx-auto to center the box, but kept text-left for alignment */}
  <div className="w-full max-w-[840px] text-left mx-auto">
    
    {/* 3. Kept items-center for the badges, but they stay on the left */}
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <span className="rounded-full border border-[#ff8c00]/30 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[2.24px] text-[#ff8c00]">
        {c.hero_badge_1 ?? "DLM Group"}
      </span>
      <span className="rounded-full border border-[#ff8c00]/30 bg-[#ff8c00]/15 px-6 py-2 text-[12.8px] font-semibold uppercase tracking-[5.12px] text-[#ff8c00]">
        {c.hero_badge_2 ?? "Docaria sobre rodas"}
      </span>
    </div>

    <h1 className="font-playfair text-[clamp(54px,11vw,112px)] font-extrabold leading-[0.95] tracking-[-2px] text-white drop-shadow-[0_2px_20px_rgba(255,140,0,0.5)]">
      {c.hero_heading ?? "Food Truck"}
    </h1>
    <p className="mt-2 font-cormorant text-[clamp(24px,4.2vw,40px)] font-bold uppercase tracking-[0.2em] text-[#ff8c00] [text-shadow:0_0_20px_#ff8c00]">
      {c.hero_subheading ?? "Sweetness on Wheels"}
    </p>
    
    <RichTextContent
      className="mt-8 max-w-[840px] font-cormorant text-[clamp(24px,3vw,32px)] italic leading-[1.45] text-white/95 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]"
      content={
        c.hero_description ??
        "Energetic, Fast, Social - A docaria DLM vai aonde voce estiver."
      }
    />

    {/* 4. Buttons remain flex-start (left) by default */}
    <div className="mt-9 flex flex-wrap gap-4">
      <a href="#location" className="inline-flex h-[61px] items-center rounded-full bg-[#ff8c00] px-9 text-[12.8px] font-bold uppercase tracking-[2.56px] text-white shadow-[0_10px_30px_-5px_#ff8c00]">
        <LocationSvgIcon className="mr-3 h-4 w-4" />
        Onde estamos hoje
      </a>
      <a href="#reserva" className="inline-flex h-[61px] items-center rounded-full border-2 border-[#ff8c00] px-9 text-[12.8px] font-bold uppercase tracking-[2.56px] text-white">
        <CalendarIcon className="mr-3 h-4 w-4" />
        Reservar evento
      </a>
    </div>
  </div>
</div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center md:block">
          <p className="text-[10px] uppercase tracking-[2.88px] text-white/95">Deslizar</p>
          <ChevronRightIcon className="mx-auto mt-2 h-5 w-5 rotate-90 text-[#ff8c00]" />
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1440px] px-5">
        <section id="location" className="relative -mt-12 overflow-hidden rounded-[32px] border-[3px] border-[#ff8c00] bg-white p-6 shadow-[0_30px_60px_-12px_rgba(255,140,0,0.35)] md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.12)_0%,rgba(255,140,0,0)_70%)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <LocationRealtimeIcon className="h-24 w-24" />
              <div>
                <p className="text-[11.2px] font-semibold uppercase tracking-[2.24px] text-[#ff8c00]">{c.location_label ?? "Localizacao em tempo real"}</p>
                <h2 className="mt-1 font-playfair text-[clamp(28px,3.2vw,48px)] font-semibold leading-tight text-[#4d3522]">{c.location_title ?? "Praca da Independencia, Luanda"}</h2>
                <div className="mt-2 flex items-start gap-2 text-base font-light text-[#4d3522]">
                  <LocationTimeIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  <RichTextContent className="min-w-0" content={c.location_description ?? "Hoje ate as 22:00 - Amanha: Parque da Cidade (15h-23h)"} />
                </div>
              </div>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-[51px] items-center rounded-full bg-[#ff8c00] px-10 text-[12.8px] font-semibold tracking-[1.28px] text-white shadow-[0_10px_20px_-5px_#ff8c00]">
              {c.location_button ?? "Como chegar"}
            </a>
          </div>
        </section>

        <section className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = featureIcons[index] ?? FeatureScheduleIcon;
            return (
            <article key={item.title} className="rounded-[32px] border-2 border-[#ff8c00] bg-white p-8 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
              <span className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(255,140,0,0.1)_0%,rgba(255,140,0,0.2)_100%)]">
                <Icon className={index === 2 ? "h-8 w-10" : "h-20 w-20"} />
              </span>
              <h3 className="mt-6 font-playfair text-3xl font-bold leading-[1.5] tracking-[-0.48px] text-[#4d3522]">{item.title}</h3>
              <p className="mt-2 whitespace-pre-line text-base font-light leading-[1.8] text-[#4d3522]">{item.body}</p>
            </article>
          );})}
        </section>
      </main>

      <section className="mt-24 bg-[#f8f1e0] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <p className="text-center text-[11.2px] font-semibold uppercase tracking-[4.48px] text-[#ff8c00]">{c.gallery_label ?? "Galeria"}</p>
          <h2 className="mt-3 text-center font-playfair text-[clamp(38px,4vw,56px)] font-bold leading-[1.2] tracking-[-1.12px] text-[#4d3522]">{c.gallery_title ?? "Momentos sobre rodas"}</h2>
          <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#ff8c00] shadow-[0_0_15px_#ff8c00]" />

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {filters.map((label, index) => (
              <button
                key={label}
                className={`rounded-full border-2 px-5 py-2 text-[11.2px] font-bold uppercase tracking-[1.12px] ${
                  index === 0 ? "border-[#ff8c00] bg-[#ff8c00] text-white shadow-[0_10px_20px_-5px_#ff8c00]" : "border-[#ff8c00] text-[#ff8c00]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
            {gallery.map((item, idx) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl shadow-[0_20px_40px_-12px_rgba(255,140,0,0.25)] h-[316px] ${
                  item.large ? "md:col-span-2 md:row-span-2 md:h-[656px]" : ""
                }`}
              >
                <img src={item.image} alt={`food truck galeria ${idx + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,140,0,0.95)_0%,rgba(255,140,0,0)_60%)]" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[9.6px] font-semibold uppercase tracking-[1.92px] text-white/90">#{item.tag}</p>
                  <h3 className="mt-1 font-playfair text-2xl font-semibold">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <p className="text-center text-[11.2px] font-semibold uppercase tracking-[4.48px] text-[#ff8c00]">{c.events_label ?? "Agenda"}</p>
          <h2 className="mt-3 text-center font-playfair text-[clamp(38px,4vw,56px)] font-bold leading-[1.2] tracking-[-1.12px] text-[#4d3522]">{c.events_title ?? "Proximos Eventos"}</h2>
          <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#ff8c00] shadow-[0_0_15px_#ff8c00]" />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article key={event.title} className="overflow-hidden rounded-[32px] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <div className="bg-[#ff8c00] py-5 text-center text-white">
                  <p className="font-playfair text-[40px] font-extrabold leading-none">{event.day}</p>
                  <p className="mt-1 text-[14.4px] font-bold uppercase tracking-[2.88px]">{event.month}</p>
                </div>
                <div className="p-8">
                  <h3 className="text-[20.8px] font-bold text-[#4d3522]">{event.title}</h3>
                  <p className="mt-3 flex items-center text-base font-light text-[#4d3522]">
                    <LocationSvgIcon className="mr-2 h-4 w-4 text-[#ff8c00]" />
                    {event.place}
                  </p>
                  <button className="mt-6 inline-flex items-center text-[11.2px] font-bold uppercase tracking-[1.12px] text-[#ff8c00]">
                    Ver detalhes
                    <ArrowRightIcon className="ml-2 h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reserva" className="bg-[linear-gradient(121deg,#fff8f0_0%,#fff_100%)] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="relative mx-auto hidden h-[860px] w-full max-w-[1440px] xl:block">
            <p className="absolute left-[52px] top-[203px] text-[11px] font-semibold uppercase leading-[16.8px] tracking-[0.4em] text-[#FF8C00]">Reservas</p>
            <h2 className="absolute left-[52px] top-[236px] w-[569px] font-playfair text-[40px] font-bold leading-[60px] tracking-[-0.02em] text-[#4D3522]">{c.reservation_title ?? "Leve o Food Truck ao seu evento"}</h2>
            <RichTextContent className="absolute left-[52px] top-[324px] w-[616px] text-base font-light leading-[28.8px] text-[#4D3522]" content={c.reservation_description ?? "Transforme o seu evento numa experiência inesquecível com a doçaria DLM sobre rodas. Atendemos casamentos, empresas, festivais e festas privadas."} />

            <div className="absolute left-[52px] top-[410px] flex w-[636px] flex-col gap-[19px] text-lg leading-[26.4px] text-[#4D3522]">
              {reservationPoints.map((item) => (
                <div key={item} className="relative h-[26px] w-[636px]">
                  <ReservationCheckmarkIcon className="absolute left-0 top-[3px] h-5 w-5" />
                  <p className="absolute left-10 top-0.5">{item}</p>
                </div>
              ))}
            </div>

            <div className="absolute left-[52px] top-[605px] inline-flex h-[72px] w-[636px] items-center rounded-2xl border-l-4 border-l-[#FF8C00] bg-[rgba(255,140,0,0.10)] pl-7 text-[#FF8C00]">
              <ReservationCalendarIcon className="h-4 w-4" />
              <p className="ml-3 text-base font-semibold leading-6">{c.reservation_banner ?? "Próximas datas disponíveis: 5, 6, 12, 13 Abril"}</p>
            </div>

            <form
              className="absolute left-[752px] top-24 h-[688px] w-[636px] rounded-[32px] border-2 border-[#FF8C00] bg-white shadow-[0_30px_60px_-12px_rgba(255,140,0,0.35)]"
              onSubmit={async (e) => {
                e.preventDefault();
       const form = e.currentTarget as HTMLFormElement;

// Access elements by casting them to HTMLInputElement or HTMLTextAreaElement
const name = (form.elements[0] as HTMLInputElement).value;
const phone = (form.elements[1] as HTMLInputElement).value;
const eventType = (form.elements[2] as HTMLSelectElement | HTMLInputElement).value;
const guests = (form.elements[3] as HTMLInputElement).value;
const date = (form.elements[4] as HTMLInputElement).value;
const time = (form.elements[5] as HTMLInputElement).value;
const details = (form.elements[6] as HTMLTextAreaElement | HTMLInputElement).value;
                try {
                  const res = await fetch("/api/foodtruck-quote", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, phone, eventType, guests, date, time, details }),
                  });
                  const data = await res.json();
                  if (res.ok) {
                    alert(data.message || "Pedido enviado com sucesso!");
                    form.reset();
                  } else {
                    alert(data.message || "Erro ao enviar pedido. Tente novamente.");
                  }
                } catch (err) {
                  alert("Erro ao enviar pedido. Tente novamente.");
                }
              }}
            >
              <h3 className="absolute left-[50px] top-[50px] font-playfair text-[32px] font-bold leading-[48px] tracking-[-0.02em] text-[#4D3522]">Pedir orçamento</h3>

              <div className="absolute left-[50px] top-[130px] grid w-[536px] grid-cols-2 gap-x-4 gap-y-3">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">Nome *
                  <input name="name" className="mt-2 h-14 w-full rounded-2xl border-2 border-[#EEE] px-[21px] text-base text-[#4D3522] placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="Seu nome completo" required />
                </label>

                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">WhatsApp *
                  <input name="phone" className="mt-2 h-14 w-full rounded-2xl border-2 border-[#EEE] px-[21px] text-base text-[#4D3522] placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="+244 900 000 000" required />
                </label>

                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">Tipo de Evento
                  <select name="eventType" aria-label="Tipo de Evento" title="Tipo de Evento" className="mt-2 h-[58px] w-full rounded-2xl border-2 border-[#EEE] px-[25px] text-base text-[#4D3522]">
                    <option>Casamento</option>
                    <option>Corporativo</option>
                    <option>Aniversario</option>
                    <option>Festival</option>
                  </select>
                </label>

                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">Nº Convidados
                  <select name="guests" aria-label="Numero de convidados" title="Numero de convidados" className="mt-2 h-[58px] w-full rounded-2xl border-2 border-[#EEE] px-[25px] text-base text-[#4D3522]">
                    <option>50-100</option>
                    <option>100-200</option>
                    <option>200-350</option>
                    <option>350-500</option>
                  </select>
                </label>

              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">
  Data
  <div className="relative mt-2">
    <input 
      name="date" 
      type="date" 
      className="h-[58px] w-full rounded-2xl border-2 border-[#EEE] px-[21px] pr-11 text-base text-[#4D3522] placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal focus:border-[#FF8C00] outline-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:opacity-0 cursor-pointer" 
      required 
    />
    <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
  </div>
</label>

<label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">
  Horario
  <div className="relative mt-2">
    <input 
      name="time" 
      type="time" 
      className="h-[59px] w-full rounded-2xl border-2 border-[#EEE] px-[21px] pr-11 text-base text-[#4D3522] placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal focus:border-[#FF8C00] outline-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:opacity-0 cursor-pointer" 
      required 
    />
    <Clock3Icon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
  </div>
</label>
                <label className="col-span-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">Mensagem adicional
                  <textarea name="details" className="mt-2 h-24 w-full resize-none rounded-2xl border-2 border-[#EEE] px-[21px] py-[18px] text-base text-[#4D3522] placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="Localizacao, preferencias..." />
                </label>

                <button type="submit" className="col-span-2 mt-1 inline-flex h-[53px] w-full items-center justify-center gap-2 rounded-[60px] bg-[#FF8C00] text-[13px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_20px_-5px_#FF8C00]">
                  <SendIcon className="h-4 w-4" />
                  Solicitar orçamento
                </button>
              </div>
            </form>
          </div>

          <div className="xl:hidden">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="pt-8">
                <p className="text-[11.2px] font-semibold uppercase tracking-[4.48px] text-[#ff8c00]">{c.reservation_label ?? "Reservas"}</p>
                <h2 className="mt-3 font-playfair text-[clamp(34px,3.2vw,40px)] font-bold leading-[1.35] tracking-[-0.8px] text-[#4d3522]">{c.reservation_title ?? "Leve o Food Truck ao seu evento"}</h2>
                <RichTextContent className="mt-5 max-w-[616px] text-base font-light leading-[1.8] text-[#4d3522]" content={c.reservation_description ?? "Transforme o seu evento numa experiência inesquecível com a doçaria DLM sobre rodas. Atendemos casamentos, empresas, festivais e festas privadas."} />

                <ul className="mt-8 space-y-4 text-[17.6px] leading-[1.5] text-[#4d3522]">
                  {reservationPoints.map((item) => (
                    <li key={item} className="flex items-center gap-3"><ReservationCheckmarkIcon className="h-5 w-5" />{item}</li>
                  ))}
                </ul>

                <div className="mt-8 flex max-w-[640px] items-center rounded-2xl border-l-4 border-l-[#FF8C00] bg-[#ff8c00]/10 px-6 py-5 text-[#ff8c00]">
                  <ReservationCalendarIcon className="mr-3 h-4 w-4" />
                  <span className="font-semibold">{c.reservation_banner ?? "Próximas datas disponíveis: 5, 6, 12, 13 Abril"}</span>
                </div>
              </div>

              <form className="rounded-[32px] border-2 border-[#ff8c00] bg-white p-8 shadow-[0_30px_60px_-12px_rgba(255,140,0,0.35)] md:p-12">
                <h3 className="font-playfair text-5xl font-bold tracking-[-0.64px] text-[#4d3522]">Pedir orçamento</h3>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input className="h-14 rounded-2xl border-2 border-[#eee] px-5 text-base placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="Seu nome completo" />
                  <input className="h-14 rounded-2xl border-2 border-[#eee] px-5 text-base placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="+244 900 000 000" />
                  <select aria-label="Tipo de evento" title="Tipo de evento" className="h-14 rounded-2xl border-2 border-[#eee] px-5 text-base">
                    <option>Casamento</option>
                    <option>Corporativo</option>
                    <option>Aniversario</option>
                    <option>Festival</option>
                  </select>
                  <select aria-label="Numero de convidados" title="Numero de convidados" className="h-14 rounded-2xl border-2 border-[#eee] px-5 text-base">
                    <option>50-100</option>
                    <option>100-200</option>
                    <option>200-350</option>
                    <option>350-500</option>
                  </select>
                  <input className="h-14 rounded-2xl border-2 border-[#eee] px-5 text-base placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="dd/mm/yyyy" />
                  <input className="h-14 rounded-2xl border-2 border-[#eee] px-5 text-base placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="--:--" />
                </div>
                <textarea className="mt-4 min-h-[96px] w-full rounded-2xl border-2 border-[#eee] px-5 py-4 text-base placeholder:font-sans placeholder:text-[#757575] placeholder:text-[16px] placeholder:font-normal" placeholder="Localizacao, preferencias..." />
                <button className="mt-6 inline-flex h-[53px] w-full items-center justify-center gap-2 rounded-full bg-[#ff8c00] text-[12.8px] font-bold uppercase tracking-[2.56px] text-white shadow-[0_10px_20px_-5px_#ff8c00]">
                  <SendIcon className="h-4 w-4" />
                  Solicitar orçamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <p className="text-center text-[11.2px] font-semibold uppercase tracking-[4.48px] text-[#ff8c00]">{c.testimonials_label ?? "Depoimentos"}</p>
          <h2 className="mt-3 text-center font-playfair text-[clamp(38px,4vw,56px)] font-bold leading-[1.2] tracking-[-1.12px] text-[#4d3522]">{c.testimonials_title ?? "O que dizem os clientes"}</h2>
          <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#ff8c00] shadow-[0_0_15px_#ff8c00]" />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="relative rounded-[32px] bg-white p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <p className="text-base italic font-light leading-[1.8] text-[#4d3522]">"{item.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff8c00] text-xl font-bold text-white">{item.initials}</span>
                  <div>
                    <p className="font-semibold text-[#4d3522]">{item.name}</p>
                    <p className="text-[12.8px] font-light text-[#4d3522]">{item.meta}</p>
                  </div>
                </div>
                <span className="pointer-events-none absolute right-6 top-1 text-[96px] text-[#ff8c00]/10">&quot;</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f1e0] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="relative mx-auto hidden h-[900px] w-full max-w-[1400px] xl:block">
            <p className="absolute left-1/2 top-0 w-[188px] -translate-x-1/2 text-center text-[11px] font-semibold uppercase leading-[16.8px] tracking-[0.4em] text-[#FF8C00]">{c.menu_label ?? "Menu sobre rodas"}</p>
            <h2 className="absolute left-1/2 top-[33px] w-[512px] -translate-x-1/2 text-center font-playfair text-[56px] font-bold leading-[84px] tracking-[-0.02em] text-[#4D3522]">{c.menu_title ?? "Doces que encantam"}</h2>
            <div className="absolute left-1/2 top-[133px] h-[3px] w-[100px] -translate-x-1/2 bg-[#FF8C00] shadow-[0_0_15px_#FF8C00]" />

            <div className="absolute left-1/2 top-[200px] h-[510px] w-[900px] -translate-x-1/2 rounded-[32px] border-[3px] border-[#FF8C00] bg-white shadow-[0_30px_60px_-12px_rgba(255,140,0,0.35)]">
              {menuItems.map(([name, price], index) => (
                <div key={name} className="absolute left-[51px] h-[68px] w-[798px] border-b border-dashed border-[#FF8C00] last:border-none" style={{ top: `${51 + index * 68}px` }}>
                  <p className="absolute left-0 top-[21px] text-lg font-light leading-[26.4px] text-[#4D3522]">{menuEmojis[index]} {name}</p>
                  <p className="absolute right-0 top-[19px] text-[19px] font-bold leading-[28.8px] text-[#FF8C00]">{price}</p>
                </div>
              ))}
            </div>

            <button className="absolute left-1/2 top-[725px] inline-flex h-[50px] w-[259px] -translate-x-1/2 items-center justify-center rounded-[40px] border-2 border-[#FF8C00] bg-[#FF8C00] text-[11px] font-bold uppercase tracking-[0.1em] text-white">
              Ver menu completo
              <ArrowRightIcon className="ml-2 h-3 w-3" />
            </button>

            <a
              href="https://wa.me/244923456789"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-0 top-[821px] inline-flex h-[70px] w-[70px] items-center justify-center rounded-[35px] border-[3px] border-white bg-[#25D366] text-white shadow-[0_10px_30px_-5px_#25D366]"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppSvgIcon className="h-8 w-8" />
            </a>
          </div>

          <div className="xl:hidden">
            <p className="text-center text-[11.2px] font-semibold uppercase tracking-[4.48px] text-[#ff8c00]">{c.menu_label ?? "Menu sobre rodas"}</p>
            <h2 className="mt-3 text-center font-playfair text-[clamp(38px,4vw,56px)] font-bold leading-[1.2] tracking-[-1.12px] text-[#4d3522]">{c.menu_title ?? "Doces que encantam"}</h2>
            <div className="mx-auto mt-3 h-[3px] w-[100px] bg-[#ff8c00] shadow-[0_0_15px_#ff8c00]" />

            <div className="mx-auto mt-14 max-w-[940px] rounded-[32px] border-[3px] border-[#ff8c00] bg-white p-8 shadow-[0_30px_60px_-12px_rgba(255,140,0,0.35)] md:p-12">
              {menuItems.map(([name, price], index) => (
                <div key={name} className="flex items-center justify-between border-b border-[#eee] py-5 text-[17.6px] font-light text-[#4d3522] last:border-none">
                  <p>{menuEmojis[index]} {name}</p>
                  <p className="text-[19.2px] font-bold text-[#ff8c00]">{price}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="inline-flex h-[50px] items-center rounded-full border-2 border-[#ff8c00] bg-[#ff8c00] px-8 text-[11.2px] font-bold uppercase tracking-[1.12px] text-white">
                Ver menu completo
                <ArrowRightIcon className="ml-2 h-3 w-3" />
              </button>
            </div>

            <a
              href="https://wa.me/244923456789"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-8 right-8 z-50 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white bg-[#25d366] text-white shadow-[0_10px_30px_-5px_#25d366]"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppSvgIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-[5px] border-[#ff8c00] bg-[#2c1c0f] py-20 text-[#cbb89e]">
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <p className="font-playfair text-3xl font-bold text-white">FOOD TRUCK</p>
              <p className="mt-1 text-[9.6px] font-semibold uppercase tracking-[2.88px] text-[#ff8c00]">DLM Group</p>
              <p className="mt-6 max-w-[420px] text-base font-light leading-[1.8]">
                {c.footer_description ?? "Docaria artesanal sobre rodas. Levamos a tradicao portuguesa a todos os eventos em Luanda com energia, velocidade e sabor."}
              </p>
              <div className="mt-7 flex gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ff8c00]/30"><InstagramIcon className="h-5 w-5" /></span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ff8c00]/30"><FacebookIcon className="h-5 w-5" /></span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ff8c00]/30"><WhatsAppSvgIcon className="h-5 w-5" /></span>
                <span className="inline-flex h-11 w-11 items-center justify-center"><WhatsAppCircle44Icon /></span>
              </div>
            </div>

            <div>
              <h4 className="font-cormorant text-[19.2px] font-semibold uppercase tracking-[3.84px] text-[#ff8c00]">Marcas</h4>
              <ul className="mt-5 space-y-3 text-base font-light">
                <li>Delicias da Madalena</li>
                <li>Food Truck</li>
                <li>Atelie de Doces</li>
              </ul>
            </div>

            <div>
              <h4 className="font-cormorant text-[19.2px] font-semibold uppercase tracking-[3.84px] text-[#ff8c00]">Links Rapidos</h4>
              <ul className="mt-5 space-y-3 text-base font-light">
                <li>Localizacao atual</li>
                <li>Reservas</li>
                <li>Eventos</li>
                <li>Menu</li>
              </ul>
            </div>

            <div>
              <h4 className="font-cormorant text-[19.2px] font-semibold uppercase tracking-[3.84px] text-[#ff8c00]">Contacto</h4>
              <ul className="mt-5 space-y-4 text-base font-light">
                {(footerContact.length > 0 ? footerContact : [
                  { type: "phone", text: "+244 923 456 789" },
                  { type: "whatsapp", text: "+244 923 456 789" },
                  { type: "email", text: "foodtruck@dlm.ao" },
                  { type: "location", text: "Luanda, Angola (movel)" },
                ]).map((item) => {
                  const Icon = contactIconMap[item.type as keyof typeof contactIconMap] ?? CallSvgIcon;
                  return <li key={`${item.type}-${item.text}`} className="flex items-center gap-3"><Icon className="h-4 w-4 text-[#ff8c00]" /> {item.text}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-[#ff8c00]/20 pt-8 text-[12.8px] font-light text-[#ff8c00]/50 md:flex-row md:items-center md:justify-between">
            <p>{c.footer_copyright ?? "© 2026 Food Truck DLM - Uma marca do grupo DLM"}</p>
            <p className="inline-flex items-center gap-2">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.4498 4.0002C7.8998 4.0002 8.1998 4.5252 7.9498 4.9002L3.5498 12.5002C3.4498 12.7002 3.2498 12.8002 3.0248 12.8002C2.6498 12.8002 2.3748 12.4502 2.4498 12.0752L3.5998 7.2002H0.649805C0.274805 7.2002 -0.000195313 6.9002 0.0498047 6.5252L0.849805 0.525195C0.874805 0.225195 1.1498 0.000195146 1.4498 0.000195146H5.0498C5.4248 0.000195146 5.7248 0.375195 5.6248 0.775195L4.5498 4.0002H7.4498Z" fill="#FF8C00"/>
              </svg>
              Energetic - Fast - Social
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
