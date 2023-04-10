import React from 'react';
import {Modal, View} from 'react-native';
import {useTheme} from 'styled-components';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {getAuth, updateProfile} from 'firebase/auth';
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRecoilState} from 'recoil';

import {heightPixel} from '../../../constants/metrics';
import {ButtonVariants} from '../../../components/CustomButton/types';
import {TextFormula1B} from '../../../components/Typography';
import Separator from '../../../components/Separator';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import {homeModalState} from '../../../store/app-state';

const HomeModal = () => {
  const {colors} = useTheme();

  const [homeModalvisible, setHomeModalVisible] =
    useRecoilState(homeModalState);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Last name is required.'),
  });

  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {errors, isValid, isSubmitting} = formState;

  const handleName = (data: any) => {
    const auth: any = getAuth();
    updateProfile(auth.currentUser, {
      displayName: `${data.name} ${data.lastName}`,
    })
      .then(() => {
        setHomeModalVisible(false);
        AsyncStorage.setItem('UserName', 'true');
        Toast.show('Profile updated!', {
          duration: Toast.durations.SHORT,
          containerStyle: {
            backgroundColor: colors.green[3],
            width: '70%',
            height: heightPixel(55),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            borderWidth: 1,
            borderColor: colors.gray[2],
          },
          opacity: 1,
          position: 100,
          animation: true,
          hideOnPress: true,
        });
      })
      .catch(() => {
        setHomeModalVisible(false);
        Toast.show('Something failed', {
          duration: Toast.durations.SHORT,
          containerStyle: {
            backgroundColor: colors.red[1],
            width: '70%',
            height: heightPixel(55),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            borderWidth: 1,
            borderColor: colors.red[1],
          },
          opacity: 1,
          position: 100,
          animation: true,
          hideOnPress: true,
        });
      });
  };

  return (
    <Modal transparent={true} visible={homeModalvisible}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            height: '50%',
            width: '80%',
            justifyContent: 'center',
            backgroundColor: colors.dark[2],
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Separator size={20} />
          <TextFormula1B
            color={colors.green[2]}
            fontSize={18}
            style={{textAlign: 'center'}}
          >
            Welcome to F1 Prode!
          </TextFormula1B>
          <Separator size={20} />
          <TextFormula1B
            color={colors.white}
            fontSize={18}
            style={{textAlign: 'center'}}
          >
            Please let us know your name
          </TextFormula1B>
          <Separator size={20} />

          <CustomTextInput
            placeholder="Name"
            control={control}
            name={'name'}
            error={errors.name ? true : false}
            errorMessage={errors.name?.message?.toString()}
          />
          <Separator size={20} />
          <CustomTextInput
            placeholder="Last Name"
            control={control}
            name={'lastName'}
            error={errors.lastName ? true : false}
            errorMessage={errors.lastName?.message?.toString()}
          />
          <Separator size={30} />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CustomButton
              text="Save"
              onPress={handleSubmit(handleName)}
              disabled={isSubmitting}
              fontColor={isValid ? colors.black : colors.gray[2]}
              variant={
                isValid ? ButtonVariants.Secondary : ButtonVariants.Disabled
              }
              fontSize={16}
              style={{width: 150}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default HomeModal;
