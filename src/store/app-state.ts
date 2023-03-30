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

export const positionIndexState = atom({
  key: 'PositionsIndexState',
  default: 0,
});

export const positionsState = atom({
  key: 'PositionsState',
  default: [
    {
      position: 1,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 2,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 3,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 4,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 5,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 6,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 7,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 8,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 9,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
    {
      position: 10,
      name: '',
      lasName: '',
      team: '',
      image: '',
    },
  ],
});
