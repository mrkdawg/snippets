/**
 * Pluralises a word based on a given quantity.
 * @param word Word to pluralise.
 * @param quantity Total number of 'words'.
 * @returns The plural of a given word.
 */
export function pluralise(word: string, quantity: number): string {
    if (quantity === 1) return word;
    let suffix: string = "s";
    if (word[word.length - 1] === "s") suffix = "es";
    if (word[word.length - 1] === "y") {
        word = word.substring(0, word.length - 1);
        suffix = "ies";
    }
    return `${word}${suffix}`;
}