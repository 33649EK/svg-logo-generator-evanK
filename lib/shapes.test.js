//Imports the Circle, Square, and Triangle classes
const Shapes = require('./shapes');

// Tests the Circle class
describe('Circle', () => {
    describe('constructor', () => {
        it('should create a new circle object', () => {
            const circle = new Shapes.Circle('blue', 'abc', 'circle', 'red');
            expect(circle).toBeInstanceOf(Shapes.Circle);
        });
    });
    describe('render', () => {
        it('should return the svg information for the circle', () => {
            const circle = new Shapes.Circle('blue', 'abc', 'circle', 'red');
            expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />');
        });
    });
    describe('renderText', () => {
        it('should return the text information for the circle', () => {
            const circle = new Shapes.Circle('blue', 'abc', 'circle', 'red');
            expect(circle.renderText).toEqual('<text fill="red" font-size="24" font-family="Verdana" x="50" y="58" text-anchor="middle">abc</text>');
        });
    });
})

// Tests the Square class
describe('Square', () => {
    describe('constructor', () => {
        it('should create a new square object', () => {
            const square = new Shapes.Square('red', 'abc', 'square', 'blue');
            expect(square).toBeInstanceOf(Shapes.Square);
        });
    });
    describe('render', () => {
        it('should return the svg information for the square', () => {
            const square = new Shapes.Square('red', 'abc', 'square', 'blue');
            expect(square.render()).toEqual('<rect width="100" height="100" fill="red" />');
        });
    });
    describe('renderText', () => {
        it('should return the text information for the square', () => {
            const square = new Shapes.Square('red', 'abc', 'square', 'blue');
            expect(square.renderText).toEqual('<text fill="blue" font-size="40" font-family="Verdana" x="50" y="60" text-anchor="middle">abc</text>');
        });
    });
})

// Tests the Triangle class
describe('Triangle', () => {
    describe('constructor', () => {
        it('should create a new triangle object', () => {
            const triangle = new Shapes.Triangle('green', 'abc', 'triangle', 'red');
            expect(triangle).toBeInstanceOf(Shapes.Triangle);
        });
    });
    describe('render', () => {
        it('should return the svg information for the triangle', () => {
            const triangle = new Shapes.Triangle('green', 'abc', 'triangle', 'red');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        });
    });
    describe('renderText', () => {
        it('should return the text information for the triangle', () => {
            const triangle = new Shapes.Triangle('green', 'abc', 'triangle', 'red');
            expect(triangle.renderText).toEqual('<text fill="red" font-size="40" font-family="Verdana" x="50%" y="135" text-anchor="middle">abc</text>');
        });
    });
})