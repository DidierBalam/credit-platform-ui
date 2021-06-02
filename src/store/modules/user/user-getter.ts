import { GetterTree } from 'vuex';

import {
  RootState,
  UserStateType,
  UserGetterType,
} from '@/shared/types/store-types';
import { UserType } from '@/shared/types/user-type';

export const getters: GetterTree<UserStateType, RootState> & UserGetterType = {
  userData(state: UserStateType): UserType[] | undefined {
    return state.users;
  },
};
