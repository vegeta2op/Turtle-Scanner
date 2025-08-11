type CacheEntry<T> = { value: T; expiresAt: number };

class TTLCache {
  private store: Map<string, CacheEntry<any>>;
  constructor() {
    this.store = new Map<string, CacheEntry<any>>();
  }
  get<T>(key: string): T | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value as T;
  }
  set<T>(key: string, value: T, ttlMs: number) {
    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
  }
  delete(key: string) { this.store.delete(key); }
}

// Ensure a single global instance across hot reloads
// @ts-ignore
const g: any = globalThis as any;
export const cache: TTLCache = g.__ttlCache || (g.__ttlCache = new TTLCache());

export function makeCacheKey(parts: Array<string | number | undefined | null>) {
  return parts.filter((p) => p !== undefined && p !== null).join(":");
} 