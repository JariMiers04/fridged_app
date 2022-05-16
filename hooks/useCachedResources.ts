import { FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          Cunia: require("../assets/fonts/cunia.ttf"),
          PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
          PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
          PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf")
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
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
