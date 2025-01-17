import React from 'react';
import { Screen, Text, Button, FormTextInput } from '@components';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes';
import { useResetNavigationSuccess } from '@hooks';

import { useForm } from 'react-hook-form';
import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit, formState } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const { reset } = useResetNavigationSuccess();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(props: ForgotPasswordSchema) {
    reset({
      title: `Enviamos as instruções${'\n'}para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's40' }}
      />

      <Button
        title="Recuperar senha"
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
}
