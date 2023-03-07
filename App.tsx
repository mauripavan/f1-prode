import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>F1 Prode!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
};

export default () => <App />;
