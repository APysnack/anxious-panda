import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import store from './store/index';
import { Provider } from 'react-redux';
import { useColorScheme } from '@/hooks/useColorScheme';
import useLoadUser from './utils/useLoadUser';

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
      <UserLoader />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='index' options={{ headerTitle: 'Home Page' }} />
          <Stack.Screen
            name='game-room/[id]'
            options={{ headerTitle: 'Game Page' }}
          />
          <Stack.Screen name='+not-found' />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}

const UserLoader = () => {
  useLoadUser();
  return null;
};
