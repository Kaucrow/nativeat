import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

export default function VerifyPendingScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background, padding: 24 }}>
      <MaterialCommunityIcons name="email-fast" size={80} color={theme.colors.primary} style={{ marginBottom: 24 }} />

      <Text variant="headlineSmall" style={{ color: theme.colors.onSurface, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
        Check Your Email
      </Text>

      <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant, textAlign: 'center', marginBottom: 32 }}>
        We've sent a verification link to your email address. Please click the link to verify your account and get full access to NativEat.
      </Text>

      <Button mode="contained" onPress={() => router.replace('/login')} style={{ width: '100%' }}>
        Back to Login
      </Button>
    </View>
  );
}