import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Config, Theme } from "../constants";
import Dashboard from "../modules/dashboard/screens/Dashboard";
const Stack = createStackNavigator();

export default function DashboardStack(props) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					title: Config.APP_NAME,
					headerTintColor: Theme.colors.white,
					headerStyle: {
						backgroundColor: Theme.colors.primary,
					},
					headerTitleStyle: {
						fontFamily: "Voltaire-Regular",
					},
					headerLeft: () => (
						<Ionicons
							name="md-menu"
							size={25}
							color={Theme.colors.white}
							style={{ width: 25, height: 25, marginLeft: 10 }}
							onPress={() => props.navigation.toggleDrawer()}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
