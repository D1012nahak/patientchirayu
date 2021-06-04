import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import SendOTP from "../modules/auth/screens/SendOTP";
import VerifyOTP from "../modules/auth/screens/VerifyOTP";
const Stack = createStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SendOTP" component={SendOTP} />
			<Stack.Screen name="VerifyOTP" component={VerifyOTP} />
		</Stack.Navigator>
	);
}
