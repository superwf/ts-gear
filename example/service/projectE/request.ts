/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import projects from "../../ts-gear";
import { PropertyOf, ReplyVOInt } from "./definition";
const { requester } = projects.find(p => p.name === "projectE")!;
/** request parameter type for deleteApiDataboardBoardEs */
export interface IDeleteApiDataboardBoardEsOption {
  /** 索引数组 */
  body?: Array<string>;
}

export interface IDeleteApiDataboardBoardEsResponse {
  /** OK */
  200: ReplyVOInt;
  /** No Content */
  204: any;
  /** Unauthorized */
  401: any;
  /** Forbidden */
  403: any;
}

export type IDeleteApiDataboardBoardEsResponseSuccess = PropertyOf<
  IDeleteApiDataboardBoardEsResponse,
  200
>;
/**
 * 删除索引
 * tags: Es
 * produces: *／*
 */
export function deleteApiDataboardBoardEs(
  option: IDeleteApiDataboardBoardEsOption
): Promise<IDeleteApiDataboardBoardEsResponseSuccess> {
  return requester("/api/databoard/board/es", {
    method: "delete",
    ...option
  }) as Promise<any>;
}
