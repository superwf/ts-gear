/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type GetPetFindByStatusStatus = "available" | "pending" | "sold";
export type ComponentsSchemasOrderStatus = "placed" | "approved" | "delivered";
export type ComponentsSchemasPetStatus = GetPetFindByStatusStatus;
export interface Order {
  /**
   * @format int64
   * @example
   *   10
   */
  id?: number;
  /**
   * @format int64
   * @example
   *   198772
   */
  petId?: number;
  /**
   * @format int32
   * @example
   *   7
   */
  quantity?: number;
  /** @format date-time */
  shipDate?: string;
  /**
   * @description
   *   Order Status
   * @example
   *   approved
   */
  status?: ComponentsSchemasOrderStatus;
  complete?: boolean;
}

export interface Category {
  /**
   * @format int64
   * @example
   *   1
   */
  id?: number;
  /**
   * @example
   *   Dogs
   */
  name?: string;
}

export interface User {
  /**
   * @format int64
   * @example
   *   10
   */
  id?: number;
  /**
   * @example
   *   theUser
   */
  username?: string;
  /**
   * @example
   *   John
   */
  firstName?: string;
  /**
   * @example
   *   James
   */
  lastName?: string;
  /**
   * @example
   *   john@email.com
   */
  email?: string;
  /**
   * @example
   *   12345
   */
  password?: string;
  /**
   * @example
   *   12345
   */
  phone?: string;
  /**
   * @description
   *   User Status
   * @format int32
   * @example
   *   1
   */
  userStatus?: number;
}

export interface Tag {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface Pet {
  /**
   * @format int64
   * @example
   *   10
   */
  id?: number;
  /**
   * @example
   *   doggie
   */
  name: string;
  category?: Category;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  /**
   * @description
   *   pet status in the store
   */
  status?: ComponentsSchemasPetStatus;
}

export interface ApiResponse {
  /** @format int32 */
  code?: number;
  type?: string;
  message?: string;
}
