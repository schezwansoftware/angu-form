#!/usr/bin/env node
const {getProjectConfig, buildDefaultPath, findModuleFromOptions} = require('./validate');
const prompting = require('./prompting');
const logger = require('./logger');
const writing = require('./writing');

const bootstrap = async () => {
    const angularJson = getProjectConfig();
    const projectName = Object.keys(angularJson.projects)[0];
    // const projectConfig = angularJson.projects[projectName];
    let selector = 'app';
    if (angularJson.schematics && angularJson.schematics['@schematics/angular:component']) {
        selector = angularJson.schematics['@schematics/angular:component'].prefix || 'app';
    }
    logger.info(`Angular Project detected with name '${projectName}' and selector with ${selector}`);
    // const projectPath = buildDefaultPath(projectConfig);
    const props = await prompting.askQuestions();
    props.selector = selector;
    await writing.writeTemplate(props);
};

bootstrap();