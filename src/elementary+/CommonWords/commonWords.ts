export function commonWords(line1: string, line2: string): string {

    let duplicates: string[] = [];

    line1.split(',')
        .filter(word => line2.split(',').includes(word))
        .forEach(word => duplicates.push(word));

    return duplicates.sort().toString();
}