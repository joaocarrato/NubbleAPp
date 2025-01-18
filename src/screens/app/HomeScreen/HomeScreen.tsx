import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  function navigateToSettings() {
    navigation.navigate('SettingsScreen');
  }
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Settings" onPress={navigateToSettings} />
      {/* <Button title="Settings" onPress={navigation.navigate('')} /> */}
    </Screen>
  );
}
