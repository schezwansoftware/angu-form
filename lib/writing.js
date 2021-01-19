const path = require('path');
const templating = require('./templating');
this.templateDir = path.join(__dirname, 'templates');

const writeTemplate = async ({formName, generatedFields, formTitle, selector}) => {
    const htmlPath = this.templateDir + '/_component/_component.html.hbs';
    const result = templating.createTemplate(htmlPath, {formName, generatedFields, formTitle, selector});
    console.log(result);
};

module.exports = {
    writeTemplate
};