/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "../../requester";
import type {
  GetPetFindByStatusItems,
  Pet,
  ApiResponse,
  Order,
  User,
} from "./definition";

/** @description request parameter type for putPet */
interface PutPetOption {
  /**
   * @description
   *   Pet object that needs to be added to the store
   */
  body: Pet;
}

/** @description response type for putPet */
interface PutPetResponse {
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
  405: any;
}

type PutPetResponseSuccess = any;
/**
 * @description
 *
 *   Update an existing pet
 * @tags: pet
 * @produces: application／xml,application/json
 * @consumes: application／json,application/xml
 */
export const putPet = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/v2/pet";
  function request(option: PutPetOption): Promise<PutPetResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PutPetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postPet */
interface PostPetOption {
  /**
   * @description
   *   Pet object that needs to be added to the store
   */
  body: Pet;
}

/** @description response type for postPet */
interface PostPetResponse {
  /**
   * @description
   *   Invalid input
   */
  405: any;
}

type PostPetResponseSuccess = any;
/**
 * @description
 *
 *   Add a new pet to the store
 * @tags: pet
 * @produces: application／xml,application/json
 * @consumes: application／json,application/xml
 */
export const postPet = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/pet";
  function request(option: PostPetOption): Promise<PostPetResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PostPetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getPetFindByStatus */
interface GetPetFindByStatusOption {
  /**
   * @description
   *   Status values that need to be considered for filter
   */
  query: {
    /**
        @description
          Status values that need to be considered for filter */
    status: Array<GetPetFindByStatusItems>;
  };
}

/** @description response type for getPetFindByStatus */
interface GetPetFindByStatusResponse {
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
}

type GetPetFindByStatusResponseSuccess = GetPetFindByStatusResponse[200];
/**
 * @description
 *   Multiple status values can be provided with comma separated strings
 *   Finds Pets by status
 * @tags: pet
 * @produces: application／xml,application/json
 */
export const getPetFindByStatus = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/pet/findByStatus";
  function request(
    option: GetPetFindByStatusOption
  ): Promise<GetPetFindByStatusResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetPetFindByStatusResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getPetPetId */
interface GetPetPetIdOption {
  /**
   * @description
   *   ID of pet to return
   * @format: int64
   */
  path: {
    /**
        @description
          ID of pet to return
        @format: int64 */
    petId: number;
  };
}

/** @description response type for getPetPetId */
interface GetPetPetIdResponse {
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
}

type GetPetPetIdResponseSuccess = GetPetPetIdResponse[200];
/**
 * @description
 *   Returns a single pet
 *   Find pet by ID
 * @tags: pet
 * @produces: application／xml,application/json
 */
export const getPetPetId = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/pet/:petId";
  function request(
    option: GetPetPetIdOption
  ): Promise<GetPetPetIdResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetPetPetIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postPetPetId */
interface PostPetPetIdOption {
  /**
   * @description
   *   ID of pet that needs to be updated
   * @format: int64
   */
  path: {
    /**
        @description
          ID of pet that needs to be updated
        @format: int64 */
    petId: number;
  };
  /**
   * @description
   *   Updated name of the pet
   */
  formData?: {
    /**
        @description
          Updated name of the pet */
    name?: string;
    /**
        @description
          Updated status of the pet */
    status?: string;
  };
}

/** @description response type for postPetPetId */
interface PostPetPetIdResponse {
  /**
   * @description
   *   Invalid input
   */
  405: any;
}

type PostPetPetIdResponseSuccess = any;
/**
 * @description
 *
 *   Updates a pet in the store with form data
 * @tags: pet
 * @produces: application／xml,application/json
 * @consumes: application／x-www-form-urlencoded
 */
export const postPetPetId = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/pet/:petId";
  function request(
    option: PostPetPetIdOption
  ): Promise<PostPetPetIdResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PostPetPetIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deletePetPetId */
interface DeletePetPetIdOption {
  header?: {
    api_key?: string;
  };
  /**
   * @description
   *   Pet id to delete
   * @format: int64
   */
  path: {
    /**
        @description
          Pet id to delete
        @format: int64 */
    petId: number;
  };
}

/** @description response type for deletePetPetId */
interface DeletePetPetIdResponse {
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
}

type DeletePetPetIdResponseSuccess = any;
/**
 * @description
 *
 *   Deletes a pet
 * @tags: pet
 * @produces: application／xml,application/json
 */
export const deletePetPetId = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/v2/pet/:petId";
  function request(
    option: DeletePetPetIdOption
  ): Promise<DeletePetPetIdResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<DeletePetPetIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postPetPetIdUploadImage */
