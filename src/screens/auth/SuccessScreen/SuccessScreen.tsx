import React from 'react';
import { Screen, Icon, Text, Button } from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route, navigation }: ScreenProps) {
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
