"use strict";

var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use(createProxyMiddleware("/getPic", {
    // target: "http://localhost:8080",
    target: "https://hyunss.com",
    changeOrigin: true
  }));
};