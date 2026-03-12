export function normalizeNavLabel(label: string) {
  const normalized = label.trim().toLowerCase();

  if (normalized === "inicio") return "Início";
  if (normalized === "delicias") return "Delícias";
  if (normalized === "atelie") return "Ateliê";
  if (normalized === "contacto") return "Contacto";
  if (normalized === "food truck") return "Food Truck";

  return label;
}
