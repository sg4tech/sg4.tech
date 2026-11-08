// Turns a typed table into a lookup function. The Record type keeps the
// compile-time guarantee that every key has an entry (add a locale and the
// table fails to type-check until it gets one); reads go through a Map, so
// there is no dynamic object indexing for the security lint to flag.
export function createLookup<K extends string, V>(table: Record<K, V>): (key: K) => V {
  const entries = new Map<string, V>(Object.entries<V>(table));
  return (key) => {
    const value = entries.get(key);
    if (value === undefined) {
      throw new Error(`[lookup] no entry for "${key}"`);
    }
    return value;
  };
}
