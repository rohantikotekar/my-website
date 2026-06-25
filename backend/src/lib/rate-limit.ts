/**
 * Minimal in-memory rate limiter (fixed window).
 * Good enough for a single-instance contact form. For multi-instance or
 * serverless deployments, swap this for a shared store (e.g. Upstash Redis).
 */

type Entry = { count: number; resetAt: number };

const buckets = new Map<string, Entry>();

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 60_000 }: { limit?: number; windowMs?: number } = {}
): { ok: boolean; remaining: number } {
  const now = Date.now();
  const entry = buckets.get(key);

  if (!entry || entry.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { ok: false, remaining: 0 };
  }

  entry.count += 1;
  return { ok: true, remaining: limit - entry.count };
}
