import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Config, Theme } from "../constants/";

export default function MainNavigation(props) {
	const auth = useSelector((state) => state.auth);
	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: Theme.colors.primary,
					alignItems: "center",
					paddingTop: 30,
					paddingBottom: 30,
				}}
			>
				<Text
					style={{
						fontFamily: "Voltaire-Regular",
						fontSize: 20,
						color: Theme.colors.white,
					}}
				>
					{Config.APP_NAME}
				</Text>
			</View>

			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />

				{/*
				<DrawerItem
					labelStyle={{
						color: Theme.colors.primary,
						fontSize: 16,
						marginLeft: 12,
						fontFamily: "Voltaire-Regular",
					}}
					label="Jobs"
					onPress={() => props.navigation.navigate("JobsStack")}
				/>
                */}
			</DrawerContentScrollView>

			<View
				style={{
					height: 30,
					backgroundColor: Theme.colors.primary,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						fontFamily: "Voltaire-Regular",
						fontSize: 10,
						color: Theme.colors.white,
					}}
				>
					All right reserved
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
