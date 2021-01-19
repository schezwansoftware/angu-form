const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const _ = require('lodash');

const _askFieldQuestions = async (currentAnswer, fieldQuestions, formConfig) => {
    while (true) {
        if (currentAnswer.fieldAdd) {
            const {fieldType, fieldName} = currentAnswer;
            const fieldTitle = _.startCase(fieldName);
            formConfig.generatedFields.push({fieldName, fieldType, fieldTitle});
            currentAnswer = await prompt(fieldQuestions);
        } else {
            break;
        }
    }
    return formConfig;
};
const askQuestions = async () => {
    const answers = [];
    let typeChoices = [
        {
            name: 'Text',
            value: 'text'
        },
        {
            name: 'Number',
            value: 'number'
        },
        {
            name: 'Email',
            value: 'email'
        },
        {
            name: 'Password',
            value: 'password'
        },
        {
            name: 'Date',
            value: 'date'
        },
        {
            name: 'Checkbox',
            value: 'checkbox'
        },
        {
            name: 'Dropdown',
            value: 'select'
        },
    ];
    let formConfig = {formName: null, generatedFields: [], formTitle: null, selector: null};
    const fieldQuestions = [
        {
            type: 'confirm',
            name: 'fieldAdd',
            message: 'Do you want to add a field to the Form'
        },
        {
            when: function (response) {
                return response.fieldAdd === true;
            },
            type: 'input',
            name: 'fieldName',
            validate: function (input) {
                if (!(/^([a-zA-Z0-9_]*)$/.test(input))) {
                    return 'Your field name cannot contain special characters';
                } else if (input === '') {
                    return 'Your field name cannot be empty';
                } else if (input.charAt(0) === input.charAt(0).toUpperCase()) {
                    return 'Your field name cannot start with a upper case letter';
                } else if (input === 'id') {
                    return 'Your field name cannot be id';
                } else if (input.length > 30) {
                    return 'The field name cannot be of more than 30 characters';
                }
                return true;
            },
            message: 'What is the name of your field?'
        },
        {
            when: function (response) {
                return response.fieldAdd === true;
            },
            type: 'list',
            name: 'fieldType',
            message: 'What is the type of your field?',
            choices: typeChoices,
            default: 0
        },
    ];
    const allQuestions = [
        {
            type: 'input',
            name: 'formName',
            validate: function (input) {
                if (!(/^([a-zA-Z0-9_]*)$/.test(input))) {
                    return 'Your form name cannot contain special characters';
                } else if (input === '') {
                    return 'Your form name cannot be empty';
                } else if (input.charAt(0) === input.charAt(0).toUpperCase()) {
                    return 'Your form name cannot start with a upper case letter';
                } else if (input === 'id') {
                    return 'Your form name cannot be id';
                } else if (input.length > 30) {
                    return 'The form name cannot be of more than 30 characters';
                }
                return true;
            },
            message: 'What is the name of your form.'
        },
        ...fieldQuestions
    ];
    let answer = await prompt(allQuestions);
    formConfig.formName = answer.formName;
    formConfig.formTitle = _.startCase(answer.formName);
    formConfig = _askFieldQuestions(answer, fieldQuestions, formConfig);
    return formConfig;
};


module.exports = {
    askQuestions
};
