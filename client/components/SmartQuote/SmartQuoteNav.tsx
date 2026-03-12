import { Link } from "react-router-dom";

const DLMLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#sq-nav-clip)">
        <path opacity="0.3" d="M19.7574 11.0711L11.2721 2.58578C10.491 1.80473 9.2247 1.80473 8.44365 2.58578L-0.0416375 11.0711C-0.822686 11.8521 -0.822686 13.1184 -0.0416375 13.8995L8.44365 22.3848C9.2247 23.1658 10.491 23.1658 11.2721 22.3848L19.7574 13.8995C20.5384 13.1184 20.5384 11.8521 19.7574 11.0711Z" fill="#C8A050"/>
        <path d="M19.4038 11.7175L11.6257 3.93934C11.0399 3.35356 10.0901 3.35356 9.50434 3.93934L1.72616 11.7175C1.14037 12.3033 1.14037 13.2531 1.72616 13.8388L9.50434 21.617C10.0901 22.2028 11.0399 22.2028 11.6257 21.617L19.4038 13.8388C19.9896 13.2531 19.9896 12.3033 19.4038 11.7175Z" stroke="#C8A050" strokeWidth="2"/>
        <path d="M19.0503 12.9498L13.3934 7.29292C13.0029 6.90239 12.3697 6.90239 11.9792 7.29292L6.32234 12.9498C5.93181 13.3403 5.93181 13.9735 6.32234 14.364L11.9792 20.0208C12.3697 20.4114 13.0029 20.4114 13.3934 20.0208L19.0503 14.364C19.4408 13.9735 19.4408 13.3403 19.0503 12.9498Z" stroke="#C8A050" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="4" fill="#C8A050"/>
      </g>
      <defs>
        <clipPath id="sq-nav-clip">
          <rect width="48" height="48" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-playfair font-bold text-xl text-white tracking-wider">DLM</span>
      <span className="font-inter font-bold text-[9px] text-[#C8A050] tracking-[3px] uppercase">GROUP</span>
    </div>
  </div>
);

export default function SmartQuoteNav() {
  return (
    <div className="w-full flex items-center justify-between px-6 md:px-[120px] py-5">
      <Link to="/" className="flex-shrink-0">
        <DLMLogo />
      </Link>
      <Link
        to="/"
        className="font-inter font-semibold text-[11px] tracking-[2.24px] uppercase text-[#C8A050] border-2 border-[#C8A050] rounded-full px-6 py-2.5 hover:bg-[#C8A050]/10 transition-colors whitespace-nowrap"
      >
        Voltar ao Site
      </Link>
    </div>
  );
}
