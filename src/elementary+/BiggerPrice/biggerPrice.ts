interface Stock {
    name: string,
    price: number,
};

export function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // your code here
    const orderedGoods: Stock[] = data.sort(
        (goods1, goods2) => goods1.price > goods2.price ? -1 : 1
    );

    return orderedGoods.slice(0, limit);
}