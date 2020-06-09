"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.processProject = void 0;
const step = require("./step");
const projectGlobalVariable_1 = require("./projectGlobalVariable");
exports.processProject = async (project, tsGearConfigPath) => {
    step.prepareProjectDirectory(project, tsGearConfigPath);
    const spec = await step.fetchSwagger(project, tsGearConfigPath);
    if (project.translationEngine) {
        await step.translateSchema(spec, project.translationEngine);
    }
    const keepGeneric = project.keepGeneric !== false;
    step.cleanRefAndDefinitionName(spec, keepGeneric);
    step.assembleSchemaToGlobal(spec, project);
    if (keepGeneric) {
        step.parseGenericType(project);
    }
    step.collectRefsInRequestAndPatchDefinition(project);
    step.generateDefinitionContent(project);
    step.generateRequestContent(spec, project);
    step.writeProject(project, tsGearConfigPath);
    projectGlobalVariable_1.restore(project);
};
/**
 * run step by step
 * sequence could not be changed
 * every step depends on the pre step
 * */
exports.run = async () => {
    const { projects, tsGearConfigPath } = await step.getUserConfig();
    projects.forEach((project) => exports.processProject(project, tsGearConfigPath));
};
