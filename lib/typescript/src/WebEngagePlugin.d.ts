import { DestinationPlugin, IdentifyEventType, PluginType, ScreenEventType, TrackEventType, SegmentAPISettings, UpdateType } from "@segment/analytics-react-native";
export declare class WebEngagePlugin extends DestinationPlugin {
    type: PluginType;
    key: string;
    private webEngage;
    private isInitialized;
    update(_settings: SegmentAPISettings, _: UpdateType): void;
    identify(event: IdentifyEventType): IdentifyEventType;
    track(event: TrackEventType): TrackEventType;
    screen(event: ScreenEventType): ScreenEventType;
    reset(): void;
}
