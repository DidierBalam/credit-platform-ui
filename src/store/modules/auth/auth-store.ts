import { Store as VuexStore, Module } from 'vuex';
import { state } from './auth-state-store';
import { getters } from './auth-getter-store';
import {
  AuthStateType,
  AuthGetterType,
  RootState,
} from '../../../shared/types/store-types';

type AuthModuleType<S = AuthStateType> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  getters: {
    [K in keyof AuthGetterType]: ReturnType<AuthGetterType[K]>;
  };
};

const AuthStore: Module<AuthStateType, RootState> = {
  state,
  getters,
};

export { AuthModuleType, AuthStore };
