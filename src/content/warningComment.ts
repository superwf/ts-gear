export const warningComment = (EOL: string) =>
  [
    '/* eslint-disable */',
    '/* tslint:disable */',
    '/** Do not modify manually.',
    'content is generated automatically by `ts-gear`. */',
  ].join(EOL)
