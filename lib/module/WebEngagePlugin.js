function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { DestinationPlugin, PluginType } from "@segment/analytics-react-native";
import WebEngage from "react-native-webengage";
export class WebEngagePlugin extends DestinationPlugin {
  constructor() {
    super(...arguments);

    _defineProperty(this, "type", PluginType.destination);

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

    this.webEngage = new WebEngage();
    this.settings = webEngageSettings;
  }

  identify(event) {
    if (this.isInitialized()) {
      var _this$webEngage;

      const userId = event.userId;
      (_this$webEngage = this.webEngage) === null || _this$webEngage === void 0 ? void 0 : _this$webEngage.user.login(userId);
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

    (_this$webEngage4 = this.webEngage) === null || _this$webEngage4 === void 0 ? void 0 : _this$webEngage4.user.logout();
  }

}
//# sourceMappingURL=WebEngagePlugin.js.map