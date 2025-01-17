import React from 'react';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordTextInput,
} from '@components';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { loginSchema, LoginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit({ email, password }: LoginSchema) {
    Alert.alert(`E-mail: ${email} password:${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>

      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's10' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
      <Button
        preset="outline"
        mt="s12"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
