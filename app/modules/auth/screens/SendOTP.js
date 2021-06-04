import React from "react";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import { Config, Images, Theme } from "../../../constants";
import { SendOTPForm } from "../components/SendOTPForm";
import { styles } from "../styles/Styles";
export default function SendOTP(props) {
	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={Theme.colors.primary}
				hidden={false}
				translucent={false}
			/>

			<ImageBackground
				source={Images.Background}
				style={styles.background}
			>
				<Text style={styles.title}>{Config.APP_NAME}</Text>
				<View style={styles.footer}>
					<SendOTPForm navigation={props.navigation} />
				</View>
			</ImageBackground>
		</View>
	);
}
