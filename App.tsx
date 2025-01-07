import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={{ fontWeight: 'bold' }}>Coffstack</Text>
      <Text>Coffstack</Text>
      <Text>Coffstack</Text>
    </SafeAreaView>
  );
}
export default App;
