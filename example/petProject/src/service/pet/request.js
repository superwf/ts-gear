/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import projects from '../../tsg.config';
const project = projects.find((p) => p.name === 'pet');
const requester = project.requester;
export const putPetMockData = '';
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const putPet = /* #__PURE__ */ (() => {
    const method = 'put';
    const url = '/v2/pet';
    function putPet(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(putPetMockData);
        }
        return requester(url, { method, ...option });
    }
    putPet.method = method;
    putPet.url = url;
    return putPet;
})();
export const postPetMockData = '';
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const postPet = /* #__PURE__ */ (() => {
    const method = 'post';
    const url = '/v2/pet';
    function postPet(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(postPetMockData);
        }
        return requester(url, { method, ...option });
    }
    postPet.method = method;
    postPet.url = url;
    return postPet;
})();
export const getPetFindByStatusMockData = [
    {
        id: 0,
        category: { id: 0, pet: '', name: 'string' },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [{ id: 0, name: 'string' }],
        status: 'available',
    },
];
/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetFindByStatus = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/v2/pet/findByStatus';
    function getPetFindByStatus(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(getPetFindByStatusMockData);
        }
        return requester(url, { method, ...option });
    }
    getPetFindByStatus.method = method;
    getPetFindByStatus.url = url;
    return getPetFindByStatus;
})();
export const getPetPetIdMockData = {
    id: 0,
    category: { id: 0, pet: '', name: 'string' },
    name: 'doggie',
    photoUrls: ['string'],
    tags: [{ id: 0, name: 'string' }],
    status: 'available',
};
/**
 * Returns a single pet
 * Find pet by ID
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetPetId = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/v2/pet/:petId';
    function getPetPetId(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(getPetPetIdMockData);
        }
        return requester(url, { method, ...option });
    }
    getPetPetId.method = method;
    getPetPetId.url = url;
    return getPetPetId;
})();
export const postPetPetIdMockData = '';
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export const postPetPetId = /* #__PURE__ */ (() => {
    const method = 'post';
    const url = '/v2/pet/:petId';
    function postPetPetId(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(postPetPetIdMockData);
        }
        return requester(url, { method, ...option });
    }
    postPetPetId.method = method;
    postPetPetId.url = url;
    return postPetPetId;
})();
export const deletePetPetIdMockData = '';
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export const deletePetPetId = /* #__PURE__ */ (() => {
    const method = 'delete';
    const url = '/v2/pet/:petId';
    function deletePetPetId(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(deletePetPetIdMockData);
        }
        return requester(url, { method, ...option });
    }
    deletePetPetId.method = method;
    deletePetPetId.url = url;
    return deletePetPetId;
})();
export const postPetPetIdUploadImageMockData = {
    code: 0,
    type: 'string',
    message: 'string',
};
/**
 * uploads an image
 * tags: pet
 * produces: application／json
 * consumes: multipart／form-data
 */
