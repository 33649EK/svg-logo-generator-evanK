// Creates a shape class
class Shape {
    constructor(color, logoString, shape) {
        this.color = color;
        this.logoString = logoString;
        this.shape = shape;
    }
}

class Square extends Shape {
    constructor(color, logoString, sideLength) {
        super(color, logoString,);
        this.sideLength = sideLength;
    }
}

class Circle extends Shape {
    constructor(color, logoString, radius) {
        super(color, logoString);
        this.radius = radius;
    }
}

class Triangle extends Shape {
    constructor(color, logoString, sideLength) {
        super(color, logoString);
        this.sideLength = sideLength;
    }
}
