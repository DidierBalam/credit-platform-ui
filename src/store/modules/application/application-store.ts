import {
  Store as VuexStore,
  CommitOptions,
  Module,
  DispatchOptions,
} from 'vuex';
import {
  RootState,
  ApplicationStateType,
  ApplicationMutationType,
  ApplicationActionType,
  ApplicationGetterType,
} from '../../../shared/types/store-types';
import { state } from './application-state';
import { mutations } from './application-mutation';
import { actions } from './application-action';
import { getters } from './application-getter';


type ApplicationModuleType<S = ApplicationStateType> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  getters: {
    [K in keyof ApplicationGetterType]: ReturnType<ApplicationGetterType[K]>;
  };
} & {
  commit<
    K extends keyof ApplicationMutationType,
    P extends Parameters<ApplicationMutationType[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<ApplicationMutationType[K]>;
} & {
  dispatch<K extends keyof ApplicationActionType>(
    key: K,
    payload?: Parameters<ApplicationActionType[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ApplicationActionType[K]>;
};

const ApplicationStore: Module<ApplicationStateType, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export { ApplicationModuleType, ApplicationStore };
