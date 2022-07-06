'use strict';

var express = require('express');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

const router$1 = express__default["default"].Router();
const systemController = () => {
    router$1.get("/");
    return router$1;
};

const router = express__default["default"].Router();
const routes = () => {
    router.use("system", systemController());
    return router;
};

const app = express__default["default"]();
const port = 3000;
const host = "localhost";
app.use(express__default["default"].static(path__default["default"].resolve(__dirname, "../static")));
app.use(routes());
app.listen(process.env.PORT || port, process.env.HOST || host, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map
