const path = require('path');
const templating = require('./templating');
this.templateDir = path.join(__dirname, 'templates');

const writeTemplate = async (formConfig, destinationPath) => {
    const htmlPath = this.templateDir + '/_component/_component.html.hbs';
    const tsPath = this.templateDir + '/_component/_component.ts.hbs';

    const htmlTemplate = templating.createTemplate(htmlPath, formConfig);
    const tsTemplate = templating.createTemplate(tsPath, formConfig);


};

module.exports = {
    writeTemplate
};