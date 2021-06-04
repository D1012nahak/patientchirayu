import { Analytics, PageHit } from "expo-analytics";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Config } from "./constants";
import useCachedResources from "./hooks/useCachedResources";
import RootNavigation from "./navigation/RootNavigation";
import store from "./reducers/Store";

const analytics = new Analytics(Config.GOOGLE_ANALYTICS);
analytics.hit(new PageHit("/app/"));

export default function Main() {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Provider store={store}>
					<RootNavigation />
				</Provider>
			</SafeAreaProvider>
		);
	}
}
