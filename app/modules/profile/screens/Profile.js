import React from "react";
import { StatusBar, View } from "react-native";
import { AppButton } from "../../../components/form/AppButton";
import { Theme } from "../../../constants";
import { GeneralDetails } from "../components/GeneralDetails";
import { styles } from "../styles/Styles";
export default function Profile() {
	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={Theme.colors.primary}
				hidden={false}
				translucent={false}
			/>

			<GeneralDetails />
			<View style={styles.footer}>
				<AppButton
					style={styles.button}
					textStyle={styles.buttonText}
					title="Save"
				/>
			</View>
		</View>
	);
}
