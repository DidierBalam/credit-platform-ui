import { Store as VuexStore, Module, CommitOptions, DispatchOptions } from 'vuex';
import { state } from './auth-state';
import { getters } from './auth-getter';
import { mutations } from './auth-mutation'
import { actions } from './auth-action'
import {
  AuthStateType,
  AuthGetterType,
  RootState,
  AuthMutationType,
  AuthActionType,
} from '../../../shared/types/store-types';

type AuthModuleType<S = AuthStateType> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  getters: {
    [K in keyof AuthGetterType]: ReturnType<AuthGetterType[K]>;
  };
} & {
  commit<
    K extends keyof AuthMutationType,
    P extends Parameters<AuthMutationType[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<AuthMutationType[K]>;
} & {
  dispatch<K extends keyof AuthActionType>(
    key: K,
    payload?: Parameters<AuthActionType[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AuthActionType[K]>;
};

const AuthStore: Module<AuthStateType, RootState> = {
  state,
  getters,
  mutations,
  actions
};

export { AuthModuleType, AuthStore };
