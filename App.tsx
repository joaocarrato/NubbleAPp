import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { Box } from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ paddingHorizontal: 24 }}>
        <SafeAreaView>
          <Text preset="headingLarge">Coffstack</Text>

          <Box gap="s16">
            <Button title="Entrar" />

            <Button title="loading" loading />
          </Box>
        </SafeAreaView>
      </View>
    </ThemeProvider>
  );
}
export default App;
