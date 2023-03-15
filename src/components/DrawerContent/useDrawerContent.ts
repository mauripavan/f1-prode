import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';

import {icons} from '../../../assets/icons';

const useDrawerContent = () => {
  const [active, setActive] = useState('Home');
  const navigation = useNavigation();

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

  return {
    active,
    handleNavigation,
    onLogoPress,
    screens,
  };
};

export default useDrawerContent;
