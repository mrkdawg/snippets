/**
 * Creates a deep copy of an item (to prevent passing by reference).
 * @param object Anything!
 * @returns An exact copy of the Anything.
 */
export function deepCopy<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
}