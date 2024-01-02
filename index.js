const fs = require('fs');
const UserInput = require('./lib/userInput');
const userInput = new UserInput();
const inquirer = require('inquirer');

inquirer.prompt(userInput.questions).then((answers) => {
    const requiredFields = ['color', 'logoText', 'textColor'];

    for (const field of requiredFields) {
        if (!answers[field]) {
            throw new Error(`You must enter a ${field}!`);
        } else if (answers.logoText.length > 3) {
            throw new Error(`The logo text must be 3 characters or less!`);
        }
    }

    console.log(answers);

}).catch((err) => {
    console.log(err);
});