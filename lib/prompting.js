const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();



const askQuestions = async () => {
    const allQuestions = [
        {
            type: 'input',
            name: 'formName',
            message: 'What is the name of your form.'
        }
    ];
    const answers = await prompt(allQuestions);
    return answers;
}

module.exports = {
    askQuestions
};
