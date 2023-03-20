import React from 'react';
import {useRecoilValue} from 'recoil';

import {userConfigState} from '../store/app-state';
import AuthController from './auth/AuthController';
import HomeController from './home/HomeController';

const Navigation = () => {
  const userConfig = useRecoilValue(userConfigState);

  return userConfig ? <HomeController /> : <AuthController />;
};

export default Navigation;
