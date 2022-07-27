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
    console.log("WebEngage login - pre check");

    if (this.isInitialized()) {
      const userId = event.userId;
      console.log("WebEngage login");
      this.webEngage.user.login(userId);
    }

    return event;
  }

  track(event) {
    console.log("WebEngage track - pre check");
    const eventName = event.event;
    const properties = event.properties;

    if (this.isInitialized()) {
      console.log("WebEngage track");
      this.webEngage.track(eventName, properties);
    }

    return event;
  }

  screen(event) {
    console.log("WebEngage screen - pre check");

    if (this.isInitialized()) {
      console.log("WebEngage screen");
      const name = event.name;
      const properties = event.properties;
      this.webEngage.screen(name, properties);
    }

    return event;
  }

  reset() {
    console.log("WebEngage reset - pre check");

    if (this.isInitialized()) {
      console.log("WebEngage reset");
      this.webEngage.user.logout();
    }
  }

}
//# sourceMappingURL=WebEngagePlugin.js.map