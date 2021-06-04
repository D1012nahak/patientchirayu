import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
export const AppButton = ({ ...props }) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={{ ...styles.button, ...props.style }}>
				<Text style={{ ...styles.buttonText, ...props.textStyle }}>
					{props.title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = ScaledSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		height: 40,
	},
	buttonText: {
		fontSize: 18,
	},
});
