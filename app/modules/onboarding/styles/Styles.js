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
		padding: Theme.sizes.base,
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
