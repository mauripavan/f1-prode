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

export const positionsState = atom({
  key: 'PositionsState',
  default: [
    {
      position: '1st Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '2nd Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '3rd Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '4th Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '5th Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '6th Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '7th Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '8th Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '9th Place',
      name: '',
      lasName: '',
      team: '',
    },
    {
      position: '10th Place',
      name: '',
      lasName: '',
      team: '',
    },
  ],
});
