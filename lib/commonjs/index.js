"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WebEngagePlugin = require("./WebEngagePlugin.js");

Object.keys(_WebEngagePlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WebEngagePlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _WebEngagePlugin[key];
    }
  });
});
//# sourceMappingURL=index.js.map