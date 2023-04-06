import {atom} from 'recoil';

export const defaultPositions = [
  {
    position: 1,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 2,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 3,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 4,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 5,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 6,
    name: '',
    latName: '',
    team: '',
    image: '',
  },
  {
    position: 7,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 8,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 9,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
  {
    position: 10,
    name: '',
    lastName: '',
    team: '',
    image: '',
  },
];

export const currentUserState = atom({
  key: 'CurrentUser',
  default: undefined,
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

export const editionState = atom({
  key: 'EditionState',
  default: false,
});

export const positionsState = atom({
  key: 'PositionsState',
  default: defaultPositions,
});
