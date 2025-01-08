import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Box } from './src/components/Box/Box';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ paddingHorizontal: 24 }}>
        <SafeAreaView>
          <Text preset="headingLarge">Coffstack</Text>

          <Box flexDirection="row" gap="s8">
            <Icon name="eyeOn" color="carrotSecondary" size={40} />
          </Box>
        </SafeAreaView>
      </View>
    </ThemeProvider>
  );
}
export default App;
