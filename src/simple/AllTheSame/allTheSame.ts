export function allTheSame(elements: any[]): boolean {

    return elements.every(item => item === elements[0]);
}