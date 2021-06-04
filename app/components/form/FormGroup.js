import React from "react";
import { StyleSheet, View } from "react-native";
export const FormGroup = (props) => {
	const { children } = props;
	return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},
});
