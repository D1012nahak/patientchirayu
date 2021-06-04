import { ScaledSheet } from "react-native-size-matters";
import { Theme } from "../../../constants";
export const styles = ScaledSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	background: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: Theme.window.width,
		height: Theme.window.height,
	},
	title: {
		color: Theme.colors.white,
		fontFamily: "Voltaire-Regular",
		fontSize: 35,
	},

	footer: {
		position: "absolute",
		bottom: 0,
		backgroundColor: Theme.colors.white,
		padding: Theme.sizes.base,
	},
	error: { fontSize: 12, color: "#C60C30" },
	textInput: {
		borderBottomWidth: 3,
		borderBottomColor: Theme.colors.primary,
		width: Theme.window.width - Theme.sizes.base * 2,
	},
	button: {
		backgroundColor: Theme.colors.primary,
		height: 50,
		width: Theme.window.width - Theme.sizes.base * 2,
		borderRadius: 5,
	},
	buttonText: {
		color: Theme.colors.white,
		fontFamily: "Voltaire-Regular",
	},
});