interface PostPetPetIdUploadImageOption {
  /**
   * @description
   *   ID of pet to update
   * @format: int64
   */
  path: {
    /**
        @description
          ID of pet to update
        @format: int64 */
    petId: number;
  };
  /**
   * @description
   *   Additional data to pass to server
   */
  formData?: {
    /**
        @description
          Additional data to pass to server */
    additionalMetadata?: string;
    /**
        @description
          file to upload */
    file?: File;
  };
}

/** @description response type for postPetPetIdUploadImage */
interface PostPetPetIdUploadImageResponse {
  /**
   * @description
   *   successful operation
   */
  200: ApiResponse;
}

type PostPetPetIdUploadImageResponseSuccess = PostPetPetIdUploadImageResponse[200];
/**
 * @description
 *
 *   uploads an image
 * @tags: pet
 * @produces: application／json
 * @consumes: multipart／form-data
 */
export const postPetPetIdUploadImage = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/pet/:petId/uploadImage";
  function request(
    option: PostPetPetIdUploadImageOption
  ): Promise<PostPetPetIdUploadImageResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PostPetPetIdUploadImageResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getStoreInventory */
interface GetStoreInventoryResponse {
  /**
   * @description
   *   successful operation
   */
  200: {
    [propertyName: string]: number;
  };
}

type GetStoreInventoryResponseSuccess = GetStoreInventoryResponse[200];
/**
 * @description
 *   Returns a map of status codes to quantities
 *   Returns pet inventories by status
 * @tags: store
 * @produces: application／json
 */
