import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { AppButton } from "../../../components/form/AppButton";
import { Config, Images } from "../../../constants";
import { styles } from "../styles/Styles";
export default function Onboarding(props) {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={Images.Background}
				style={styles.background}
			>
				<Text style={styles.title}>{Config.APP_NAME}</Text>

				<View style={styles.footer}>
					<AppButton
						style={styles.button}
						textStyle={styles.buttonText}
						title="Get Started"
						onPress={() => props.navigation.navigate("AuthStack")}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}
