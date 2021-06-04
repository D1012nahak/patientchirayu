import { ScaledSheet } from "react-native-size-matters";
import { Theme } from "../../../constants";
export const styles = ScaledSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: Theme.sizes.base,
	},
	footer: {
		position: "absolute",
		bottom: 0,
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
		width: Theme.window.width - Theme.sizes.base * 2,
		borderRadius: 5,
	},
	buttonText: {
		color: Theme.colors.white,
		fontFamily: "Voltaire-Regular",
	},
});
