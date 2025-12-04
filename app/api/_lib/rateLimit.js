const store = new Map();

export function checkRate(key, max=60, windowSec=60) {
  const now = Date.now();
  const item = store.get(key) || { count: 0, ts: now };
  if (now - item.ts > windowSec * 1000) {
    item.count = 0;
    item.ts = now;
  }
  item.count += 1;
  store.set(key, item);
  return { allowed: item.count <= max, count: item.count, limit: max };
}
