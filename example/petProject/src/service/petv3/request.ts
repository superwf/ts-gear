/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "../../requester";
import type {
  GetPetFindByStatusStatus,
  Pet,
  ApiResponse,
  Order,
  User,
} from "./definition";

/** @description request parameter type for putPet */
export interface PutPetOption {
  body: Pet;
}

/** @description response type for putPet */
export interface PutPetResponse {
  /**
   * @description
   *   Successful operation
   */
  200: Pet;
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Pet not found
   */
  404: any;
  /**
   * @description
   *   Validation exception
   */
  422: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PutPetResponseSuccess = PutPetResponse[200];
/**
 * @description
 *   Update an existing pet by Id.
 *   Update an existing pet.
 * @tags pet
 */
export const putPet = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/pet";
  function request(
    option: PutPetOption & RequestInit
  ): Promise<PutPetResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutPetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postPet */
export interface PostPetOption {
  body: Pet;
}

/** @description response type for postPet */
export interface PostPetResponse {
  /**
   * @description
   *   Successful operation
   */
  200: Pet;
  /**
   * @description
   *   Invalid input
   */
  400: any;
  /**
   * @description
   *   Validation exception
   */
  422: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PostPetResponseSuccess = PostPetResponse[200];
/**
 * @description
 *   Add a new pet to the store.
 *   Add a new pet to the store.
 * @tags pet
 */
export const postPet = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/pet";
  function request(
    option: PostPetOption & RequestInit
  ): Promise<PostPetResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostPetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getPetFindByStatus */
export interface GetPetFindByStatusOption {
  /**
   * @description
   *   Status values that need to be considered for filter
   */
  query: {
    /**
        @description
          Status values that need to be considered for filter */
    status: GetPetFindByStatusStatus;
  };
}

/** @description response type for getPetFindByStatus */
export interface GetPetFindByStatusResponse {
  /**
   * @description
   *   successful operation
   */
  200: Array<Pet>;
  /**
   * @description
   *   Invalid status value
   */
  400: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetPetFindByStatusResponseSuccess = GetPetFindByStatusResponse[200];
/**
 * @description
 *   Multiple status values can be provided with comma separated strings.
 *   Finds Pets by status.
 * @tags pet
 */
export const getPetFindByStatus = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/pet/findByStatus";
  function request(
    option: GetPetFindByStatusOption & RequestInit
  ): Promise<GetPetFindByStatusResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetPetFindByStatusResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getPetFindByTags */
export interface GetPetFindByTagsOption {
  /**
   * @description
   *   Tags to filter by
   */
  query: {
    /**
        @description
          Tags to filter by */
    tags: Array<string>;
  };
}

/** @description response type for getPetFindByTags */
export interface GetPetFindByTagsResponse {
  /**
   * @description
   *   successful operation
   */
  200: Array<Pet>;
  /**
   * @description
   *   Invalid tag value
   */
  400: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetPetFindByTagsResponseSuccess = GetPetFindByTagsResponse[200];
/**
 * @description
 *   Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 *   Finds Pets by tags.
 * @tags pet
 */
export const getPetFindByTags = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/pet/findByTags";
  function request(
    option: GetPetFindByTagsOption & RequestInit
  ): Promise<GetPetFindByTagsResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetPetFindByTagsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getPetPetId */
export interface GetPetPetIdOption {
  /**
   * @description
   *   ID of pet to return
   */
  path: {
    /**
        @description
          ID of pet to return */
    petId: number;
  };
}

/** @description response type for getPetPetId */
export interface GetPetPetIdResponse {
  /**
   * @description
   *   successful operation
   */
  200: Pet;
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Pet not found
   */
  404: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetPetPetIdResponseSuccess = GetPetPetIdResponse[200];
/**
 * @description
 *   Returns a single pet.
 *   Find pet by ID.
 * @tags pet
 */
export const getPetPetId = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/pet/:petId";
  function request(
    option: GetPetPetIdOption & RequestInit
  ): Promise<GetPetPetIdResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetPetPetIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postPetPetId */
export interface PostPetPetIdOption {
  /**
   * @description
   *   ID of pet that needs to be updated
   */
  path: {
    /**
        @description
          ID of pet that needs to be updated */
    petId: number;
  };
}

/** @description request parameter type for postPetPetId */
export interface PostPetPetIdOption {
  /**
   * @description
   *   Name of pet that needs to be updated
   */
  query?: {
    /**
        @description
          Name of pet that needs to be updated */
    name?: string;
    /**
        @description
          Status of pet that needs to be updated */
    status?: string;
  };
}

/** @description response type for postPetPetId */
export interface PostPetPetIdResponse {
  /**
   * @description
   *   successful operation
   */
  200: Pet;
  /**
   * @description
   *   Invalid input
   */
  400: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PostPetPetIdResponseSuccess = PostPetPetIdResponse[200];
/**
 * @description
 *   Updates a pet resource based on the form data.
 *   Updates a pet in the store with form data.
 * @tags pet
 */
export const postPetPetId = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/pet/:petId";
  function request(
    option: PostPetPetIdOption & RequestInit
  ): Promise<PostPetPetIdResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostPetPetIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deletePetPetId */
export interface DeletePetPetIdOption {
  /** @description */
  header?: {
    /**
        @description */
    api_key?: string;
  };
}

/** @description request parameter type for deletePetPetId */
export interface DeletePetPetIdOption {
  /**
   * @description
   *   Pet id to delete
   */
  path: {
    /**
        @description
          Pet id to delete */
    petId: number;
  };
}

/** @description response type for deletePetPetId */
export interface DeletePetPetIdResponse {
  /**
   * @description
   *   Pet deleted
   */
  200: any;
  /**
   * @description
   *   Invalid pet value
   */
  400: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type DeletePetPetIdResponseSuccess = DeletePetPetIdResponse[200];
/**
 * @description
 *   Delete a pet.
 *   Deletes a pet.
 * @tags pet
 */
export const deletePetPetId = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/pet/:petId";
  function request(
    option: DeletePetPetIdOption & RequestInit
  ): Promise<DeletePetPetIdResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeletePetPetIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageOption {
  /**
   * @description
   *   ID of pet to update
   */
  path: {
    /**
        @description
          ID of pet to update */
    petId: number;
  };
}

/** @description request parameter type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageOption {
  /**
   * @description
   *   Additional Metadata
   */
  query?: {
    /**
        @description
          Additional Metadata */
    additionalMetadata?: string;
  };
}

/** @description request parameter type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageOption {
  body?: File;
}

/** @description response type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageResponse {
  /**
   * @description
   *   successful operation
   */
  200: ApiResponse;
  /**
   * @description
   *   No file uploaded
   */
  400: any;
  /**
   * @description
   *   Pet not found
   */
  404: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PostPetPetIdUploadImageResponseSuccess =
  PostPetPetIdUploadImageResponse[200];
/**
 * @description
 *   Upload image of the pet.
 *   Uploads an image.
 * @tags pet
 */
export const postPetPetIdUploadImage = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/pet/:petId/uploadImage";
  function request(
    option: PostPetPetIdUploadImageOption & RequestInit
  ): Promise<PostPetPetIdUploadImageResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostPetPetIdUploadImageResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getStoreInventory */
export interface GetStoreInventoryResponse {
  /**
   * @description
   *   successful operation
   */
  200: {
    [propertyName: string]: number;
  };
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetStoreInventoryResponseSuccess = GetStoreInventoryResponse[200];
/**
 * @description
 *   Returns a map of status codes to quantities.
 *   Returns pet inventories by status.
 * @tags store
 */
export const getStoreInventory = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/store/inventory";
  function request(
    option?: RequestInit
  ): Promise<GetStoreInventoryResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetStoreInventoryResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postStoreOrder */
export interface PostStoreOrderOption {
  body?: Order;
}

/** @description response type for postStoreOrder */
export interface PostStoreOrderResponse {
  /**
   * @description
   *   successful operation
   */
  200: Order;
  /**
   * @description
   *   Invalid input
   */
  400: any;
  /**
   * @description
   *   Validation exception
   */
  422: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PostStoreOrderResponseSuccess = PostStoreOrderResponse[200];
/**
 * @description
 *   Place a new order in the store.
 *   Place an order for a pet.
 * @tags store
 */
export const postStoreOrder = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/store/order";
  function request(
    option?: PostStoreOrderOption & RequestInit
  ): Promise<PostStoreOrderResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostStoreOrderResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getStoreOrderOrderId */
export interface GetStoreOrderOrderIdOption {
  /**
   * @description
   *   ID of order that needs to be fetched
   */
  path: {
    /**
        @description
          ID of order that needs to be fetched */
    orderId: number;
  };
}

/** @description response type for getStoreOrderOrderId */
export interface GetStoreOrderOrderIdResponse {
  /**
   * @description
   *   successful operation
   */
  200: Order;
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Order not found
   */
  404: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetStoreOrderOrderIdResponseSuccess =
  GetStoreOrderOrderIdResponse[200];
/**
 * @description
 *   For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 *   Find purchase order by ID.
 * @tags store
 */
export const getStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/store/order/:orderId";
  function request(
    option: GetStoreOrderOrderIdOption & RequestInit
  ): Promise<GetStoreOrderOrderIdResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetStoreOrderOrderIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteStoreOrderOrderId */
export interface DeleteStoreOrderOrderIdOption {
  /**
   * @description
   *   ID of the order that needs to be deleted
   */
  path: {
    /**
        @description
          ID of the order that needs to be deleted */
    orderId: number;
  };
}

/** @description response type for deleteStoreOrderOrderId */
export interface DeleteStoreOrderOrderIdResponse {
  /**
   * @description
   *   order deleted
   */
  200: any;
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Order not found
   */
  404: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type DeleteStoreOrderOrderIdResponseSuccess =
  DeleteStoreOrderOrderIdResponse[200];
/**
 * @description
 *   For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.
 *   Delete purchase order by identifier.
 * @tags store
 */
export const deleteStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/store/order/:orderId";
  function request(
    option: DeleteStoreOrderOrderIdOption & RequestInit
  ): Promise<DeleteStoreOrderOrderIdResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteStoreOrderOrderIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postUser */
export interface PostUserOption {
  body?: User;
}

/** @description response type for postUser */
export interface PostUserResponse {
  /**
   * @description
   *   successful operation
   */
  200: User;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PostUserResponseSuccess = PostUserResponse[200];
/**
 * @description
 *   This can only be done by the logged in user.
 *   Create user.
 * @tags user
 */
export const postUser = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/user";
  function request(
    option?: PostUserOption & RequestInit
  ): Promise<PostUserResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostUserResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postUserCreateWithList */
export interface PostUserCreateWithListOption {
  body?: Array<User>;
}

/** @description response type for postUserCreateWithList */
export interface PostUserCreateWithListResponse {
  /**
   * @description
   *   Successful operation
   */
  200: User;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PostUserCreateWithListResponseSuccess =
  PostUserCreateWithListResponse[200];
/**
 * @description
 *   Creates list of users with given input array.
 *   Creates list of users with given input array.
 * @tags user
 */
export const postUserCreateWithList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/user/createWithList";
  function request(
    option?: PostUserCreateWithListOption & RequestInit
  ): Promise<PostUserCreateWithListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostUserCreateWithListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getUserLogin */
export interface GetUserLoginOption {
  /**
   * @description
   *   The user name for login
   */
  query?: {
    /**
        @description
          The user name for login */
    username?: string;
    /**
        @description
          The password for login in clear text */
    password?: string;
  };
}

/** @description response type for getUserLogin */
export interface GetUserLoginResponse {
  /**
   * @description
   *   successful operation
   */
  200: string;
  /**
   * @description
   *   Invalid username/password supplied
   */
  400: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetUserLoginResponseSuccess = GetUserLoginResponse[200];
/**
 * @description
 *   Log into the system.
 *   Logs user into the system.
 * @tags user
 */
export const getUserLogin = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/user/login";
  function request(
    option?: GetUserLoginOption & RequestInit
  ): Promise<GetUserLoginResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetUserLoginResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getUserLogout */
export interface GetUserLogoutResponse {
  /**
   * @description
   *   successful operation
   */
  200: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetUserLogoutResponseSuccess = GetUserLogoutResponse[200];
/**
 * @description
 *   Log user out of the system.
 *   Logs out current logged in user session.
 * @tags user
 */
export const getUserLogout = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/user/logout";
  function request(
    option?: RequestInit
  ): Promise<GetUserLogoutResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetUserLogoutResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getUserUsername */
export interface GetUserUsernameOption {
  /**
   * @description
   *   The name that needs to be fetched. Use user1 for testing
   */
  path: {
    /**
        @description
          The name that needs to be fetched. Use user1 for testing */
    username: string;
  };
}

/** @description response type for getUserUsername */
export interface GetUserUsernameResponse {
  /**
   * @description
   *   successful operation
   */
  200: User;
  /**
   * @description
   *   Invalid username supplied
   */
  400: any;
  /**
   * @description
   *   User not found
   */
  404: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type GetUserUsernameResponseSuccess = GetUserUsernameResponse[200];
/**
 * @description
 *   Get user detail based on username.
 *   Get user by user name.
 * @tags user
 */
export const getUserUsername = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/user/:username";
  function request(
    option: GetUserUsernameOption & RequestInit
  ): Promise<GetUserUsernameResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetUserUsernameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putUserUsername */
export interface PutUserUsernameOption {
  /**
   * @description
   *   name that need to be deleted
   */
  path: {
    /**
        @description
          name that need to be deleted */
    username: string;
  };
}

/** @description request parameter type for putUserUsername */
export interface PutUserUsernameOption {
  body?: User;
}

/** @description response type for putUserUsername */
export interface PutUserUsernameResponse {
  /**
   * @description
   *   successful operation
   */
  200: any;
  /**
   * @description
   *   bad request
   */
  400: any;
  /**
   * @description
   *   user not found
   */
  404: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type PutUserUsernameResponseSuccess = PutUserUsernameResponse[200];
/**
 * @description
 *   This can only be done by the logged in user.
 *   Update user resource.
 * @tags user
 */
export const putUserUsername = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/user/:username";
  function request(
    option: PutUserUsernameOption & RequestInit
  ): Promise<PutUserUsernameResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutUserUsernameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteUserUsername */
export interface DeleteUserUsernameOption {
  /**
   * @description
   *   The name that needs to be deleted
   */
  path: {
    /**
        @description
          The name that needs to be deleted */
    username: string;
  };
}

/** @description response type for deleteUserUsername */
export interface DeleteUserUsernameResponse {
  /**
   * @description
   *   User deleted
   */
  200: any;
  /**
   * @description
   *   Invalid username supplied
   */
  400: any;
  /**
   * @description
   *   User not found
   */
  404: any;
  /**
   * @description
   *   Unexpected error
   */
  default: any;
}

export type DeleteUserUsernameResponseSuccess = DeleteUserUsernameResponse[200];
/**
 * @description
 *   This can only be done by the logged in user.
 *   Delete user resource.
 * @tags user
 */
export const deleteUserUsername = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/user/:username";
  function request(
    option: DeleteUserUsernameOption & RequestInit
  ): Promise<DeleteUserUsernameResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteUserUsernameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
