const fs = require('fs');

// Creates a shape class
class Shape {
    constructor(color, logoString, shape, textColor) {
        this.color = color;
        this.logoString = logoString;
        this.shape = shape;
        this.textColor = textColor;
    }

    render() {
        return this.renderContent;
    }
}


class Circle extends Shape {
    constructor(color, logoString, shape, textColor) {
        super(color, logoString, shape, textColor);
        this.name = `circle-${this.logoString}`;
        this.renderContent = `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
        this.renderText = `<text fill="${this.textColor}" font-size="24" font-family="Verdana" x="50" y="58" text-anchor="middle">${this.logoString}</text>`
    }

}
class Triangle extends Shape {
    constructor(color, logoString, shape, textColor) {
        super(color, logoString, shape, textColor);
        this.name = `triangle-${this.logoString}`;
        this.renderContent = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        this.renderText = `<text fill="${this.textColor}" font-size="40" font-family="Verdana" x="50%" y="135" text-anchor="middle">${this.logoString}</text>`
    }


}
class Square extends Shape {
    constructor(color, logoString, shape, textColor) {
        super(color, logoString, shape, textColor);
        this.name = `square-${this.logoString}`;
        this.renderContent = `<rect width="100" height="100" fill="${this.color}" />`
        this.renderText = `<text fill="${this.textColor}" font-size="40" font-family="Verdana" x="50" y="60" text-anchor="middle">${this.logoString}</text>`
    }

}

module.exports = { Circle, Triangle, Square };
