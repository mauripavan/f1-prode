import * as React from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from 'styled-components';

import {ErrorHandlerMainWrapper} from './styles';

function ErrorFallback({resetErrorBoundary}: FallbackProps) {
  const {colors} = useTheme();
  return (
    <ErrorHandlerMainWrapper>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            marginBottom: 16,
            fontSize: 26,
            color: colors.white,
          }}
        >
          {' '}
          Something went wrong:{' '}
        </Text>
        <TouchableOpacity onPress={resetErrorBoundary}>
          <Text
            style={{
              fontSize: 20,
              color: colors.white,
            }}
          >
            Try Again
          </Text>
        </TouchableOpacity>
      </View>
    </ErrorHandlerMainWrapper>
  );
}
export const ErrorHandler = ({children}: {children: React.ReactNode}) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);
