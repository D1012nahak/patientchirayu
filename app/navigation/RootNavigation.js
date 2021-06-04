import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Onboarding from "../modules/onboarding/screens/Onboarding";
import AppDrawer from "./AppDrawer";
import AuthStack from "./AuthStack";
const Stack = createStackNavigator();

export default function RootNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Onboarding" component={Onboarding} />
				<Stack.Screen name="AuthStack" component={AuthStack} />
				<Stack.Screen name="AppDrawer" component={AppDrawer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
