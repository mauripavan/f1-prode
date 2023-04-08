import React from 'react';
import {useTheme} from 'styled-components';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRecoilState} from 'recoil';
import * as Yup from 'yup';
import {Alert} from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Separator from '../../components/Separator';
import {TextHighSpeed, TextMontserratSB} from '../../components/Typography';
import {fontPixel} from '../../constants/metrics';
import {ButtonWrapper, InputWrapper, MainWrapper} from './styles';
import {ButtonVariants} from '../../components/CustomButton/types';
import {currentUserState} from '../../store/app-state';
import {firebase} from '../../../firebaseConfig';

const UserInfo = () => {
  const {colors} = useTheme();
  const [, setCurrentUser] = useRecoilState(currentUserState);

  const {auth} = firebase;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Please enter a valid email'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {errors, isValid, isSubmitting} = formState;

  const createAccount = (data: any) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const logIn = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <MainWrapper>
      <Separator size={60} />
      <TextHighSpeed
        fontSize={fontPixel(30)}
        color={colors.red[1]}
        style={{textAlign: 'center'}}
      >
        F1 Prode
      </TextHighSpeed>
      <Separator size={20} />
      <InputWrapper>
        <Separator size={20} />
        <TextMontserratSB
          fontSize={fontPixel(30)}
          color={colors.white}
          style={{textAlign: 'center'}}
        >
          Log in to your account
        </TextMontserratSB>
        <Separator size={40} />
        <Separator size={20} />
        <CustomTextInput
          placeholder="Email"
          control={control}
          name={'email'}
          keyboardType="email-address"
          error={errors.email ? true : false}
          errorMessage={errors.email?.message?.toString()}
        />
        <Separator size={20} />
        <CustomTextInput
          placeholder="Password"
          control={control}
          name={'password'}
          error={errors.password ? true : false}
          errorMessage={errors.password?.message?.toString()}
          secureTextEntry={true}
        />
        <Separator size={60} />
      </InputWrapper>
      <ButtonWrapper>
        <CustomButton
          text="Log In"
          onPress={handleSubmit(logIn)}
          disabled={isSubmitting}
          fontColor={isValid ? colors.white : colors.gray[2]}
          variant={isValid ? ButtonVariants.Primary : ButtonVariants.Disabled}
        />
      </ButtonWrapper>
      <Separator size={20} />
      <ButtonWrapper>
        <CustomButton
          text="Create Account"
          onPress={handleSubmit(createAccount)}
          disabled={isSubmitting}
          fontColor={isValid ? colors.black : colors.gray[2]}
          variant={isValid ? ButtonVariants.Secondary : ButtonVariants.Disabled}
        />
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default UserInfo;
