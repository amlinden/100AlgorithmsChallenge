export function addBorder(picture: string[]): any {
    const width = picture[0].length + 2;
    let matrix = "";
    for(let i = 0;  i < width; i++){
        matrix = matrix.concat("*")
    }
    picture.unshift(matrix);
    picture.push(matrix)

    for(let i = 0; i < picture.length; i++){
        picture[i] = "*".concat(picture[i]).concat("*")
    }

    return picture;
}

console.log(addBorder(["abc", "ded"]));

export function addBorder2(picture: string[]): any {

}

console.log(addBorder2(["abc", "ded"]));