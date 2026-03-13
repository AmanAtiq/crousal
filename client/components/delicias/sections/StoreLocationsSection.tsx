import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RichTextContent from "@/components/RichTextContent";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";

type StoreLocation = {
  name: string;
  address: string;
  hours: string;
  detail: string;
  tags: string;
};

const storesData: StoreLocation[] = [
  {
    name: "Patriota",
    address: "Rua Comandante Ifeka, 27 - Luanda",
    hours: "7:00 - 20:00 (seg-sab) • 8:00-13:00 (dom)",
    detail: "+244 222 123 456",
    tags: "ambiente acolhedor • take-away",
  },
  {
    name: "Aeroporto · Partidas",
    address: "Piso 1, loja 2 - Aeroporto Internacional",
    hours: "5:00 - 22:00 • todos os dias",
    detail: "grab-and-go • pre-encomendas",
    tags: "para viajantes • rapido",
  },
  {
    name: "Aeroporto · Chegadas",
    address: "Piso 0, loja 7 - Aeroporto Internacional",
    hours: "5:00 - 22:00 • todos os dias",
    detail: "cafe & pastelaria • para viagem",
    tags: "chegadas • snacks",
  },
];

export const StoreLocationsSection = () => {
  const content = useContent("delicias");
  const stores = parseContentJson<StoreLocation[]>(content.stores_json, []);
  const resolvedStores = stores.length > 0 ? stores : storesData;

  return (
    <section className="w-full bg-white px-4 py-10 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-[94px] flex flex-col">
          <div className="mb-2.5 h-10 whitespace-nowrap text-[40px] leading-[60px] tracking-[-0.8px] text-[#b14e33]">{content.stores_title ?? "Nossas lojas"}</div>
          <div className="mb-[34px] h-[3px] w-[70px] bg-[#e97451] opacity-40" />
          <RichTextContent className="text-[19.2px] leading-[28.8px] text-[#7a5a4a]" content={content.stores_description ?? "Encontre a Delicias mais proxima - Patriota & Aeroporto (2 lojas)"} />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resolvedStores.map((store) => (
            <Card key={store.name} className="overflow-hidden rounded-[28px] border border-solid border-[#ffe4d8] bg-[#fffaf7] shadow-[0px_15px_30px_-10px_#e9745126]">
              <CardContent className="p-[31px]">
                <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-[35px] bg-[#e97451]">
                  <StoreBadgeIcon storeName={store.name} />
                </div>

                <h3 className="mb-8 text-[32px] leading-[48px] tracking-[-0.64px] text-[#b14e33]">{store.name}</h3>

                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0"><StoreAddressIcon className="h-[14px] w-[11px]" /></span>
                    <span className="text-base leading-6 text-[#4b3a32]">{store.address}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0"><StoreHoursIcon className="h-[14px] w-[14px]" /></span>
                    <span className="text-base leading-6 text-[#4b3a32]">{store.hours}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0"><StoreDetailIcon className="h-[14px] w-[14px]" /></span>
                    <span className="text-base leading-6 text-[#4b3a32]">{store.detail}</span>
                  </div>
                </div>

                <Badge
                  variant="secondary"
                  className="h-auto rounded-[40px] border border-solid border-[#ffd9c9] bg-[#fff0e8] px-[19px] py-[11px] text-base leading-6 text-[#b14e33] hover:bg-[#fff0e8]"
                >
                  {store.tags}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden rounded-[30px] border-2 border-solid border-[#e97451] bg-[#f4e2d9] [background:radial-gradient(50%_50%_at_20%_30%,rgba(255,218,208,1)_2%,rgba(255,218,208,0)_2%),radial-gradient(50%_50%_at_80%_70%,rgba(255,200,184,1)_1%,rgba(255,200,184,0)_2%),linear-gradient(0deg,rgba(244,226,217,1)_0%,rgba(244,226,217,1)_100%)]">
          <CardContent className="p-0">
            <div className="flex flex-col items-center gap-4 px-4 py-6 md:flex-row md:justify-between md:px-[42px] md:py-[43.5px]">
              <InteractiveMapIcon className="mb-2 md:mb-0" />
              <span className="flex-1 text-center text-lg font-semibold leading-tight text-[#7a4a38] md:text-2xl md:leading-9">
                MAPA INTERATIVO - Patriota / Aeroporto (partidas e chegadas)
              </span>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <span className="h-2 w-10 rounded-full bg-[#e97451]/25" />
                <InteractivePinIcon />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const PatriotaIcon = () => (
  <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 19.8125C7.625 19.9375 8.3125 20 9 20C9.625 20 10.3125 19.9375 11 19.8125V29.625L9.5625 31.6875C9.3125 32.125 8.625 32.125 8.375 31.6875L7 29.625V19.8125ZM9 0C13.9375 0 18 4.0625 18 9C18 14 13.9375 18 9 18C4 18 0 14 0 9C0 4.0625 4 0 9 0ZM9 4.75C9.375 4.75 9.75 4.4375 9.75 4C9.75 3.625 9.375 3.25 9 3.25C5.8125 3.25 3.25 5.875 3.25 9C3.25 9.4375 3.5625 9.75 4 9.75C4.375 9.75 4.75 9.4375 4.75 9C4.75 6.6875 6.625 4.75 9 4.75Z" fill="white"/>
  </svg>
);

const PartidasIcon = () => (
  <svg width="41" height="30" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M39.25 25.9375C39.75 25.9375 40.25 26.4375 40.25 26.9375V28.9375C40.25 29.5 39.75 29.9375 39.25 29.9375H1.25C0.6875 29.9375 0.25 29.5 0.25 28.9375V26.9375C0.25 26.4375 0.6875 25.9375 1.25 25.9375H39.25ZM5.25 19.3125L0.5 14.125C0 13.5625 0.1875 12.6875 0.8125 12.375L3.375 11.0625C3.5 11 3.6875 10.9375 3.875 10.9375C4 10.9375 4.1875 11 4.375 11.0625L8.875 13.375L15.3125 10.0625L5.5625 3.9375C5.0625 3.375 5.1875 2.5 5.875 2.1875L10 0.0625C10.125 0 10.3125 0 10.5 0C10.75 0 10.9375 0.0625 11.125 0.1875L24.8125 5.3125L30.9375 2.1875C32.625 1.3125 34.5 0.8125 36.3125 0.9375C38.4375 1.0625 39.5 1.75 40 2.6875C40.4375 3.5625 40.3125 4.875 39.1875 6.625C38.125 8.25 36.625 9.4375 35 10.3125L16.8125 19.5C16.25 19.8125 15.625 19.9375 14.9375 19.9375H6.75C6.1875 19.9375 5.625 19.75 5.25 19.3125Z" fill="white"/>
  </svg>
);

const ChegadasIcon = () => (
  <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M39 28.125C39.5 28.125 40 28.625 40 29.125V31.125C40 31.6875 39.5 32.125 39 32.125H1C0.4375 32.125 0 31.6875 0 31.125V29.125C0 28.625 0.4375 28.125 1 28.125H39ZM2.75 13C2.375 12.625 2 12.125 2 11.5625V5.1875C2 4.5 2.625 4 3.25 4.1875L5.75 4.875C6.0625 4.9375 6.3125 5.1875 6.4375 5.5L8.1875 9.75L14.5625 11.5L11.5625 1.25C11.5625 0.5 12.1875 0 12.875 0.1875L16.9375 1.3125C17.25 1.375 17.5625 1.6875 17.625 2.0625L23.9375 14.0625L30 15.6875C31.6875 16.125 33.25 16.9375 34.4375 18.1875C35.8125 19.5625 36.125 20.75 35.875 21.625C35.6875 22.5625 34.8125 23.375 32.9375 23.875C31.3125 24.3125 29.5625 24.25 27.875 23.75L9.9375 18.875C9.3125 18.6875 8.75 18.4375 8.3125 18L2.75 13Z" fill="white"/>
  </svg>
);

function StoreBadgeIcon({ storeName }: { storeName: string }) {
  const key = storeName.toLowerCase();

  if (key.includes("partidas")) {
    return <PartidasIcon />;
  }

  if (key.includes("chegadas")) {
    return <ChegadasIcon />;
  }

  return <PatriotaIcon />;
}

const InteractiveMapIcon = ({ className }: { className?: string }) => (
  <svg width="54" height="43" viewBox="0 0 54 43" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className ?? "shrink-0"}>
    <path opacity="0.8" d="M0 8.34375C0 7.125 0.75 6 1.875 5.53125L15 0.28125V36.2812L1.96875 42.1875C1.03125 42.6562 0 41.9062 0 40.7812V8.34375ZM18 36.2812V0.28125L36 6.28125V42.2812L18 36.2812ZM51.9375 0.46875C52.875 0 54 0.75 54 1.875V34.3125C54 35.5312 53.1562 36.6562 52.0312 37.125L39 42.2812V6.28125L51.9375 0.46875Z" fill="#E97451"/>
  </svg>
);

const InteractivePinIcon = ({ className }: { className?: string }) => (
  <svg width="36" height="49" viewBox="0 0 36 49" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className ?? "shrink-0"}>
    <path opacity="0.8" d="M16.125 47.0625C2.4375 27.375 0 25.3125 0 18C0 8.0625 7.96875 0 18 0C27.9375 0 36 8.0625 36 18C36 25.3125 33.4688 27.375 19.7812 47.0625C18.9375 48.375 16.9688 48.375 16.125 47.0625ZM18 25.5C22.125 25.5 25.5 22.2188 25.5 18C25.5 13.875 22.125 10.5 18 10.5C13.7812 10.5 10.5 13.875 10.5 18C10.5 22.2188 13.7812 25.5 18 25.5Z" fill="#E97451"/>
  </svg>
);

const StoreAddressIcon = ({ className }: { className?: string }) => (
  <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M6.45 18.825C0.975 10.95 0 10.125 0 7.20005C0 3.22505 3.1875 4.81606e-05 7.2 4.81606e-05C11.175 4.81606e-05 14.4 3.22505 14.4 7.20005C14.4 10.125 13.3875 10.95 7.9125 18.825C7.575 19.35 6.7875 19.35 6.45 18.825ZM7.2 10.2C8.85 10.2 10.2 8.88755 10.2 7.20005C10.2 5.55005 8.85 4.20005 7.2 4.20005C5.5125 4.20005 4.2 5.55005 4.2 7.20005C4.2 8.88755 5.5125 10.2 7.2 10.2Z" fill="#E97451"/>
  </svg>
);

const StoreHoursIcon = ({ className }: { className?: string }) => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M9.29995 -6.55651e-07C14.4375 -6.55651e-07 18.6 4.1625 18.6 9.3C18.6 14.4375 14.4375 18.6 9.29995 18.6C4.16245 18.6 -4.88162e-05 14.4375 -4.88162e-05 9.3C-4.88162e-05 4.1625 4.16245 -6.55651e-07 9.29995 -6.55651e-07ZM12.75 11.7375C12.825 11.6625 12.9 11.5125 12.9 11.3625C12.9 11.175 12.7875 11.025 12.675 10.9125L10.5 9.3V3.9C10.5 3.6 10.2 3.3 9.89995 3.3H8.69995C8.36245 3.3 8.09995 3.6 8.09995 3.9V9.75C8.09995 10.2375 8.28745 10.65 8.66245 10.9125L11.175 12.7875C11.25 12.8625 11.4 12.9375 11.5125 12.9375C11.7375 12.9375 11.8875 12.825 12 12.675L12.75 11.7375Z" fill="#E97451"/>
  </svg>
);

const StoreDetailIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M18.5625 1.0125C18.975 1.125 19.275 1.4625 19.275 1.875C19.275 11.5125 11.475 19.275 1.87495 19.275C1.42495 19.275 1.08745 19.0125 0.974951 18.6L0.0749512 14.7C-4.88311e-05 14.2875 0.187451 13.8375 0.599951 13.65L4.79995 11.85C5.17495 11.7 5.58745 11.8125 5.84995 12.1125L7.72495 14.4C10.65 13.0125 13.0125 10.6125 14.3625 7.7625L12.075 5.8875C11.775 5.625 11.6625 5.2125 11.8125 4.8375L13.6125 0.637499C13.8 0.224999 14.25 -6.70552e-07 14.6625 0.112499L18.5625 1.0125Z" fill="#E97451"/>
  </svg>
);
