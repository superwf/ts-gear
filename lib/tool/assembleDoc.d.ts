import { Schema, Operation } from 'swagger-schema-official';
/** add many possible properties to doc */
export declare const assembleDoc: (schema: import("swagger-schema-official").BodyParameter | (import("swagger-schema-official").BaseParameter & import("swagger-schema-official").GenericFormat & import("swagger-schema-official").BaseSchema & {
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
}) | Schema | Operation) => string[] | undefined;
