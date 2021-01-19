#!/usr/bin/env node
const {getProjectConfig, buildDefaultPath, findModuleFromOptions} = require('./validate');
const prompting = require('./prompting');
const logger = require('./logger');
const writing = require('./writing');
const initialize = async () => {
    const angularJson = getProjectConfig();
    const projectName = Object.keys(angularJson.projects)[0];
    const projectConfig = angularJson.projects[projectName];
    logger.info(`Angular Project detected with name '${projectName}'`);
    const projectPath = buildDefaultPath(projectConfig);
    let selector = null;
    if (angularJson.schematics && angularJson.schematics['@schematics/angular:component']) {
        selector = angularJson.schematics['@schematics/angular:component'].prefix;
    }
    console.log(selector)
    const props = await prompting.askQuestions();
    props.selector = selector;
    await writing.writeTemplate(props);
};

initialize();