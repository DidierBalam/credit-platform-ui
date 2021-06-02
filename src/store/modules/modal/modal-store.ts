import { Store as VuexStore, CommitOptions, Module } from 'vuex';
import { state } from './modal-state-store';
import { mutations } from './modal-mutation-store';
import {
  ModalStateType,
  ModalMutationType,
  RootState,
} from '../../../shared/types/store-types';

type ModalModuleType<S = ModalStateType> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<
    K extends keyof ModalMutationType,
    P extends Parameters<ModalMutationType[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<ModalMutationType[K]>;
};

const ModalStore: Module<ModalStateType, RootState> = {
  state,
  mutations,
};

export { ModalModuleType, ModalStore };
