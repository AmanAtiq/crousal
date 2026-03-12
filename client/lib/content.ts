export function parseContentJson<T>(
  rawValue: string | undefined,
  fallback: T,
): T {
  if (!rawValue) {
    return fallback;
  }

  try {
    return JSON.parse(rawValue) as T;
  } catch {
    return fallback;
  }
}