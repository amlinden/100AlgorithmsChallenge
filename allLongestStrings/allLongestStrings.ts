export function allLongestStrings(inputArray: string[]): string[] {
    let longestString = []
    for (let index = 0; index < inputArray.length; index++) {
        longestString.push(inputArray[index].length);
    }
    let largest = inputArray.filter(x => x.length === Math.max(...longestString));
    return largest;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
