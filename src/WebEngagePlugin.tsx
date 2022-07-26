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
import type { SegmentWebEngageSettings } from './types';
import WebEngage from "react-native-webengage";

export class WebEngagePlugin extends DestinationPlugin {
  type = PluginType.destination;
  key = 'WebEngage';

  private webEngage: WebEngage | undefined;
  private settings: SegmentWebEngageSettings | undefined;
  private isInitialized = () =>
      this.webEngage !== undefined && this.settings !== undefined;

  update(settings: SegmentAPISettings, _: UpdateType) {
    const webEngageSettings = settings.integrations[
        this.key
        ] as SegmentWebEngageSettings;

    if (webEngageSettings === undefined || this.webEngage !== undefined) {
      return;
    }
    this.webEngage = new WebEngage();
    this.settings = webEngageSettings;
  }

  identify(event: IdentifyEventType) {
    if (this.isInitialized()) {
      const userId = event.userId;
      this.webEngage?.user.login(userId)
    }
    return event;
  }

  track(event: TrackEventType) {
    const eventName = event.event;
    const properties = event.properties as JsonMap;

    if (this.isInitialized()) {
      this.webEngage?.track(eventName, properties)
    }
    return event;
  }

  screen(event: ScreenEventType) {
    if (this.isInitialized()) {
      const name = event.name;
      const properties = event.properties;
      this.webEngage?.screen(name, properties)
    }
    return event;
  }

  reset(): void {
    this.webEngage?.user.logout();
  }
}
