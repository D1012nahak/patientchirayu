import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const Width = width < height ? width : height;
const Height = width < height ? height : width;

const window = {
	width: Width,
	height: Height,
};

const sizes = {
	base: 16,
};

const colors = {
	primary: "#1428A0",
	white: "#FFFFFF",
};

export default { window, sizes, colors };
