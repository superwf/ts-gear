/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { requester as requester } from "../../requester";
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const putPet = /* #__PURE__ */ (() => {
    const method = "put";
    const url = "/v2/pet";
    function putPet(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    putPet.method = method;
    putPet.url = url;
    return putPet;
})();
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const postPet = /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/v2/pet";
    function postPet(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    postPet.method = method;
    postPet.url = url;
    return postPet;
})();
/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetFindByStatus = /* #__PURE__ */ (() => {
    const method = "get";
    const url = "/v2/pet/findByStatus";
    function getPetFindByStatus(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getPetFindByStatus.method = method;
    getPetFindByStatus.url = url;
    return getPetFindByStatus;
})();
/**
 * Returns a single pet
 * Find pet by ID
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetPetId = /* #__PURE__ */ (() => {
    const method = "get";
    const url = "/v2/pet/:petId";
    function getPetPetId(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getPetPetId.method = method;
    getPetPetId.url = url;
    return getPetPetId;
})();
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export const postPetPetId = /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/v2/pet/:petId";
    function postPetPetId(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    postPetPetId.method = method;
    postPetPetId.url = url;
    return postPetPetId;
})();
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export const deletePetPetId = /* #__PURE__ */ (() => {
    const method = "delete";
    const url = "/v2/pet/:petId";
    function deletePetPetId(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    deletePetPetId.method = method;
    deletePetPetId.url = url;
    return deletePetPetId;
})();
/**
 * uploads an image
 * tags: pet
 * produces: application／json
 * consumes: multipart／form-data
 */
export const postPetPetIdUploadImage = /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/v2/pet/:petId/uploadImage";
    function postPetPetIdUploadImage(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    postPetPetIdUploadImage.method = method;
    postPetPetIdUploadImage.url = url;
    return postPetPetIdUploadImage;
})();
/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export const getStoreInventory = /* #__PURE__ */ (() => {
    const method = "get";
    const url = "/v2/store/inventory";
    function getStoreInventory() {
        return requester(url, {
            method,
        });
    }
    getStoreInventory.method = method;
    getStoreInventory.url = url;
    return getStoreInventory;
})();
/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export const postStoreOrder = /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/v2/store/order";
    function postStoreOrder(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    postStoreOrder.method = method;
    postStoreOrder.url = url;
    return postStoreOrder;
})();
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const getStoreOrderOrderId = /* #__PURE__ */ (() => {
    const method = "get";
    const url = "/v2/store/order/:orderId";
    function getStoreOrderOrderId(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getStoreOrderOrderId.method = method;
    getStoreOrderOrderId.url = url;
    return getStoreOrderOrderId;
})();
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const deleteStoreOrderOrderId = /* #__PURE__ */ (() => {
    const method = "delete";
    const url = "/v2/store/order/:orderId";
    function deleteStoreOrderOrderId(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    deleteStoreOrderOrderId.method = method;
    deleteStoreOrderOrderId.url = url;
    return deleteStoreOrderOrderId;
})();
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export const postUser = /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/v2/user";
    function postUser(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    postUser.method = method;
    postUser.url = url;
    return postUser;
})();
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithArray = /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/v2/user/createWithArray";
    function postUserCreateWithArray(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    postUserCreateWithArray.method = method;
    postUserCreateWithArray.url = url;
    return postUserCreateWithArray;
})();
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithList = /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/v2/user/createWithList";
    function postUserCreateWithList(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    postUserCreateWithList.method = method;
    postUserCreateWithList.url = url;
    return postUserCreateWithList;
})();
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogin = /* #__PURE__ */ (() => {
    const method = "get";
    const url = "/v2/user/login";
    function getUserLogin(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getUserLogin.method = method;
    getUserLogin.url = url;
    return getUserLogin;
})();
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogout = /* #__PURE__ */ (() => {
    const method = "get";
    const url = "/v2/user/logout";
    function getUserLogout() {
        return requester(url, { method });
    }
    getUserLogout.method = method;
    getUserLogout.url = url;
    return getUserLogout;
})();
/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserUsername = /* #__PURE__ */ (() => {
    const method = "get";
    const url = "/v2/user/:username";
    function getUserUsername(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getUserUsername.method = method;
    getUserUsername.url = url;
    return getUserUsername;
})();
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export const putUserUsername = /* #__PURE__ */ (() => {
    const method = "put";
    const url = "/v2/user/:username";
    function putUserUsername(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    putUserUsername.method = method;
    putUserUsername.url = url;
    return putUserUsername;
})();
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export const deleteUserUsername = /* #__PURE__ */ (() => {
    const method = "delete";
    const url = "/v2/user/:username";
    function deleteUserUsername(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    deleteUserUsername.method = method;
    deleteUserUsername.url = url;
    return deleteUserUsername;
})();
