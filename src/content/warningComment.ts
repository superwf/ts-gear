import { config } from '../constant'

export const warningComment = () =>
  [
    '/* eslint-disable */',
    '/* tslint:disable */',
    '/** Do not modify manually.',
    'content is generated automatically by `ts-gear`. */',
  ].join(config.EOL)
