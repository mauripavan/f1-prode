import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRecoilState} from 'recoil';
import * as Yup from 'yup';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Separator from '../../components/Separator';
import {TextMontserratSB} from '../../components/Typography';
import {fontPixel, pixelSizeHorizontal} from '../../constants/metrics';
import {InputWrapper, MainWrapper} from './styles';
import {ButtonVariants} from '../../components/CustomButton/types';
import {currentUserState} from '../../store/app-state';

const UserInfo = ({navigation}: any) => {
  const {colors} = useTheme();

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('Por favor ingresa tu nombre'),
    apellido: Yup.string().required('Por favor ingresa tu apellido'),
    email: Yup.string().email().required('Por favor ingresa tu email'),
    escuderia: Yup.string().required(
      'Por favor ingresa tu escuderia preferida',
    ),
  });

  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {errors, isValid, isSubmitting} = formState;

  const [, setCurrentUser] = useRecoilState(currentUserState);

  const onCompleted = (data: any) => {
    setCurrentUser({...data});
    navigation.navigate('Home');
  };

  return (
    <MainWrapper>
      <Separator size={120} />
      <InputWrapper>
        <Separator size={20} />
        <TextMontserratSB
          fontSize={fontPixel(30)}
          color={colors.white}
          style={{textAlign: 'center'}}
        >
          Ingresa tus datos
        </TextMontserratSB>
        <Separator size={40} />
        <CustomTextInput
          placeholder="Nombre"
          control={control}
          name={'nombre'}
          value={''}
          error={errors.nombre ? true : false}
          errorMessage={errors.nombre?.message?.toString()}
        />
        <Separator size={20} />
        <CustomTextInput
          placeholder="Apellido"
          control={control}
          name={'apellido'}
          value={''}
          error={errors.apellido ? true : false}
          errorMessage={errors.apellido?.message?.toString()}
        />
        <Separator size={20} />
        <CustomTextInput
          placeholder="Email"
          control={control}
          name={'email'}
          value={''}
          error={errors.email ? true : false}
          errorMessage={errors.email?.message?.toString()}
        />
        <Separator size={20} />
        <CustomTextInput
          placeholder="Escuderia"
          control={control}
          name={'escuderia'}
          value={''}
          error={errors.escuderia ? true : false}
          errorMessage={errors.escuderia?.message?.toString()}
        />
        <Separator size={60} />
      </InputWrapper>
      <View
        style={{
          marginLeft: pixelSizeHorizontal(52),
          marginRight: pixelSizeHorizontal(52),
        }}
      >
        <CustomButton
          text="Siguiente"
          onPress={handleSubmit(onCompleted)}
          disabled={isSubmitting}
          fontColor={isValid ? colors.white : colors.gray[2]}
          variant={isValid ? ButtonVariants.Primary : ButtonVariants.Disabled}
        />
      </View>
    </MainWrapper>
  );
};

export default UserInfo;
