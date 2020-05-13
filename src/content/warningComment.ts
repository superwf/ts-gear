import { EOL } from 'os'

export const warningComment = [
  '/* eslint-disable */',
  '/* tslint:disable */',
  '/** Do not modify this file manually.',
  'its content will be overwriten next time execute the `tsg` command. */',
].join(EOL)
