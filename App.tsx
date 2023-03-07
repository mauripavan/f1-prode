import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import {ErrorHandler} from './src/components/ErrorHandler';
import theme from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorHandler>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ErrorHandler>
    </ThemeProvider>
  );
};

export default () => <App />;
