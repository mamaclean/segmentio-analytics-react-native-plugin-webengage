import { DestinationPlugin, PluginType, } from "@segment/analytics-react-native";
import WebEngage from "react-native-webengage";
export class WebEngagePlugin extends DestinationPlugin {
    type = PluginType.destination;
    key = 'WebEngage';
    webEngage;
    settings;
    isInitialized = () => this.webEngage !== undefined && this.settings !== undefined;
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
