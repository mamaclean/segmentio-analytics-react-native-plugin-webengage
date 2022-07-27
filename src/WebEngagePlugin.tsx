import {
  DestinationPlugin,
  IdentifyEventType,
  PluginType,
  ScreenEventType,
  TrackEventType,
  SegmentAPISettings,
  UpdateType,
  JsonMap,
} from "@segment/analytics-react-native";
import WebEngage from "react-native-webengage";

export class WebEngagePlugin extends DestinationPlugin {
  type = PluginType.destination;
  key = 'WebEngage';

  private webEngage: WebEngage | undefined;
  private isInitialized = () =>
      this.webEngage !== undefined;

  update(_settings: SegmentAPISettings, _: UpdateType) {
    this.webEngage = new WebEngage();
  }

  identify(event: IdentifyEventType) {
    console.log("WebEngage login - pre check");
    if (this.isInitialized()) {
      const userId = event.userId;
      console.log("WebEngage login");
      this.webEngage.user.login(userId)
    }
    return event;
  }

  track(event: TrackEventType) {
    console.log("WebEngage track - pre check");
    const eventName = event.event;
    const properties = event.properties as JsonMap;

    if (this.isInitialized()) {
      console.log("WebEngage track");
      this.webEngage.track(eventName, properties);
    }
    return event;
  }

  screen(event: ScreenEventType) {
    console.log("WebEngage screen - pre check");
    if (this.isInitialized()) {
      console.log("WebEngage screen");
      const name = event.name;
      const properties = event.properties;
      this.webEngage.screen(name, properties)
    }
    return event;
  }

  reset(): void {
    console.log("WebEngage reset - pre check");
    if (this.isInitialized()) {
      console.log("WebEngage reset");
      this.webEngage.user.logout();
    }
  }
}
