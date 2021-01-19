const path = require('path');
const fs = require('fs');
const templating = require('./templating');
this.templateDir = path.join(__dirname, 'templates');

const writeTemplate = async (formConfig, destinationPath) => {
    const htmlPath = this.templateDir + '/_component/_component.html.hbs';
    const tsPath = this.templateDir + '/_component/_component.ts.hbs';

    const htmlTemplate = templating.createTemplate(htmlPath, formConfig);
    const tsTemplate = templating.createTemplate(tsPath, formConfig);
    const componentPath = path.join(destinationPath + `/${formConfig.baseName}`);
    if (!fs.existsSync(componentPath)) {
        console.log(componentPath);
        fs.mkdirSync(componentPath);
    }
};

module.exports = {
    writeTemplate
};