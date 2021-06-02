import { MutationTree } from 'vuex';
import {
  UserStateType,
  UserMutationType,
} from '../../../shared/types/store-types';
import { UserMutationOptions } from '../../../shared/types/enum/store-enum';
import { UserType } from '@/shared/types/user-type';

export const mutations: MutationTree<UserStateType> & UserMutationType = {
  //SetStatus
  [UserMutationOptions.setStatus](
    state: UserStateType,
    value: { userId: number; isActive: boolean }
  ) {
    state.users[
      state.users.findIndex((x) => x.userId == value.userId)
    ].isActive = value.isActive;

    state.users[
      state.users.findIndex((x) => x.userId == value.userId)
    ].update = new Date();
  },

  //Add
  [UserMutationOptions.addUser](state: UserStateType, user: UserType) {
    state.users.unshift(user);
  },

  //Update
  [UserMutationOptions.updateUser](state: UserStateType, user: UserType) {
    user.update = new Date();
    state.users[state.users.findIndex((x) => x.userId == user.userId)] = user;
  },
};
