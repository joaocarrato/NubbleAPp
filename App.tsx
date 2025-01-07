import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ paddingHorizontal: 24 }}>
        <SafeAreaView>
          <Text preset="headingLarge">Coffstack</Text>

          <Button title="Primary" mb="s12" />
          <Button disabled preset="outline" title="Outline" mb="s12" />

          <Button title="loading" loading />
        </SafeAreaView>
      </View>
    </ThemeProvider>
  );
}
export default App;
