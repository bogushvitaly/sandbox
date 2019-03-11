/**
 * Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
 */

export const all = (arr, fn: any = Boolean) => arr.every(fn as any);
