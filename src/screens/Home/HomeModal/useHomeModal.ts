import {useRecoilState} from 'recoil';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {getAuth, updateProfile} from 'firebase/auth';
import Toast from 'react-native-root-toast';
import {useTheme} from 'styled-components';

import {homeModalState} from '../../../store/app-state';
import {heightPixel} from '../../../constants/metrics';

const useHomeModal = () => {
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

  return {
    homeModalvisible,
    control,
    errors,
    handleSubmit,
    handleName,
    isValid,
    isSubmitting,
    colors,
  };
};

export default useHomeModal;
