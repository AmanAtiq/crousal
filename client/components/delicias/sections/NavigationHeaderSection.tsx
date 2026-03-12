import { Link } from "react-router-dom";
import { useContent } from "@/hooks/useContent";
import { parseContentJson } from "@/lib/content";
import { normalizeNavLabel } from "@/lib/nav";

export const NavigationHeaderSection = () => {
  const c = useContent("delicias");
  const navLinks = parseContentJson<Array<{ label: string; href: string }>>(c.nav_links_json, [
    { label: "HOME", href: "/" },
    { label: "FOOD TRUCK", href: "/food-truck" },
    { label: "DELICIAS", href: "/delicias" },
    { label: "ATELIE", href: "/atelie" },
    { label: "CONTACTO", href: "/contacto" },
  ]);

  return (
    <header className="w-full border-b border-[#E97451]/60 bg-[#B14E33]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-4">
        <Link to="/delicias" className="flex shrink-0 items-center gap-3 whitespace-nowrap text-white">
          <span className="font-playfair text-xl font-bold tracking-wider">{c.nav_brand_label ?? "DELICIAS"}</span>
          <span className="text-xl text-[#FFE0D0]">🥐</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-inter text-[11px] font-medium uppercase tracking-[2.24px] transition-colors ${
                item.href === "/delicias"
                  ? "relative text-white after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:bg-[#FFD9C2]"
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
            className="rounded-full border border-[#FFD9C2] bg-white/5 px-8 py-2.5 font-inter text-[11px] font-semibold uppercase tracking-[2.24px] text-[#FFD9C2] transition-colors hover:bg-white/10"
          >
            {c.nav_smart_quote_label ?? "SMART QUOTE"}
          </Link>
        </div>
      </div>
    </header>
  );
};
