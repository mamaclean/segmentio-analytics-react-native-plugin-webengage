"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebEngagePlugin = void 0;

var _analyticsReactNative = require("@segment/analytics-react-native");

var _reactNativeWebengage = _interopRequireDefault(require("react-native-webengage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WebEngagePlugin extends _analyticsReactNative.DestinationPlugin {
  constructor() {
    super(...arguments);

    _defineProperty(this, "type", _analyticsReactNative.PluginType.destination);

    _defineProperty(this, "key", 'WebEngage');

    _defineProperty(this, "webEngage", void 0);

    _defineProperty(this, "settings", void 0);

    _defineProperty(this, "isInitialized", () => this.webEngage !== undefined && this.settings !== undefined);
  }

  update(settings, _) {
    const webEngageSettings = settings.integrations[this.key];

    if (webEngageSettings === undefined || this.webEngage !== undefined) {
      return;
    }

    this.webEngage = new _reactNativeWebengage.default();
    this.settings = webEngageSettings;
  }

  identify(event) {
    if (this.isInitialized()) {
      var _this$webEngage;

      const userId = event.userId;
      (_this$webEngage = this.webEngage) === null || _this$webEngage === void 0 ? void 0 : _this$webEngage.login(userId);
    }

    return event;
  }

  track(event) {
    const eventName = event.event;
    const properties = event.properties;

    if (this.isInitialized()) {
      var _this$webEngage2;

      (_this$webEngage2 = this.webEngage) === null || _this$webEngage2 === void 0 ? void 0 : _this$webEngage2.track(eventName, properties);
    }

    return event;
  }

  screen(event) {
    if (this.isInitialized()) {
      var _this$webEngage3;

      const name = event.name;
      const properties = event.properties;
      (_this$webEngage3 = this.webEngage) === null || _this$webEngage3 === void 0 ? void 0 : _this$webEngage3.screen(name, properties);
    }

    return event;
  }

  reset() {
    var _this$webEngage4;

    (_this$webEngage4 = this.webEngage) === null || _this$webEngage4 === void 0 ? void 0 : _this$webEngage4.logout();
  }

}

exports.WebEngagePlugin = WebEngagePlugin;
//# sourceMappingURL=WebEngagePlugin.js.map