/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "fffxx";
import type { ReplyVOInt, Data } from "./definition";

export type DeleteApiDataboardBoardEsOption = {
  /**
    @description
      索引数组 */
  indexNames?: Array<string>;
};

/** @description response type for deleteApiDataboardBoardEs */
export interface DeleteApiDataboardBoardEsResponse {
  /**
   * @description
   *   OK
   */
  200: ReplyVOInt;
  /**
   * @description
   *   No Content
   */
  204: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
}

export type DeleteApiDataboardBoardEsResponseSuccess =
  DeleteApiDataboardBoardEsResponse[200];
/**
 * @description
 *   删除索引
 * @tags Es
 * @produces *
 */
export const deleteApiDataboardBoardEs = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/databoard/board/es";
  function request(
    option?: DeleteApiDataboardBoardEsOption
  ): Promise<DeleteApiDataboardBoardEsResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      body: option,
    }) as unknown as Promise<DeleteApiDataboardBoardEsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

export type PostApiCreateOption = {
  /**
    @description
      dto */
  dto: Data;
};

/** @description response type for postApiCreate */
export interface PostApiCreateResponse {
  /**
   * @description
   *   OK
   */
  200: ReplyVOInt;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

export type PostApiCreateResponseSuccess = PostApiCreateResponse[200];
/**
 * @description
 *   ooo
 * @produces *
 * @consumes application/json
 */
export const postApiCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/create";
  function request(
    option?: PostApiCreateOption
  ): Promise<PostApiCreateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      body: option,
    }) as unknown as Promise<PostApiCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
