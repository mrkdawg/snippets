/**
 * Groups an array of items by a specific property.
 * @param list A list of items to group.
 * @param key The property to group the items by.
 * @returns A dictionary of all items in the list grouped by the property.
 */
export function groupBy<T>(list: T[], key: string): { [key: string]: T[] } {
    return list.reduce(function (rv: any, x: any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};