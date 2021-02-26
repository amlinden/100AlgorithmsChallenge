export function addTwoDigits(n: any): any {
    let str = n.toString().split('')
    // return str.reduce((a, b) => {
    //     return parseInt(a) + parseInt(b)
    // });
    return parseInt(str[0]) + parseInt(str[1])
}

console.log(addTwoDigits(29));