export function nonUniqueElements(data: number[]): number[] {
    return data.filter(entry =>
        data.indexOf(entry) !== data.lastIndexOf(entry));
}