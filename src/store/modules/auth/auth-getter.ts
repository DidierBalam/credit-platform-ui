import { GetterTree } from 'vuex';

import {
  AuthStateType,
  AuthGetterType,
  RootState,
} from '../../../shared/types/store-types';

export const getters: GetterTree<AuthStateType, RootState> & AuthGetterType = {
  isAuth(state: AuthStateType): boolean {
    return state.token !== '';
  },
  isAdmin(state: AuthStateType): boolean {
    return state.userData?.type === "admin" ? true : false;
  },
};
