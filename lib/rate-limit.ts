const hits = new Map<string, number[]>();

const MAX_TRACKED_IPS = 1000;

export function rateLimit(
  ip: string,
  max = 10,
  windowMs = 60_000
): boolean {
  const now = Date.now();

  if (hits.size > MAX_TRACKED_IPS) {
    for (const [key, timestamps] of hits) {
      if (timestamps.every((t) => now - t >= windowMs)) {
        hits.delete(key);
      }
    }
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= max) {
    hits.set(ip, recent);
    return false;
  }

  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}
