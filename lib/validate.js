const filesystem = require('fs-extra');
const fs = require('fs');
const logger = require('./logger');

const getProjectConfig = () => {
    try {
        if (filesystem.existsSync('angular.json')) {
            return filesystem.readJsonSync('angular.json');
        } else {
            throw new Error('Not an Angular Project. Please use this command in an Angular Project');
        }
    } catch (e) {
        logger.error(e);
        process.exit(1);
    }
};


const buildDefaultPath = (project) => {
    const root = project.sourceRoot ? `${project.sourceRoot}/` : `/${project.root}/src/`;
    const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
    return `${root}${projectDirName}`;
};

const findModuleFromOptions = (path) => {
    const modulePath = `${path}/app.module.ts`;
    if (fs.existsSync(modulePath)) {

    } else {
        logger.error('App NgModule not found. Skipping auto injecting components');
    }
};
module.exports = {getProjectConfig, buildDefaultPath, findModuleFromOptions};