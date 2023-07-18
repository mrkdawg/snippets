/**
 * Converts kebab-case strings into PascalCase.
 * @param text A kebab-case string.
 * @returns A PascalCase transformation of a given string.
 */
export function kebabToPascal(text: string): string {
    return text.replace(/(^\w|-\w)/g, _ => _.replace(/-/, "").toUpperCase());
}