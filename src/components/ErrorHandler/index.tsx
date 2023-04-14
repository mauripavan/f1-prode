import * as React from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {fontPixel} from '../../constants/metrics';
import {TextMontserratR, TextMontserratSB} from '../Typography';
import {ErrorHandlerMainWrapper, ErrorHandlerSubWrapper} from './styles';

function ErrorFallback({resetErrorBoundary}: FallbackProps) {
  const {colors} = useTheme();
  return (
    <ErrorHandlerMainWrapper>
      <ErrorHandlerSubWrapper>
        <TextMontserratSB
          color={colors.white}
          fontSize={fontPixel(26)}
          style={{
            marginBottom: 16,
          }}
        >
          {' '}
          Something went wrong:{' '}
        </TextMontserratSB>
        <TouchableOpacity onPress={resetErrorBoundary}>
          <TextMontserratR fontSize={fontPixel(20)} color={colors.white}>
            Try Again
          </TextMontserratR>
        </TouchableOpacity>
      </ErrorHandlerSubWrapper>
    </ErrorHandlerMainWrapper>
  );
}
export const ErrorHandler = ({children}: {children: React.ReactNode}) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);
