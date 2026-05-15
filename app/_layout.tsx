import { ThemeContextProvider } from '@/context/theme-context';
import "@/global.css";
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ThemeContextProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
          </Stack>
        </ThemeContextProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}