export function betweenMarkers(line: string, left: string, right: string): string {
    // your code here
    return line.slice(line.indexOf(left) + 1, line.indexOf(right));
}