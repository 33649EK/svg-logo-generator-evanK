// Contains the questions to be asked to the user when the program is run.
class UserInput {
    constructor() {
        this.questions = [
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like your logo to be?',
                choices: ['Circle', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                name: 'color',
                message: 'What color would you like your logo to be? (Name or Hexadecimal)',
            },
            {
                type: 'input',
                name: 'logoText',
                message: 'What 3 letter string would you like your logo to contain?',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like your logo text to be? (Name or Hexadecimal)',
            },
        ];
    };
};

// Exports the UserInput class
module.exports = UserInput;