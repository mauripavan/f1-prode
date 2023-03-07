import React from 'react';
import {ThemeProvider} from 'styled-components';
import {ErrorHandler} from './src/components/ErrorHandler';
import theme from './src/theme';
import Example from './src/components/Example';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorHandler>
        <Example />
      </ErrorHandler>
    </ThemeProvider>
  );
};

export default () => <App />;
