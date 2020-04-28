"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasGenericSymbol = (name) => {
    return name.includes('<');
};
exports.removeGenericSymbol = (name) => name.replace(/<|>|,/g, '');
/** process generic type name */
exports.parseGenericNames = (name) => {
    let currentNode = { name: '', level: 0 };
    let parentNode = currentNode;
    let nestLevel = 0;
    const result = [currentNode];
    for (let i = 0; i < name.length; i += 1) {
        const c = name[i];
        if (c === '<') {
            currentNode.level = nestLevel;
            parentNode = currentNode;
            currentNode = { name: '', level: nestLevel, parent: parentNode };
            parentNode.children = parentNode.children || [];
            parentNode.children.push(currentNode);
            nestLevel += 1;
            result.push(currentNode);
        }
        else if (c === '>') {
            parentNode = parentNode.parent;
            if (currentNode.name) {
                currentNode.level = nestLevel;
                currentNode = { name: '', level: nestLevel, parent: parentNode };
            }
            nestLevel -= 1;
        }
        else if (c === ',') {
            currentNode = { name: '', level: nestLevel, parent: parentNode };
            parentNode.children.push(currentNode);
            result.push(currentNode);
        }
        else {
            currentNode.name += c;
        }
    }
    return result;
};
/** from generic name node to name string
 * reverse of parseGenericNames
 * */
exports.getGenericNameFromNode = (node) => {
    const { name, children } = node;
    if (!children) {
        return name;
    }
    return `${name}<${children.map((c) => exports.getGenericNameFromNode(c)).join(',')}>`;
};
/** try hard to keep every nest level generic name
 * if exist in definitionMap keep it
 * else remove generic symbol: <>
 * */
exports.guessGenericTypeName = (node, definitionMap) => {
    const name = exports.getGenericNameFromNode(node);
    if (!(node.name in definitionMap)) {
        return exports.removeGenericSymbol(name);
    }
    if (!node.children) {
        return node.name;
    }
    return `${node.name}<${node.children.map((c) => exports.guessGenericTypeName(c, definitionMap)).join(',')}>`;
};
