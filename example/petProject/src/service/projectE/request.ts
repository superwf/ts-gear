/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "fffxx";
import type { ReplyVOInt } from "./definition";

/** @description request parameter type for deleteApiDataboardBoardEs */
export interface DeleteApiDataboardBoardEsOption {
  /**
   * @description
   *   索引数组
   */
  body?: {
    /**
        @description
          索引数组 */
    indexNames?: Array<string>;
  };
}

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
 * @tags: Es
 * @produces: *
 */
export const deleteApiDataboardBoardEs = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/databoard/board/es";
  function request(
    option?: DeleteApiDataboardBoardEsOption
  ): Promise<DeleteApiDataboardBoardEsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<DeleteApiDataboardBoardEsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
