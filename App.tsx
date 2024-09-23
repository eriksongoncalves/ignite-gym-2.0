import { useCallback } from 'react'
import { StatusBar } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { OneSignal } from 'react-native-onesignal'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Routes } from '@src/routes'
import { AuthProvider } from '@hooks/auth'
import { env } from '@shared/config/env'

SplashScreen.preventAutoHideAsync()

OneSignal.initialize(env.EXPO_PUBLIC_ONE_SIGNAL_API_KEY)
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded && !error) {
    return null
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} className="flex-1">
      <StatusBar translucent barStyle={'light-content'} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GestureHandlerRootView>
  )
}
