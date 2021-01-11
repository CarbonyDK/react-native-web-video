import path from "path";
import { config as appConfig } from "../config";

export default ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve("ts-loader"),
				options: {
					transpileOnly: true,
					configFile: path.join(appConfig.paths.rootDir, "tsconfig.json")
				}
			}
		]
	});

	config.resolve.alias = {
		...config.resolve.alias,
		"react-native": "react-native-web"
	};

	config.resolve.extensions = [
		".web.ts",
		".web.tsx",
		".web.js",
		".web.jsx",
		...config.resolve.extensions,
		".ts",
		".tsx"
	];

	return config;
};
