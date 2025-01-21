import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function SettingsScreen({
  navigation,
}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Settings Screen</Text>
      <Button
        title="Navegar"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'MyProfileScreen',
          })
        }
      />
    </Screen>
  );
}