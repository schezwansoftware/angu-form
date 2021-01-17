const chalk = require('chalk');

const error = (message) => {
  console.log(chalk.red(message));
};

const info = (message) => {
  console.log(chalk.cyan(message));
}
module.exports = {error, info};