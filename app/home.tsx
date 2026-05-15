import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';

const LibraryRoute = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text variant="headlineMedium">Library</Text>
      <Text variant="bodyMedium">Your stored recipes.</Text>
    </View>
  );
};

const HistoryRoute = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text variant="headlineMedium">History</Text>
      <Text variant="bodyMedium">Recently viewed recipes.</Text>
    </View>
  );
};

const ExploreRoute = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text variant="headlineMedium">Explore</Text>
      <Text variant="bodyMedium">Discover new recipes!</Text>
    </View>
  );
};

export default function Home() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'library', title: 'Library', focusedIcon: 'book-open-page-variant', unfocusedIcon: 'book-open-outline' },
    { key: 'history', title: 'History', focusedIcon: 'history' },
    { key: 'explore', title: 'Explore', focusedIcon: 'compass', unfocusedIcon: 'compass-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    library: LibraryRoute,
    history: HistoryRoute,
    explore: ExploreRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}