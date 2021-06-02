import { GetterTree } from 'vuex';

import {
  AuthStateType,
  AuthGetterType,
  RootState,
} from '../../../shared/types/store-types';

export const getters: GetterTree<AuthStateType, RootState> & AuthGetterType = {
  isAuth(state: AuthStateType): boolean {
    return state.token !== null;
  },
  userType(state: AuthStateType): string | undefined {
    return state.userData.type;
  },
};
