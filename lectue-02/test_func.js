function findPerimeter(length,width) {
    const Perimeter = 2 * (length+width);
    return Perimeter;
}
let result = findPerimeter(5,10);
console.log(`The perimeter is: ${result}`)