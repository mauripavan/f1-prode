import React from 'react';

import {ButtonContainer, ButtonText} from './styles';
import {ButtonVariants, IButtonProps} from './types';

const CustomButton = (props: IButtonProps) => {
  const {
    variant = ButtonVariants.Primary,
    text,
    fontColor,
    style,
    fontSize,
    ...defaultProps
  } = props;
  return (
    <ButtonContainer variant={variant} style={style} {...defaultProps}>
      <ButtonText
        testID={'buttonText'}
        fontSize={fontSize}
        fontColor={fontColor}
        variant={variant}
      >
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};

export default CustomButton;
