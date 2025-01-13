import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../../components/Button/Button';

import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { RootStackParamList } from '../../../routes/Routes';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordTextInput } from '../../../components/Form/FormPasswordTextInput';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();
  const { control, handleSubmit, formState } = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: SignUpFormType) {
    console.log(
      `username: ${data.username}, fullname: ${data.fullName}, email: ${data.email}, password: ${data.password}`,
    );
    reset({
      title: 'Sua conta foi criada com sucesso',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        rules={{ required: 'Username obrigatório' }}
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's16' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        rules={{ required: 'Nome completo obrigatório' }}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's16' }}
      />

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
        autoCapitalize="none"
        boxProps={{ mb: 's16' }}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        rules={{
          minLength: {
            value: 8,
            message: 'Senha deve conter no mínimo 8 caracteres',
          },
        }}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button
        title="Criar minha conta"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
