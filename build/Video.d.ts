import { Component } from "react";
import { VideoProperties } from "react-native-video";
export declare type VideoSource = {
    uri?: string;
} | number;
interface Props extends VideoProperties {
}
export declare class Video extends Component<Props> {
    private _root;
    private get _url();
    setNativeProps: () => void;
    seek: (time: number, _?: number | undefined) => void;
    save: () => Promise<void>;
    presentFullscreenPlayer: () => void;
    dismissFullscreenPlayer: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: VideoProperties): void;
    private _onProgress;
    private _onLoadStart;
    private _onLoad;
    private _onError;
    private _onSeek;
    private _onEnd;
    render: () => import("react").DetailedReactHTMLElement<{
        style: {
            position: "relative";
            width: string;
            height: number;
            paddingTop: string;
        };
    }, HTMLElement>;
}
export default Video;
