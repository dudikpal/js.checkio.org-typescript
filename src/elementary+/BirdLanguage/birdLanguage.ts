export function translate(text: string): string {

    let result = '';
    const parts = text.split(/([^aeiouy\s][aeiouy]|[aeiouy]{3})/g);
    parts
        .filter(part => part.length > 0)
        .forEach(part => result += part[0]);

    return result;
}