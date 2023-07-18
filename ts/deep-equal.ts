/**
 * Performs a deep comparison of two values.
 * @param a First value.
 * @param b Second value.
 * @returns A boolean to indicate whether the values are the same.
 */
export function deepEqual(a: any, b: any): boolean {
    if (a === b) return true;
    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;
    const keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}