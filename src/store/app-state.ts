import { atom } from 'recoil';

import { User } from '../types/user';


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
