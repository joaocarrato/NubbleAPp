import React from 'react';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useForm, Controller } from 'react-hook-form';
import { Alert } from 'react-native';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordTextInput } from '../../../components/Form/FormPasswordTextInput';

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit({ email, password }: LoginFormType) {
    Alert.alert(`E-mail: ${email}`);
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
        rules={{
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        label="Senha"
        rules={{
          minLength: {
            value: 8,
            message: 'Senha deve conter no mínimo 8 caracteres',
          },
        }}
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

      <Button mt="s48" title="Entrar" onPress={handleSubmit(onSubmit)} />
      <Button
        preset="outline"
        mt="s12"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
