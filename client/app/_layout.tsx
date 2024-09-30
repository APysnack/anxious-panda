import { ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import store from './store/index';
import { Provider } from 'react-redux';
import { useColorScheme } from '@/hooks/useColorScheme';
import useLoadUser from './utils/useLoadUser';
import CustomDarkTheme from '../theme/CustomDarkTheme';
import CustomLightTheme from '../theme/CustomLightTheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <UserLoader />
        <ThemeProvider
          value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='+not-found' />
          </Stack>
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const UserLoader = () => {
  useLoadUser();
  return null;
};
