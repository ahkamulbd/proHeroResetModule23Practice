function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = s * (s - a) * (s - b) * (s - c);
    let finalArea = Math.pow(area, 1 / 2);
    let finalAreaFixed = finalArea.toFixed(2);

    return finalAreaFixed;
}

const calculateArea = triangleArea(3, 6, 7);
console.log(calculateArea);