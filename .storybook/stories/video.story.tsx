import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { View } from "react-native";
import RNVideo from "../../src";

storiesOf("video", module)
	.addDecorator(withKnobs)
	.add("basic", () => (
		<View>
			<RNVideo
				paused={boolean("Paused", false)}
				muted={boolean("Muted", false)}
				source={{
					uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
				}}
			/>
		</View>
	));
