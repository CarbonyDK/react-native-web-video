import { createElement, Component, ReactEventHandler, createRef } from "react";
import { StyleSheet } from "react-native";
import { VideoProperties } from "react-native-video";
import { openFullscreen } from "./utils/open-fullscreen";
import { closeFullscreen } from "./utils/close-fullscreen";

export type VideoSource = { uri?: string } | number;

interface Props extends VideoProperties {}

export class Video extends Component<Props> {
	private _root = createRef<HTMLVideoElement>();

	private get _url(): number | string | undefined {
		const { source } = this.props;
		return typeof source !== "number" ? source.uri : source;
	}

	public setNativeProps = () => {};

	public seek = (time: number, _?: number) => {
		const element = this._root.current;
		if (element) {
			element.currentTime = time;
		}
	};

	public save = (): Promise<void> => {
		console.log("Saving in local..");
		return Promise.resolve();
	};

	public presentFullscreenPlayer = () => {
		const element = this._root.current;
		if (element) {
			openFullscreen(element);
		}
	};

	public dismissFullscreenPlayer = () => {
		closeFullscreen();
	};

	componentDidMount() {
		const { fullscreen, rate, seek } = this.props;
		const element = this._root.current;

		if (element) {
			if (fullscreen) {
				openFullscreen(element);
			}

			// element.addEventListener("progress", this._onProgress);
			element.addEventListener("timeupdate", this._onProgress);
			element.addEventListener("seeking", this._onSeek);
			element.addEventListener("ended", this._onEnd);

			if (rate) {
				element.playbackRate = rate;
			}

			if (seek) {
				this.seek(seek);
			}
		}
	}

	componentDidUpdate(prevProps: VideoProperties) {
		const { fullscreen, rate, seek, currentTime, paused } = this.props;
		const element = this._root.current;

		if (element) {
			if (fullscreen !== prevProps.fullscreen) {
				if (fullscreen) {
					openFullscreen(element);
				} else {
					closeFullscreen();
				}
			}

			if (rate !== prevProps.rate && rate) {
				element.playbackRate = rate;

				if (this.props.onPlaybackRateChange) {
					this.props.onPlaybackRateChange({
						playbackRate: rate
					});
				}
			}

			if (seek !== prevProps.seek && seek) {
				element.currentTime = seek;
			}

			if (currentTime !== prevProps.currentTime && currentTime) {
				element.currentTime = currentTime;
			}

			if (paused !== prevProps.paused && paused !== undefined) {
				if (paused) {
					element.pause();
				} else {
					element.play();
				}
			}
		}
	}

	private _onProgress = (event: any) => {
		const element = this._root.current;

		if (this.props.onProgress) {
			this.props.onProgress({
				currentTime: element!.currentTime,
				// timeStamp: event.timeStamp,

				// @todo add support for these values
				playableDuration: 0,
				seekableDuration: 0
			});
		}
	};

	private _onLoadStart = () => {
		if (this.props.onLoadStart) {
			this.props.onLoadStart();
		}
	};

	private _onLoad: ReactEventHandler<HTMLVideoElement> = () => {
		const element = this._root.current;
		if (this.props.onLoad && element) {
			this.props.onLoad({
				canPlayFastForward: true,
				canPlayReverse: true,
				canPlaySlowForward: true,
				canStepBackward: true,
				canStepForward: true,
				canPlaySlowReverse: true,
				currentTime: element.currentTime,
				duration: element.duration,
				naturalSize: {
					height: element.videoHeight,
					width: element.videoWidth,
					orientation: "horizontal"
				}
			});
		}
	};

	private _onError = (error: any) => {
		if (this.props.onError) {
			this.props.onError({
				error: {
					"": "",
					errorString:
						error instanceof Error ? error.message : "Unexpected error"
				}
			});
		}
	};

	private _onSeek = () => {
		const element = this._root.current;
		if (this.props.onSeek && element) {
			this.props.onSeek({
				currentTime: element.currentTime,

				// @todo add support for these values
				seekTime: 0,
				target: 0
			});
		}
	};

	private _onEnd = () => {
		if (this.props.onEnd) {
			this.props.onEnd();
		}
	};

	render = () => {
		const {
			volume,
			muted,
			repeat,
			controls,
			paused,
			style,
			poster
		} = this.props;

		return createElement(
			"div",
			{
				style: {
					position: "relative",
					width: "100%",
					height: 0,
					paddingTop: "56.25%"
				}
			},
			createElement("video", {
				ref: this._root,
				src: this._url,
				onLoadStart: this._onLoadStart,
				onLoadedData: this._onLoad,
				onError: this._onError,
				onProgress: this._onProgress,
				onSeeking: this._onSeek,
				onEnded: this._onEnd,
				onLoadedMetadata: this.props.onTimedMetadata,
				onCanPlay: this.props.onReadyForDisplay,
				onStalled: this.props.onPlaybackStalled,
				volume,
				controls,
				paused,
				muted,
				loop: repeat,
				autoPlay: !paused,
				style: {
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					...StyleSheet.flatten(style)
				},
				poster,
				playsInline: true
			})
		);
	};
}

export default Video;
