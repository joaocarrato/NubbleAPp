import React from 'react';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>

      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{ mb: 's20' }}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon name="eyeOn" />}
        BoxProps={{ mb: 's10' }}
      />

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button preset="outline" mt="s12" title="Criar uma conta" />
    </Screen>
  );
}