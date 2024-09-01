import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
