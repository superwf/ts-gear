import { Reference } from 'swagger-schema-official';
/**
 * @param name request function parameter interface name
 * @param parameters swagger request parameters
 * */
export declare const generateParameterType: (functionName: string, parameters: (import("swagger-schema-official").BodyParameter | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").GenericFormat & import("swagger-schema-official").BaseSchema & {
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
}) | Reference)[]) => {
    parameterTypeName: string;
    parameterTypeContent: string;
};
