/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { requester as requester } from 'fffxx';
/**
 * 导出对标明细数据
 * tags: 净利矩阵api
 */
export const getApiLibraBoardExportDetails = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/exportDetails';
    if (process.env.NODE_ENV === 'test') {
        const mockData = {
            code: '0',
            data: 'string',
            message: 'success',
        };
        const mockRequest = function (option) {
            return Promise.resolve(mockData);
        };
        mockRequest.method = method;
        mockRequest.url = url;
        mockRequest.mockData = mockData;
        return mockRequest;
    }
    function request(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    request.method = method;
    request.url = url;
    request.mockData = undefined;
    return request;
})();
/**
 * 分页查询对标明细
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListDetail = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/listDetail';
    if (process.env.NODE_ENV === 'test') {
        const mockData = {
            code: '0',
            data: {
                currentPage: 1,
                firstIndex: 0,
                lastIndex: 10,
                list: [
                    {
                        deliveryRate: 2.31,
                        dimensionId: '122211',
                        dimensionName: '蓝月亮',
                        fixedRate: 2.31,
                        gmv: 321112.31,
                        gmvPercent: 15,
                        grossProfitRate: 2.31,
                        orderAvgPrice: 32.31,
                        orderAvgPriceCM: -1.2,
                        skuNum: 121,
                        unitAvgPrice: 32.31,
                        unitPriceCM: -1.4,
                        variableRate: 2.31,
                        warehouseRate: 2.31,
                    },
                ],
                pageCount: 10,
                pageSize: 10,
                total: 100,
            },
            message: 'success',
        };
        const mockRequest = function (option) {
            return Promise.resolve(mockData);
        };
        mockRequest.method = method;
        mockRequest.url = url;
        mockRequest.mockData = mockData;
        return mockRequest;
    }
    function request(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    request.method = method;
    request.url = url;
    request.mockData = undefined;
    return request;
})();
/**
 * 获取矩阵散点值
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListMatrix = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/listMatrix';
    if (process.env.NODE_ENV === 'test') {
        const mockData = {
            code: '0',
            data: {
                curTaxRate: 2.31,
                deliveryRate: 2.31,
                dynamicParams: [
                    { dynamicDeliveryRate: -1.1, dynamicWarehouseRate: -1.1, x: 1.2 },
                ],
                fixedRate: 2.31,
                orderAvgPrice: 32.31,
                unitAvgPrice: 32.31,
                unitPriceCM: -1.4,
                variableRate: 2.31,
                warehouseRate: 2.31,
            },
            message: 'success',
        };
        const mockRequest = function (option) {
            return Promise.resolve(mockData);
        };
        mockRequest.method = method;
        mockRequest.url = url;
        mockRequest.mockData = mockData;
        return mockRequest;
    }
    function request(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    request.method = method;
    request.url = url;
    request.mockData = undefined;
    return request;
})();
/**
 * 获取净利波动曲线
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListProfitCurve = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/listProfitCurve';
    if (process.env.NODE_ENV === 'test') {
        const mockData = {
            code: '0',
            data: [
                {
                    base: true,
                    baseDimension: '洗衣液',
                    details: [
                        {
                            date: '2020-12',
                            deliveryRate: 2.31,
                            grossProfitRate: 2.31,
                            orderAvgPrice: 32.31,
                            orderAvgPriceCM: -1.2,
                            unitPrice: 32.31,
                            unitPriceCM: -1.4,
                            warehouseRate: 2.31,
                        },
                    ],
                    gmv: 321123,
                },
            ],
            message: 'success',
        };
        const mockRequest = function (option) {
            return Promise.resolve(mockData);
        };
        mockRequest.method = method;
        mockRequest.url = url;
        mockRequest.mockData = mockData;
        return mockRequest;
    }
    function request(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    request.method = method;
    request.url = url;
    request.mockData = undefined;
    return request;
})();
/**
 * 查询净利平衡矩阵气泡
 * tags: 净利矩阵api
 */
export const getApiLibraBoardQueryBubbles = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/queryBubbles';
    if (process.env.NODE_ENV === 'test') {
        const mockData = {
            code: '0',
            data: {
                axisx: '[1,2.3,11.7]',
                axisy: '[1,2.3,11.7]',
                bubbles: [
                    {
                        base: true,
                        bubbleId: '100211',
                        bubbleName: '蓝月亮',
                        contributionMargin: -1.1,
                        gmv: 15122,
                        gmvPercent: 15,
                        xVal: 1.2,
                        yVal: 1.2,
                    },
                ],
            },
            message: 'success',
        };
        const mockRequest = function (option) {
            return Promise.resolve(mockData);
        };
        mockRequest.method = method;
        mockRequest.url = url;
        mockRequest.mockData = mockData;
        return mockRequest;
    }
    function request(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    request.method = method;
    request.url = url;
    request.mockData = undefined;
    return request;
})();
