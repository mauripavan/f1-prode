import {useNavigation} from '@react-navigation/native';
import {getAuth, signOut} from 'firebase/auth';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useRecoilState} from 'recoil';

import {icons} from '../../../assets/icons';
import {currentUserState} from '../../store/app-state';

const useDrawerContent = () => {
  const [active, setActive] = useState('Home');
  const navigation = useNavigation();
  const [, setCurrentUser] = useRecoilState(currentUserState);
  const {logOut} = icons;

  const handleNavigation = useCallback(
    (to: string) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  );

  const onLogoPress = () => {
    setActive('Home');
    navigation.navigate('Home');
  };

  const screens = [{name: 'Home', to: 'Home', icon: icons.home}];

  const handleLogOut = () => {
    Alert.alert('Sign out', 'Are you sure you want to log out?', [
      {
        text: 'Log out',
        style: 'default',
        onPress: confirmLogOut,
      },
      {
        text: 'Cancel',
        style: 'destructive',
      },
    ]);
  };

  const confirmLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setCurrentUser(undefined);
      })
      .catch(() => {
        Alert.alert('Log out failed', 'Plase try again');
      });
  };

  return {
    active,
    handleNavigation,
    onLogoPress,
    screens,
    logOutIcon: logOut,
    handleLogOut,
  };
};

export default useDrawerContent;
