import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';

import {firebase} from '../../firebaseConfig';
import {currentUserState} from '../store/app-state';
import AuthController from './auth/AuthController';
import HomeController from './home/HomeController';

const Navigation = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const {auth} = firebase;

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return unsuscribe;
  }, []);

  return currentUser ? <HomeController /> : <AuthController />;
};

export default Navigation;
