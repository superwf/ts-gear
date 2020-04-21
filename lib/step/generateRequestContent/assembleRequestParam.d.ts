import { Reference } from 'swagger-schema-official';
import { ParameterPositionMap } from '../../interface';
/** assemble parameters to type ParameterPositionMap
 *
 * NOTD: body has a useless nest 'body' property, will generate type as
 * { body: { body: Pet } }
 * remove it to generate as below
 * { body: Pet }
 * */
export declare const assembleRequestParam: (parameters: (import("swagger-schema-official").BodyParameter | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").GenericFormat & import("swagger-schema-official").BaseSchema & {
    in: "formData";
    type: import("swagger-schema-official").ParameterType;
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").IntegerFormat & import("swagger-schema-official").BaseSchema & {
    in: "formData";
    type: import("swagger-schema-official").ParameterType;
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").NumberFormat & import("swagger-schema-official").BaseSchema & {
    in: "formData";
    type: import("swagger-schema-official").ParameterType;
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").StringFormat & import("swagger-schema-official").BaseSchema & {
    in: "formData";
    type: import("swagger-schema-official").ParameterType;
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").GenericFormat & import("swagger-schema-official").BaseSchema & {
    in: "query";
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").IntegerFormat & import("swagger-schema-official").BaseSchema & {
    in: "query";
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").NumberFormat & import("swagger-schema-official").BaseSchema & {
    in: "query";
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").StringFormat & import("swagger-schema-official").BaseSchema & {
    in: "query";
    allowEmptyValue?: boolean | undefined;
    collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi" | undefined;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").GenericFormat & import("swagger-schema-official").BaseSchema & {
    in: "path";
    required: true;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").IntegerFormat & import("swagger-schema-official").BaseSchema & {
    in: "path";
    required: true;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").NumberFormat & import("swagger-schema-official").BaseSchema & {
    in: "path";
    required: true;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").StringFormat & import("swagger-schema-official").BaseSchema & {
    in: "path";
    required: true;
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").GenericFormat & import("swagger-schema-official").BaseSchema & {
    in: "header";
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").IntegerFormat & import("swagger-schema-official").BaseSchema & {
    in: "header";
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").NumberFormat & import("swagger-schema-official").BaseSchema & {
    in: "header";
}) | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").StringFormat & import("swagger-schema-official").BaseSchema & {
    in: "header";
}) | Reference)[]) => ParameterPositionMap;
