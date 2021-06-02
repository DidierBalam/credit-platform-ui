import {
  Store as VuexStore,
  CommitOptions,
  Module,
  DispatchOptions,
} from 'vuex';
import {
  RootState,
  UserStateType,
  UserMutationType,
  UserActionType,
  UserGetterType,
} from '../../../shared/types/store-types';
import { state } from './user-state';
import { mutations } from './user-mutation';
import { actions } from './user-action';
import { getters } from './user-getter';

type UserModuleType<S = UserStateType> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  getters: {
    [K in keyof UserGetterType]: ReturnType<UserGetterType[K]>;
  };
} & {
  commit<
    K extends keyof UserMutationType,
    P extends Parameters<UserMutationType[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<UserMutationType[K]>;
} & {
  dispatch<K extends keyof UserActionType>(
    key: K,
    payload?: Parameters<UserActionType[K]>[1],
    options?: DispatchOptions
  ): ReturnType<UserActionType[K]>;
};

const UserStore: Module<UserStateType, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export { UserModuleType, UserStore };