export const getStoreInventory = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/store/inventory";
  function request(): Promise<GetStoreInventoryResponseSuccess> {
    return requester(url, {
      method,
    }) as Promise<GetStoreInventoryResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postStoreOrder */
interface PostStoreOrderOption {
  /**
   * @description
   *   order placed for purchasing the pet
   */
  body: Order;
}

/** @description response type for postStoreOrder */
interface PostStoreOrderResponse {
  /**
   * @description
   *   successful operation
   */
  200: Order;
  /**
   * @description
   *   Invalid Order
   */
  400: any;
}

type PostStoreOrderResponseSuccess = PostStoreOrderResponse[200];
/**
 * @description
 *
 *   Place an order for a pet
 * @tags: store
 * @produces: application／xml,application/json
 */
export const postStoreOrder = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/store/order";
  function request(
    option: PostStoreOrderOption
  ): Promise<PostStoreOrderResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PostStoreOrderResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getStoreOrderOrderId */
interface GetStoreOrderOrderIdOption {
  /**
   * @description
   *   ID of pet that needs to be fetched
   * @format: int64
   */
  path: {
    /**
        @description
          ID of pet that needs to be fetched
        @format: int64 */
    orderId: number;
  };
}

/** @description response type for getStoreOrderOrderId */
interface GetStoreOrderOrderIdResponse {
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
}

type GetStoreOrderOrderIdResponseSuccess = GetStoreOrderOrderIdResponse[200];
/**
 * @description
 *   For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 *   Find purchase order by ID
 * @tags: store
 * @produces: application／xml,application/json
 */
export const getStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/store/order/:orderId";
  function request(
    option: GetStoreOrderOrderIdOption
  ): Promise<GetStoreOrderOrderIdResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetStoreOrderOrderIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteStoreOrderOrderId */
interface DeleteStoreOrderOrderIdOption {
  /**
   * @description
   *   ID of the order that needs to be deleted
   * @format: int64
   */
  path: {
    /**
        @description
          ID of the order that needs to be deleted
        @format: int64 */
    orderId: number;
  };
}

/** @description response type for deleteStoreOrderOrderId */
interface DeleteStoreOrderOrderIdResponse {
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
}

type DeleteStoreOrderOrderIdResponseSuccess = any;
/**
 * @description
 *   For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 *   Delete purchase order by ID
 * @tags: store
 * @produces: application／xml,application/json
 */
export const deleteStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/v2/store/order/:orderId";
  function request(
    option: DeleteStoreOrderOrderIdOption
  ): Promise<DeleteStoreOrderOrderIdResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<DeleteStoreOrderOrderIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postUser */
interface PostUserOption {
  /**
   * @description
   *   Created user object
   */
  body: User;
}

/** @description response type for postUser */
interface PostUserResponse {
  /**
   * @description
   *   successful operation
   */
  default: any;
}

type PostUserResponseSuccess = PostUserResponse["default"];
/**
 * @description
 *   This can only be done by the logged in user.
 *   Create user
 * @tags: user
 * @produces: application／xml,application/json
 */
export const postUser = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/user";
  function request(option: PostUserOption): Promise<PostUserResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PostUserResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postUserCreateWithArray */
interface PostUserCreateWithArrayOption {
  /**
   * @description
   *   List of user object
   */
  body: Array<User>;
}

/** @description response type for postUserCreateWithArray */
interface PostUserCreateWithArrayResponse {
  /**
   * @description
   *   successful operation
   */
  default: any;
}

type PostUserCreateWithArrayResponseSuccess = PostUserCreateWithArrayResponse["default"];
/**
 * @description
 *
 *   Creates list of users with given input array
 * @tags: user
 * @produces: application／xml,application/json
 */
export const postUserCreateWithArray = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/user/createWithArray";
  function request(
    option: PostUserCreateWithArrayOption
  ): Promise<PostUserCreateWithArrayResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PostUserCreateWithArrayResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postUserCreateWithList */
interface PostUserCreateWithListOption {
  /**
   * @description
   *   List of user object
   */
  body: Array<User>;
}

/** @description response type for postUserCreateWithList */
interface PostUserCreateWithListResponse {
  /**
   * @description
   *   successful operation
   */
  default: any;
}

type PostUserCreateWithListResponseSuccess = PostUserCreateWithListResponse["default"];
/**
 * @description
 *
 *   Creates list of users with given input array
 * @tags: user
 * @produces: application／xml,application/json
 */
export const postUserCreateWithList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/user/createWithList";
  function request(
    option: PostUserCreateWithListOption
  ): Promise<PostUserCreateWithListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PostUserCreateWithListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getUserLogin */
interface GetUserLoginOption {
  /**
   * @description
   *   The user name for login
   */
  query: {
    /**
        @description
          The user name for login */
    username: string;
    /**
        @description
          The password for login in clear text */
    password: string;
  };
}

/** @description response type for getUserLogin */
interface GetUserLoginResponse {
  /**
   * @description
   *   successful operation
   */
  200: string;
  /**
   * @description
   *   Invalid username／password supplied
   */
  400: any;
}

type GetUserLoginResponseSuccess = GetUserLoginResponse[200];
/**
 * @description
 *
 *   Logs user into the system
 * @tags: user
 * @produces: application／xml,application/json
 */
export const getUserLogin = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/user/login";
  function request(
    option: GetUserLoginOption
  ): Promise<GetUserLoginResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetUserLoginResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getUserLogout */
interface GetUserLogoutResponse {
  /**
   * @description
   *   successful operation
   */
  default: any;
}

type GetUserLogoutResponseSuccess = GetUserLogoutResponse["default"];
/**
 * @description
 *
 *   Logs out current logged in user session
 * @tags: user
 * @produces: application／xml,application/json
 */
export const getUserLogout = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/user/logout";
  function request(): Promise<GetUserLogoutResponseSuccess> {
    return requester(url, { method }) as Promise<GetUserLogoutResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getUserUsername */
interface GetUserUsernameOption {
  /**
   * @description
   *   The name that needs to be fetched. Use user1 for testing.
   */
  path: {
    /**
        @description
          The name that needs to be fetched. Use user1 for testing.  */
    username: string;
  };
}

/** @description response type for getUserUsername */
interface GetUserUsernameResponse {
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
}

type GetUserUsernameResponseSuccess = GetUserUsernameResponse[200];
/**
 * @description
 *
 *   Get user by user name
 * @tags: user
 * @produces: application／xml,application/json
 */
export const getUserUsername = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/user/:username";
  function request(
    option: GetUserUsernameOption
  ): Promise<GetUserUsernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetUserUsernameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putUserUsername */
interface PutUserUsernameOption {
  /**
   * @description
   *   name that need to be updated
   */
  path: {
    /**
        @description
          name that need to be updated */
    username: string;
  };
  /**
   * @description
   *   Updated user object
   */
  body: User;
}

/** @description response type for putUserUsername */
interface PutUserUsernameResponse {
  /**
   * @description
   *   Invalid user supplied
   */
  400: any;
  /**
   * @description
   *   User not found
   */
  404: any;
}

type PutUserUsernameResponseSuccess = any;
/**
 * @description
 *   This can only be done by the logged in user.
 *   Updated user
 * @tags: user
 * @produces: application／xml,application/json
 */
export const putUserUsername = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/v2/user/:username";
  function request(
    option: PutUserUsernameOption
  ): Promise<PutUserUsernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<PutUserUsernameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteUserUsername */
interface DeleteUserUsernameOption {
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
interface DeleteUserUsernameResponse {
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
}

type DeleteUserUsernameResponseSuccess = any;
/**
 * @description
 *   This can only be done by the logged in user.
 *   Delete user
 * @tags: user
 * @produces: application／xml,application/json
 */
export const deleteUserUsername = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/v2/user/:username";
  function request(
    option: DeleteUserUsernameOption
  ): Promise<DeleteUserUsernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<DeleteUserUsernameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
