import projects from '../../tsg.config';
const project = projects.find((p) => p.name === 'pet');
const requester = project.requester;
const putPetMockData = '';
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function putPet(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(putPetMockData);
    }
    return requester('/v2/pet', { method: 'put', ...option });
}
export const putPetMethod = 'put';
export const putPetUrl = '/v2/pet';
const postPetMockData = '';
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function postPet(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postPetMockData);
    }
    return requester('/v2/pet', { method: 'post', ...option });
}
export const postPetMethod = 'post';
export const postPetUrl = '/v2/pet';
const getPetFindByStatusMockData = [
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
export function getPetFindByStatus(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getPetFindByStatusMockData);
    }
    return requester('/v2/pet/findByStatus', {
        method: 'get',
        ...option,
    });
}
export const getPetFindByStatusMethod = 'get';
export const getPetFindByStatusUrl = '/v2/pet/findByStatus';
const getPetPetIdMockData = {
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
export function getPetPetId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getPetPetIdMockData);
    }
    return requester('/v2/pet/:petId', { method: 'get', ...option });
}
export const getPetPetIdMethod = 'get';
export const getPetPetIdUrl = '/v2/pet/:petId';
const postPetPetIdMockData = '';
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export function postPetPetId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postPetPetIdMockData);
    }
    return requester('/v2/pet/:petId', { method: 'post', ...option });
}
export const postPetPetIdMethod = 'post';
export const postPetPetIdUrl = '/v2/pet/:petId';
const deletePetPetIdMockData = '';
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export function deletePetPetId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(deletePetPetIdMockData);
    }
    return requester('/v2/pet/:petId', {
        method: 'delete',
        ...option,
    });
}
export const deletePetPetIdMethod = 'delete';
export const deletePetPetIdUrl = '/v2/pet/:petId';
const postPetPetIdUploadImageMockData = {
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
export function postPetPetIdUploadImage(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postPetPetIdUploadImageMockData);
    }
    return requester('/v2/pet/:petId/uploadImage', {
        method: 'post',
        ...option,
    });
}
export const postPetPetIdUploadImageMethod = 'post';
export const postPetPetIdUploadImageUrl = '/v2/pet/:petId/uploadImage';
const getStoreInventoryMockData = {
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
export function getStoreInventory() {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getStoreInventoryMockData);
    }
    return requester('/v2/store/inventory', { method: 'get' });
}
export const getStoreInventoryMethod = 'get';
export const getStoreInventoryUrl = '/v2/store/inventory';
const postStoreOrderMockData = {
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
export function postStoreOrder(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postStoreOrderMockData);
    }
    return requester('/v2/store/order', { method: 'post', ...option });
}
export const postStoreOrderMethod = 'post';
export const postStoreOrderUrl = '/v2/store/order';
const getStoreOrderOrderIdMockData = {
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
export function getStoreOrderOrderId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getStoreOrderOrderIdMockData);
    }
    return requester('/v2/store/order/:orderId', {
        method: 'get',
        ...option,
    });
}
export const getStoreOrderOrderIdMethod = 'get';
export const getStoreOrderOrderIdUrl = '/v2/store/order/:orderId';
const deleteStoreOrderOrderIdMockData = '';
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export function deleteStoreOrderOrderId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(deleteStoreOrderOrderIdMockData);
    }
    return requester('/v2/store/order/:orderId', {
        method: 'delete',
        ...option,
    });
}
export const deleteStoreOrderOrderIdMethod = 'delete';
export const deleteStoreOrderOrderIdUrl = '/v2/store/order/:orderId';
const postUserMockData = '';
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export function postUser(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postUserMockData);
    }
    return requester('/v2/user', { method: 'post', ...option });
}
export const postUserMethod = 'post';
export const postUserUrl = '/v2/user';
const postUserCreateWithArrayMockData = '';
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithArray(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postUserCreateWithArrayMockData);
    }
    return requester('/v2/user/createWithArray', {
        method: 'post',
        ...option,
    });
}
export const postUserCreateWithArrayMethod = 'post';
export const postUserCreateWithArrayUrl = '/v2/user/createWithArray';
const postUserCreateWithListMockData = '';
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithList(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postUserCreateWithListMockData);
    }
    return requester('/v2/user/createWithList', {
        method: 'post',
        ...option,
    });
}
export const postUserCreateWithListMethod = 'post';
export const postUserCreateWithListUrl = '/v2/user/createWithList';
const getUserLoginMockData = 'string';
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogin(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getUserLoginMockData);
    }
    return requester('/v2/user/login', { method: 'get', ...option });
}
export const getUserLoginMethod = 'get';
export const getUserLoginUrl = '/v2/user/login';
const getUserLogoutMockData = '';
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogout() {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getUserLogoutMockData);
    }
    return requester('/v2/user/logout', { method: 'get' });
}
export const getUserLogoutMethod = 'get';
export const getUserLogoutUrl = '/v2/user/logout';
const getUserUsernameMockData = {
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
export function getUserUsername(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getUserUsernameMockData);
    }
    return requester('/v2/user/:username', {
        method: 'get',
        ...option,
    });
}
export const getUserUsernameMethod = 'get';
export const getUserUsernameUrl = '/v2/user/:username';
const putUserUsernameMockData = '';
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export function putUserUsername(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(putUserUsernameMockData);
    }
    return requester('/v2/user/:username', {
        method: 'put',
        ...option,
    });
}
export const putUserUsernameMethod = 'put';
export const putUserUsernameUrl = '/v2/user/:username';
const deleteUserUsernameMockData = '';
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export function deleteUserUsername(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(deleteUserUsernameMockData);
    }
    return requester('/v2/user/:username', {
        method: 'delete',
        ...option,
    });
}
export const deleteUserUsernameMethod = 'delete';
export const deleteUserUsernameUrl = '/v2/user/:username';
