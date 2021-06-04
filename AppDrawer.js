import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { Theme } from "../constants";
import ProfileStack from "./ProfileStack";
import DashboardStack from "./DashboardStack";
import MainNavigation from "./MainNavigation";
import ProfileSettingsStack from "./ProfileSettingsStack"

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <MainNavigation {...props} />}
			drawerStyle={{
				width: Theme.window.width * 0.8,
				backgroundColor: Theme.colors.white,
			}}
			drawerContentOptions={{
				activeBackgroundColor: Theme.colors.primary,
				activeTintColor: Theme.colors.white,
				inactiveTintColor: Theme.colors.primary,
				itemStyle: {
					width: Theme.window.width * 0.75,
					marginVertical: 4,
				},
				labelStyle: {
					fontSize: 16,
					marginLeft: 12,
					fontWeight: "normal",
					fontFamily: "Voltaire-Regular",
				},
			}}
		>
			<Drawer.Screen
				name="DashboardStack"
				component={DashboardStack}
				options={{ title: "Dashboard" }}
			/>
			<Drawer.Screen
				name="ProfileStack"
				component={ProfileStack}
				options={{ title: "My Profile" }}
			/>
			<Drawer.Screen
				name="ProfileSettingsStack"
				component={ProfileSettingsStack}
				options={{ title: "Profile Settings" }}
			/>
		</Drawer.Navigator>
	);
}
