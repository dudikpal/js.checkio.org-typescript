type frequency = {
    [key: number]: number
}

export function frequencySort(items: any[]): any[] {

    let frequencies: frequency = {};
    items.forEach(item => frequencies[item] = 0);
    items.forEach(item => frequencies[item] = frequencies[item] + 1);
    let result: (string | number)[] = [];
    let sorted = Object.entries(frequencies)
        .sort((a, b) =>  b[1] - a[1])
        .sort((a, b) =>
            a[1] === b[1]
                ? items.indexOf(parseInt(a[0])) - items.indexOf(parseInt(b[0]))
                : 0);

    for (const [key, rep] of sorted) {
        for (let i = 0; i < rep; i++) {
            if (/^\d+$/.test(key)) {
                result.push(parseInt(key));
            } else {
                result.push(key);
            }
        }
    }

    return result;
}