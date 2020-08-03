import projects from '../../tsg.config';
const project = projects.find((p) => p.name === 'pet');
const requester = project.requester;
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function putPet(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(putPet.mockData);
    }
    return requester('/v2/pet', { method: 'put', ...option });
}
if (process.env.NODE_ENV === 'test') {
    putPet.mockData = '';
}
putPet.method = 'put';
putPet.url = '/v2/pet';
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function postPet(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postPet.mockData);
    }
    return requester('/v2/pet', { method: 'post', ...option });
}
if (process.env.NODE_ENV === 'test') {
    postPet.mockData = '';
}
postPet.method = 'post';
postPet.url = '/v2/pet';
/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * tags: pet
 * produces: application／xml,application/json
 */
export function getPetFindByStatus(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getPetFindByStatus.mockData);
    }
    return requester('/v2/pet/findByStatus', {
        method: 'get',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    getPetFindByStatus.mockData = [
        {
            id: 0,
            category: { id: 0, pet: '', name: 'string' },
            name: 'doggie',
            photoUrls: ['string'],
            tags: [{ id: 0, name: 'string' }],
            status: 'available',
        },
    ];
}
getPetFindByStatus.method = 'get';
getPetFindByStatus.url = '/v2/pet/findByStatus';
/**
 * Returns a single pet
 * Find pet by ID
 * tags: pet
 * produces: application／xml,application/json
 */
export function getPetPetId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getPetPetId.mockData);
    }
    return requester('/v2/pet/:petId', { method: 'get', ...option });
}
if (process.env.NODE_ENV === 'test') {
    getPetPetId.mockData = {
        id: 0,
        category: { id: 0, pet: '', name: 'string' },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [{ id: 0, name: 'string' }],
        status: 'available',
    };
}
getPetPetId.method = 'get';
getPetPetId.url = '/v2/pet/:petId';
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export function postPetPetId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postPetPetId.mockData);
    }
    return requester('/v2/pet/:petId', { method: 'post', ...option });
}
if (process.env.NODE_ENV === 'test') {
    postPetPetId.mockData = '';
}
postPetPetId.method = 'post';
postPetPetId.url = '/v2/pet/:petId';
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export function deletePetPetId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(deletePetPetId.mockData);
    }
    return requester('/v2/pet/:petId', {
        method: 'delete',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    deletePetPetId.mockData = '';
}
deletePetPetId.method = 'delete';
deletePetPetId.url = '/v2/pet/:petId';
/**
 * uploads an image
 * tags: pet
 * produces: application／json
 * consumes: multipart／form-data
 */
export function postPetPetIdUploadImage(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postPetPetIdUploadImage.mockData);
    }
    return requester('/v2/pet/:petId/uploadImage', {
        method: 'post',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    postPetPetIdUploadImage.mockData = {
        code: 0,
        type: 'string',
        message: 'string',
    };
}
postPetPetIdUploadImage.method = 'post';
postPetPetIdUploadImage.url = '/v2/pet/:petId/uploadImage';
/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export function getStoreInventory() {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getStoreInventory.mockData);
    }
    return requester('/v2/store/inventory', { method: 'get' });
}
if (process.env.NODE_ENV === 'test') {
    getStoreInventory.mockData = {
        additionalProp1: 0,
        additionalProp2: 0,
        additionalProp3: 0,
    };
}
getStoreInventory.method = 'get';
getStoreInventory.url = '/v2/store/inventory';
/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export function postStoreOrder(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postStoreOrder.mockData);
    }
    return requester('/v2/store/order', { method: 'post', ...option });
}
if (process.env.NODE_ENV === 'test') {
    postStoreOrder.mockData = {
        id: 0,
        petId: 0,
        quantity: 0,
        shipDate: '2019-09-03T00:00:00.000Z',
        status: 'placed',
        complete: false,
    };
}
postStoreOrder.method = 'post';
postStoreOrder.url = '/v2/store/order';
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export function getStoreOrderOrderId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getStoreOrderOrderId.mockData);
    }
    return requester('/v2/store/order/:orderId', {
        method: 'get',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    getStoreOrderOrderId.mockData = {
        id: 0,
        petId: 0,
        quantity: 0,
        shipDate: '2019-09-03T00:00:00.000Z',
        status: 'placed',
        complete: false,
    };
}
getStoreOrderOrderId.method = 'get';
getStoreOrderOrderId.url = '/v2/store/order/:orderId';
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export function deleteStoreOrderOrderId(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(deleteStoreOrderOrderId.mockData);
    }
    return requester('/v2/store/order/:orderId', {
        method: 'delete',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    deleteStoreOrderOrderId.mockData = '';
}
deleteStoreOrderOrderId.method = 'delete';
deleteStoreOrderOrderId.url = '/v2/store/order/:orderId';
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export function postUser(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postUser.mockData);
    }
    return requester('/v2/user', { method: 'post', ...option });
}
if (process.env.NODE_ENV === 'test') {
    postUser.mockData = '';
}
postUser.method = 'post';
postUser.url = '/v2/user';
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithArray(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postUserCreateWithArray.mockData);
    }
    return requester('/v2/user/createWithArray', {
        method: 'post',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    postUserCreateWithArray.mockData = '';
}
postUserCreateWithArray.method = 'post';
postUserCreateWithArray.url = '/v2/user/createWithArray';
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithList(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(postUserCreateWithList.mockData);
    }
    return requester('/v2/user/createWithList', {
        method: 'post',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    postUserCreateWithList.mockData = '';
}
postUserCreateWithList.method = 'post';
postUserCreateWithList.url = '/v2/user/createWithList';
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogin(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getUserLogin.mockData);
    }
    return requester('/v2/user/login', { method: 'get', ...option });
}
if (process.env.NODE_ENV === 'test') {
    getUserLogin.mockData = 'string';
}
getUserLogin.method = 'get';
getUserLogin.url = '/v2/user/login';
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogout() {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getUserLogout.mockData);
    }
    return requester('/v2/user/logout', { method: 'get' });
}
if (process.env.NODE_ENV === 'test') {
    getUserLogout.mockData = '';
}
getUserLogout.method = 'get';
getUserLogout.url = '/v2/user/logout';
/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserUsername(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(getUserUsername.mockData);
    }
    return requester('/v2/user/:username', {
        method: 'get',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    getUserUsername.mockData = {
        id: 0,
        username: 'string',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        password: 'string',
        phone: 'string',
        userStatus: 0,
    };
}
getUserUsername.method = 'get';
getUserUsername.url = '/v2/user/:username';
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export function putUserUsername(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(putUserUsername.mockData);
    }
    return requester('/v2/user/:username', {
        method: 'put',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    putUserUsername.mockData = '';
}
putUserUsername.method = 'put';
putUserUsername.url = '/v2/user/:username';
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export function deleteUserUsername(option) {
    if (process.env.NODE_ENV === 'test') {
        return Promise.resolve(deleteUserUsername.mockData);
    }
    return requester('/v2/user/:username', {
        method: 'delete',
        ...option,
    });
}
if (process.env.NODE_ENV === 'test') {
    deleteUserUsername.mockData = '';
}
deleteUserUsername.method = 'delete';
deleteUserUsername.url = '/v2/user/:username';
