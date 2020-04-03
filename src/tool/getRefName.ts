/**
 * @param the $ref string in schema, as below
 *
 * ```json
 * "schema": {
 *   "$ref": "#/definitions/ApiResponse"
 * }
 * ```
 *
 * @return the clean ref type name, like "ApiResponse"
 * */
export const getRefName = ($ref: string) => $ref.replace(/#\/\w+\//, '')
