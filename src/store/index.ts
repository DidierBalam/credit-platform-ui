import { createLogger, createStore } from 'vuex';
import { RootState } from '../shared/types/store-types';
import { ModalStore, ModuleStore } from './modules/modal/modal-store';
// import createPersistedState from "vuex-persistedstate";

type Store = ModuleStore<Pick<RootState, 'ModalStore'>>;

// Plug in logger when in development environment
// const debug = process.env.NODE_ENV !== 'production';
// const plugins = debug ? [createLogger({})] : [];
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({
  // plugins,
  modules: {
    ModalStore,
  },
});

export function useStore(): Store {
  return store as Store;
}
