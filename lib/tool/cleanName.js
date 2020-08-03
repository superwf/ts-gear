"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanName = void 0;
const keyWords = Object.getOwnPropertyNames(global).filter(p => /[A-Z]/.test(p[0]));
const isReserved = (v) => keyWords.includes(v);
/**
 * clean type name for typescript definition
 * remove "#/definitions/"
 * remove "#/components/schema/"
 * remove all spaces
 * remove all non english charator, like "😝"
 * replace "«" with "<" when keepGeneric
 * replace "»" with ">" when keepGeneric
 * upper case each word first charator
 * */
exports.cleanName = (name, keepGeneric) => {
    const word = name.replace(/^#\/.+\//, '').replace(/./g, (target, index, str) => {
        // console.log(target, index, str)
        if (/[a-z]/i.test(target) && (index === 0 || /[^a-z]/i.test(str[index - 1]))) {
            return target.toUpperCase();
        }
        if (/\s/.test(target)) {
            return '';
        }
        if (keepGeneric) {
            /* eslint-disable-next-line default-case */
            switch (target) {
                case '«':
                case '<':
                    return '<';
                case '»':
                case '>':
                    return '>';
            }
        }
        if (/[^a-z]/i.test(target)) {
            return '';
        }
        return target;
    });
    // replace reserved key words, as Map, String
    if (isReserved(word)) {
        return `Tsg${word}`;
    }
    const words = word.split(/\b/);
    const hasReserved = words.some(w => {
        return isReserved(w);
    });
    if (!hasReserved) {
        return word;
    }
    return words
        .map(w => {
        return isReserved(w) ? `Tsg${w}` : w;
    })
        .join('');
};