export const postPetPetIdUploadImage = /* #__PURE__ */ (() => {
    const method = 'post';
    const url = '/v2/pet/:petId/uploadImage';
    function postPetPetIdUploadImage(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(postPetPetIdUploadImageMockData);
        }
        return requester(url, { method, ...option });
    }
    postPetPetIdUploadImage.method = method;
    postPetPetIdUploadImage.url = url;
    return postPetPetIdUploadImage;
})();
export const getStoreInventoryMockData = {
    additionalProp1: 0,
    additionalProp2: 0,
    additionalProp3: 0,
};
/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export const getStoreInventory = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/v2/store/inventory';
    function getStoreInventory() {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(getStoreInventoryMockData);
        }
        return requester(url, { method });
    }
    getStoreInventory.method = method;
    getStoreInventory.url = url;
    return getStoreInventory;
})();
export const postStoreOrderMockData = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2019-09-03T00:00:00.000Z',
    status: 'placed',
    complete: false,
};
/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export const postStoreOrder = /* #__PURE__ */ (() => {
    const method = 'post';
    const url = '/v2/store/order';
    function postStoreOrder(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(postStoreOrderMockData);
        }
        return requester(url, { method, ...option });
    }
    postStoreOrder.method = method;
    postStoreOrder.url = url;
    return postStoreOrder;
})();
export const getStoreOrderOrderIdMockData = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2019-09-03T00:00:00.000Z',
    status: 'placed',
    complete: false,
};
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const getStoreOrderOrderId = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/v2/store/order/:orderId';
    function getStoreOrderOrderId(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(getStoreOrderOrderIdMockData);
        }
        return requester(url, { method, ...option });
    }
    getStoreOrderOrderId.method = method;
    getStoreOrderOrderId.url = url;
    return getStoreOrderOrderId;
})();
export const deleteStoreOrderOrderIdMockData = '';
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const deleteStoreOrderOrderId = /* #__PURE__ */ (() => {
    const method = 'delete';
    const url = '/v2/store/order/:orderId';
    function deleteStoreOrderOrderId(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(deleteStoreOrderOrderIdMockData);
        }
        return requester(url, { method, ...option });
    }
    deleteStoreOrderOrderId.method = method;
    deleteStoreOrderOrderId.url = url;
    return deleteStoreOrderOrderId;
})();
export const postUserMockData = '';
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export const postUser = /* #__PURE__ */ (() => {
    const method = 'post';
    const url = '/v2/user';
    function postUser(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(postUserMockData);
        }
        return requester(url, { method, ...option });
    }
    postUser.method = method;
    postUser.url = url;
    return postUser;
})();
export const postUserCreateWithArrayMockData = '';
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithArray = /* #__PURE__ */ (() => {
    const method = 'post';
    const url = '/v2/user/createWithArray';
    function postUserCreateWithArray(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(postUserCreateWithArrayMockData);
        }
        return requester(url, { method, ...option });
    }
    postUserCreateWithArray.method = method;
    postUserCreateWithArray.url = url;
    return postUserCreateWithArray;
})();
export const postUserCreateWithListMockData = '';
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithList = /* #__PURE__ */ (() => {
    const method = 'post';
    const url = '/v2/user/createWithList';
    function postUserCreateWithList(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(postUserCreateWithListMockData);
        }
        return requester(url, { method, ...option });
    }
    postUserCreateWithList.method = method;
    postUserCreateWithList.url = url;
    return postUserCreateWithList;
})();
export const getUserLoginMockData = 'string';
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogin = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/v2/user/login';
    function getUserLogin(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(getUserLoginMockData);
        }
        return requester(url, { method, ...option });
    }
    getUserLogin.method = method;
    getUserLogin.url = url;
    return getUserLogin;
})();
export const getUserLogoutMockData = '';
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogout = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/v2/user/logout';
    function getUserLogout() {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(getUserLogoutMockData);
        }
        return requester(url, { method });
    }
    getUserLogout.method = method;
    getUserLogout.url = url;
    return getUserLogout;
})();
export const getUserUsernameMockData = {
    id: 0,
    username: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    phone: 'string',
    userStatus: 0,
};
/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserUsername = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/v2/user/:username';
    function getUserUsername(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(getUserUsernameMockData);
        }
        return requester(url, { method, ...option });
    }
    getUserUsername.method = method;
    getUserUsername.url = url;
    return getUserUsername;
})();
export const putUserUsernameMockData = '';
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export const putUserUsername = /* #__PURE__ */ (() => {
    const method = 'put';
    const url = '/v2/user/:username';
    function putUserUsername(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(putUserUsernameMockData);
        }
        return requester(url, { method, ...option });
    }
    putUserUsername.method = method;
    putUserUsername.url = url;
    return putUserUsername;
})();
export const deleteUserUsernameMockData = '';
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export const deleteUserUsername = /* #__PURE__ */ (() => {
    const method = 'delete';
    const url = '/v2/user/:username';
    function deleteUserUsername(option) {
        if (process.env.NODE_ENV === 'test') {
            return Promise.resolve(deleteUserUsernameMockData);
        }
        return requester(url, { method, ...option });
    }
    deleteUserUsername.method = method;
    deleteUserUsername.url = url;
    return deleteUserUsername;
})();
