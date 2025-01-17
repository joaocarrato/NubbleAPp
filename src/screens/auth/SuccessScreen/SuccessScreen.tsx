import React from 'react';

import { Screen, Icon, Text, Button } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToLogin() {
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} size={48} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button title="Voltar ao início" onPress={goBackToLogin} mt="s40" />
    </Screen>
  );
}
