import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box px="s24">
          <Text mb="s8" preset="headingLarge">
            Olá!
          </Text>

          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            errorMessage="mensagem de erro"
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
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
