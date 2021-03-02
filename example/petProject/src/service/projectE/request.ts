/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "fffxx";
import type { ReplyVOInt } from "./definition";

/** request parameter type for deleteApiDataboardBoardEs */
interface DeleteApiDataboardBoardEsOption {
  /** 索引数组 */
  body?: Array<string>;
}

interface DeleteApiDataboardBoardEsResponse {
  /** OK */
  200: ReplyVOInt;
  /** No Content */
  204: any;
  /** Unauthorized */
  401: any;
  /** Forbidden */
  403: any;
}

type DeleteApiDataboardBoardEsResponseSuccess = DeleteApiDataboardBoardEsResponse[200];
/**
 * 删除索引
 * tags: Es
 * produces: *／*
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
    }) as Promise<DeleteApiDataboardBoardEsResponseSuccess>;
  }

  request.method = method;
  request.url = url;

  return request;
})();
