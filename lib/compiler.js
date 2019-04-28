"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Token {
    constructor(type, value = '') {
        this.type = type;
        this.value = value;
    }
}
class Parser {
    constructor(nodes) {
        this.nodes = nodes;
    }
    eat(type) {
        if (this.nodes.length && this.nodes[0].type === type) {
            const node = this.nodes[0];
            this.nodes = this.nodes.slice(1);
            return node;
        }
        else {
            console.error('current nodes', this.nodes);
            throw Error('the first node type is not ' + type + " in template parser's eat method");
        }
    }
    check(type) {
        if (this.nodes.length && this.nodes[0].type === type) {
            return true;
        }
        return false;
    }
    parserTemplateArgs() {
        const args = [];
        args[0] = this.parseTemplate();
        while (this.check('Comma')) {
            this.eat('Comma');
            args.push(this.parseTemplate());
        }
        return args;
    }
    parseTemplate() {
        const name = this.eat('Identifier').value;
        let templateArgs = [];
        if (this.check('PreTemplate')) {
            this.eat('PreTemplate');
            templateArgs = this.parserTemplateArgs();
            this.eat('EndTemplate');
        }
        return {
            type: 'Template',
            name,
            templateArgs
        };
    }
}
function compileTemplate(template) {
    const Identifier = /^[a-zA-Z_][a-zA-Z_0-9]*/;
    const PreTemplate = /^«/;
    const EndTemplate = /^»/;
    const Comma = /^,/;
    let code = template;
    let matchedText = '';
    let nodes = [];
    while (code) {
        code = code.replace(/\s/g, '');
        if (code.match(Identifier)) {
            matchedText = code.match(Identifier)[0];
            nodes.push(new Token('Identifier', matchedText));
        }
        else if (code.match(PreTemplate)) {
            matchedText = code.match(PreTemplate)[0];
            nodes.push(new Token('PreTemplate', matchedText));
        }
        else if (code.match(EndTemplate)) {
            matchedText = code.match(EndTemplate)[0];
            nodes.push(new Token('EndTemplate', matchedText));
        }
        else if (code.match(Comma)) {
            matchedText = code.match(Comma)[0];
            nodes.push(new Token('Comma', matchedText));
        }
        else {
            return null;
        }
        code = code.slice(matchedText.length);
    }
    return new Parser(nodes).parseTemplate();
}
function generateCode(ast, originName = '') {
    const { name, type, templateArgs } = ast;
    let retName = name;
    if (name === 'long') {
        retName = 'number';
    }
    if (['void', 'Void'].includes(name)) {
        retName = 'void';
    }
    if (['object', 'Object'].includes(name)) {
        retName = 'object';
    }
    if (templateArgs.length) {
        if (name === 'List') {
            retName = 'Array';
        }
        else if (['Map'].includes(name)) {
            retName = name;
        }
        else {
            retName = originName ? `defs.${originName}.${name}` : `defs.${name}`;
        }
        return `${retName}<${templateArgs.map(arg => generateCode(arg, originName)).join(', ')}>`;
    }
    if (['number', 'string', 'boolean', 'void', 'object'].includes(retName)) {
        return retName;
    }
    if (['Map'].includes(name)) {
        retName = 'object';
        return retName;
    }
    return originName ? `defs.${originName}.${name}` : `defs.${name}`;
}
function generateTemplate(template, originName = '') {
    if (template.startsWith('#/definitions/')) {
        template = template.slice('#/definitions/'.length);
    }
    if (!template) {
        return '';
    }
    const ast = compileTemplate(template);
    if (!ast) {
        return '';
    }
    return generateCode(ast, originName);
}
exports.generateTemplate = generateTemplate;
function findTemplate(ast, isFirst = true) {
    const plainName = ['List', 'Map', 'number', 'string', 'boolean', 'long'];
    const { templateArgs, name } = ast;
    if (name === 'List') {
        return generateCode(templateArgs[0]);
    }
    return generateCode(ast);
    if (plainName.indexOf(name) === -1 && !isFirst) {
        return name;
    }
    if (templateArgs && templateArgs.length) {
        let res = null;
        templateArgs.forEach(item => {
            res = findTemplate(item, false);
        });
        return res;
    }
    return false;
}
function findDefinition(template) {
    if (template.startsWith('#/definitions/')) {
        template = template.slice('#/definitions/'.length);
    }
    if (!template) {
        return '';
    }
    const ast = compileTemplate(template);
    if (ast && ast.templateArgs && ast.templateArgs[0]) {
        return findTemplate(ast.templateArgs[0]);
    }
    return '';
}
exports.findDefinition = findDefinition;
function generateTemplateDef(template) {
    if (template.startsWith('#/definitions/')) {
        template = template.slice('#/definitions/'.length);
    }
    if (!template) {
        return '';
    }
    const ast = compileTemplate(template);
    if (!ast) {
        return '';
    }
    const { templateArgs, name } = ast;
    if (templateArgs && templateArgs.length) {
        return `${name}<${templateArgs.map((arg, argIndex) => 'T' + argIndex + ' = any').join(', ')}>`;
    }
    return name;
}
exports.generateTemplateDef = generateTemplateDef;
//# sourceMappingURL=compiler.js.map