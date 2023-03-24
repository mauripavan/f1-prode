import {atom} from 'recoil';

import {User} from '../types/user';

export const InitialUserState: User = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  team: '',
};

export const currentUserState = atom({
  key: 'CurrentUser',
  default: InitialUserState,
});

export const userConfigState = atom({
  key: 'UserConfigState',
  default: false,
});

export const resultsModalState = atom({
  key: 'ResultsModalState',
  default: false,
});

export const driversModalState = atom({
  key: 'DriversModalState',
  default: false,
});
