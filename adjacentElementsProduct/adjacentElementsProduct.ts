export function adjacentElementsProduct(inputArray: number[]): number {
    let largestprod: number[] = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        largestprod.push(inputArray[i] * inputArray[i + 1]);
    }
    return Math.max(...largestprod);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));


//option 2

export function adjacentElementsProduct2(inputArray: number[]): number {
    let largestprod = inputArray[0] * inputArray[1];
    for (let i = 0; i < inputArray.length - 1; i++) {
        let prod = inputArray[i] * inputArray[i + 1];
        largestprod = largestprod > prod ? largestprod: prod;

    }
    return largestprod;
}

console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));
