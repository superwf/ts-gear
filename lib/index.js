"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("./requester/fetch");
Object.defineProperty(exports, "fetchRequester", { enumerable: true, get: function () { return fetch_1.requester; } });
var axios_1 = require("./requester/axios");
Object.defineProperty(exports, "axiosRequester", { enumerable: true, get: function () { return axios_1.requester; } });
