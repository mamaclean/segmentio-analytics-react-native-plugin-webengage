"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebEngagePlugin = void 0;
const analytics_react_native_1 = require("@segment/analytics-react-native");
const react_native_webengage_1 = __importDefault(require("react-native-webengage"));
class WebEngagePlugin extends analytics_react_native_1.DestinationPlugin {
    type = analytics_react_native_1.PluginType.destination;
    key = 'WebEngage';
    webEngage;
    settings;
    isInitialized = () => this.webEngage !== undefined && this.settings !== undefined;
    update(settings, _) {
        const webEngageSettings = settings.integrations[this.key];
        if (webEngageSettings === undefined || this.webEngage !== undefined) {
            return;
        }
        this.webEngage = new react_native_webengage_1.default();
        this.settings = webEngageSettings;
    }
    identify(event) {
        if (this.isInitialized()) {
            const userId = event.userId;
            this.webEngage?.login(userId);
        }
        return event;
    }
    track(event) {
        const eventName = event.event;
        const properties = event.properties;
        if (this.isInitialized()) {
            this.webEngage?.track(eventName, properties);
        }
        return event;
    }
    screen(event) {
        if (this.isInitialized()) {
            const name = event.name;
            const properties = event.properties;
            this.webEngage?.screen(name, properties);
        }
        return event;
    }
    reset() {
        this.webEngage?.logout();
    }
}
exports.WebEngagePlugin = WebEngagePlugin;
