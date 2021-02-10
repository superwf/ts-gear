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
    function getApiLibraBoardExportDetails(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getApiLibraBoardExportDetails.method = method;
    getApiLibraBoardExportDetails.url = url;
    return getApiLibraBoardExportDetails;
})();
/**
 * 分页查询对标明细
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListDetail = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/listDetail';
    function getApiLibraBoardListDetail(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getApiLibraBoardListDetail.method = method;
    getApiLibraBoardListDetail.url = url;
    return getApiLibraBoardListDetail;
})();
/**
 * 获取矩阵散点值
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListMatrix = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/listMatrix';
    function getApiLibraBoardListMatrix(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getApiLibraBoardListMatrix.method = method;
    getApiLibraBoardListMatrix.url = url;
    return getApiLibraBoardListMatrix;
})();
/**
 * 获取净利波动曲线
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListProfitCurve = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/listProfitCurve';
    function getApiLibraBoardListProfitCurve(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getApiLibraBoardListProfitCurve.method = method;
    getApiLibraBoardListProfitCurve.url = url;
    return getApiLibraBoardListProfitCurve;
})();
/**
 * 查询净利平衡矩阵气泡
 * tags: 净利矩阵api
 */
export const getApiLibraBoardQueryBubbles = /* #__PURE__ */ (() => {
    const method = 'get';
    const url = '/api/libra/board/queryBubbles';
    function getApiLibraBoardQueryBubbles(option) {
        return requester(url, {
            method,
            ...option,
        });
    }
    getApiLibraBoardQueryBubbles.method = method;
    getApiLibraBoardQueryBubbles.url = url;
    return getApiLibraBoardQueryBubbles;
})();
