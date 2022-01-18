
export function betweenMarkers(text: string, begin: string, end: string): string {

    const startIndex = text.indexOf(begin);
    const endIndex = text.lastIndexOf(end);

    if (startIndex === -1 && endIndex === -1) {
        return text;
    }

    if (startIndex === -1) {
        return text.slice(0, endIndex);
    }

    if (endIndex === -1) {
        return text.slice(startIndex + begin.length);
    }

    if (startIndex > endIndex) {
        return '';
    }

    return text.slice(startIndex + begin.length, endIndex);
}