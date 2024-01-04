const fs = require('fs');
const inquirer = require('inquirer');
const UserInput = require('./lib/userInput');
const Shapes = require('./lib/shapes');


const userInput = new UserInput();

inquirer.prompt(userInput.questions).then((answers) => {
    const requiredFields = ['color', 'textColor'];

    for (const field of requiredFields) {
        if (!answers[field]) {
            throw new Error(`You must enter a ${field}!`);
        } else if (answers.logoText.length > 3) {
            throw new Error(`The logo text must be 3 characters or less!`);
        };
    };


    const circle = new Shapes.Circle(answers.color, answers.logoText, answers.shape, answers.textColor);
    const square = new Shapes.Square(answers.color, answers.logoText, answers.shape, answers.textColor);
    const triangle = new Shapes.Triangle(answers.color, answers.logoText, answers.shape, answers.textColor);

    console.log(answers);

    // Switch statement to determine which shape to create
    // Passes user input to the writeFile function
    switch (answers.shape) {
        case 'Circle':
            writeFile(circle);
            break;
        case 'Square':
            writeFile(square);
            break;
        case 'Triangle':
            writeFile(triangle);
            break;
        default:
            console.log('Something went wrong!');
    };

}).catch((err) => {
    console.log(err);
});

// Creates the svg file
function writeFile(shape) {
    console.log(shape)
    fs.writeFile(`./examples/${shape.name}.svg`,
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${shape.renderContent}\n${shape.renderText}\n</svg>`,
        (err) => err ? console.log(err) : console.log('Success!')
    );
}