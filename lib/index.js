#!/usr/bin/env node
const {getProjectConfig, buildDefaultPath, findModuleFromOptions} = require('./validate');
const prompting = require('./prompting');
const logger = require('./logger');

const initialize = async () => {
    const angularJson = getProjectConfig();
    const projectName = Object.keys(angularJson.projects)[0];
    const projectConfig = angularJson.projects[projectName];
    logger.info(`Angular Project detected with name '${projectName}'`);
    const projectPath = buildDefaultPath(projectConfig);
    const props = await prompting.askQuestions();
    console.log(props);
};

initialize();