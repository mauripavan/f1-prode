import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {useTheme} from 'styled-components';
import {useController} from 'react-hook-form';

import {TextMontserratL} from '../Typography';
import {ErrorMessageWrapper, InputWrapper, StyledTextInput} from './styles';
import {ICustomTextInputProps} from './types';

const CustomTextInput = (props: ICustomTextInputProps) => {
  const {colors} = useTheme();
  const {
    error,
    errorMessage,
    placeholder,
    value,
    control,
    name,
    ...defautlProps
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  const refInput = useRef<TextInput>(null);

  const handlePress = () => {
    if (refInput.current) {
      refInput.current.focus();
    }
  };
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const {field} = useController({
    control,
    defaultValue: value,
    name,
  });

  return (
    <>
      <Pressable onPress={handlePress}>
        <InputWrapper
          focused={isFocus}
          error={error}
          name={name}
          control={control}
        >
          <StyledTextInput
            placeholder={placeholder}
            placeholderTextColor={colors.gray[2]}
            ref={refInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            focused={isFocus}
            onChangeText={field.onChange}
            value={field.value}
            {...defautlProps}
          />
        </InputWrapper>
      </Pressable>
      {error && (
        <ErrorMessageWrapper>
          <TextMontserratL color={colors.red[1]}>
            {errorMessage}
          </TextMontserratL>
        </ErrorMessageWrapper>
      )}
    </>
  );
};

export default CustomTextInput;
