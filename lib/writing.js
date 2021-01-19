const path = require('path');
const templating = require('./templating');
this.templateDir = path.join(__dirname, 'templates');

const writeTemplate = async ({formName, generatedFields, formTitle, selector, baseName}) => {
    const htmlPath = this.templateDir + '/_component/_component.html.hbs';
    const tsPath = this.templateDir + '/_component/_component.ts.hbs';

    const htmlTemplate = templating.createTemplate(htmlPath, {formName, generatedFields, formTitle, selector});
    const tsTemplate = templating.createTemplate(tsPath, {formName, generatedFields, formTitle, selector, baseName});
    console.log(tsTemplate);
};

module.exports = {
    writeTemplate
};