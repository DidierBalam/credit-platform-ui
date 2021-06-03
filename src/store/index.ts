import { createStore } from 'vuex';
import { RootState } from '../shared/types/store-types';
import { ModalModuleType, ModalStore } from './modules/modal/modal-store';
import { AuthModuleType, AuthStore } from './modules/auth/auth-store';
import {
  ApplicationModuleType,
  ApplicationStore,
} from './modules/application/application-store';
import { UserModuleType, UserStore } from './modules/user/user-store';
import createPersistedState from 'vuex-persistedstate'

type Store = ModalModuleType<Pick<RootState, 'ModalStore'>> &
  AuthModuleType<Pick<RootState, 'AuthStore'>> &
  ApplicationModuleType<Pick<RootState, 'ApplicationStore'>> &
  UserModuleType<Pick<RootState, 'UserStore'>>;


export const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    ModalStore,
    AuthStore,
    ApplicationStore,
    UserStore,
  },
});

export function useStore(): Store {
  return store as Store;
}
