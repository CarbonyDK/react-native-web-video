import path from "path";

const rootDir = path.resolve();
const sourceDir = path.join(rootDir, "src");

export const paths = {
	sourceDir,
	rootDir,
	storybookDir: path.join(rootDir, ".storybook")
};

export const config = {
	paths
};
