import React from 'react';
import {create} from 'react-test-renderer';
import {ThemeProvider} from 'styled-components';

import CustomButton from '.';
import theme from '../../theme';
import {ButtonVariants} from './types';

const button = create(
  <ThemeProvider theme={theme}>
    <CustomButton variant={ButtonVariants.Primary} text="Primary" />
  </ThemeProvider>,
);

test('snapshot', () => {
  expect(button).toMatchSnapshot();
});

test('Button text', () => {
  const myButton = button.root.findByProps({testID: 'buttonText'}).props;
  expect(myButton.children).toBe('Primary');
});
