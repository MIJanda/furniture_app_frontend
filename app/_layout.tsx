import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function RootLayout() {

  // load fonts
  const [fontsLoaded] = useFonts({
    pBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    pExtraBold: require("@/assets/fonts/Poppins-ExtraBold.ttf"),
    pLight: require("@/assets/fonts/Poppins-Light.ttf"),
    pMedium: require("@/assets/fonts/Poppins-Medium.ttf"),
    pRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
    pSemibold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onRootLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
