import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Images } from "../constants";

const assetImages = [Images.Logo, Images.Background];

function cacheImages(images) {
	return images.map((image) => {
		if (typeof image === "string") {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
}

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				/* Load Font */
				await Font.loadAsync({
					...Ionicons.font,

					"Voltaire-Regular": require("../assets/fonts/Voltaire-Regular.ttf"),
					"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
				});

				/* Load Images */
				Promise.all([...cacheImages(assetImages)]);
			} catch (e) {
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
