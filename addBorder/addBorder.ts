export function addBorder(picture: string[]): any {
    const matrix = "*".repeat(picture[0].length + 2);
    picture.unshift(matrix);
    picture.push(matrix)

    for(let i = 0; i < picture.length; i++){
        //picture[i] = "*".concat(picture[i]).concat("*")
        picture[i] = "*".concat(picture[i],"*")
    }

    return picture;
}

console.log(addBorder(["abc", "ded"]));

export function addBorder2(picture: string[]): any {

}

console.log(addBorder2(["abc", "ded"]));