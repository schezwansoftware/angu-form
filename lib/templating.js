const hbs = require('handlebars');
const fs = require('fs');
hbs.registerHelper('if_eq', function(a, b, opts) {
    if(a === b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
});

module.exports = {
    createTemplate: (templatePath, data) => {
        if (fs.existsSync(templatePath)) {
            const templateString = fs.readFileSync(templatePath).toString('utf8');
            const template = hbs.compile(templateString);
            return template(data);
        }
    }
};