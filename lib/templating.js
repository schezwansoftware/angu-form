const hbs = require('handlebars');
const fs = require('fs');


module.exports = {
    createTemplate: (templatePath, data) => {
        if (fs.existsSync(templatePath)) {
            const templateString = fs.readFileSync(templatePath).toString('utf8');
            const template = hbs.compile(templateString);
            return template(data);
        }
    }
};