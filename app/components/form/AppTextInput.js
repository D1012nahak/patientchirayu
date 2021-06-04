import React from "react";
import { TextInput } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
export const AppTextInput = ({ ...props }) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = ScaledSheet.create({
	input: {
		height: 40,
		padding: 8,
	},
});
