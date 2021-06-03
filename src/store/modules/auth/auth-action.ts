import {
  AuthActionsOptions,
  AuthMutationOptions,
} from '@/shared/types/enum/store-enum';
import {
  AuthActionType,
  AuthStateType,
  RootState,
} from '@/shared/types/store-types';
import { ActionTree } from 'vuex';
import { UserType } from '@/shared/types/user-type';
import { StatusResponseType } from '@/shared/types/http-response-types';
import { store } from '@/store';

export const actions: ActionTree<AuthStateType, RootState> &
  AuthActionType = {
  //Create
  async [AuthActionsOptions.createSession](
    { commit },
    user: UserType
  ): Promise<StatusResponseType> {
    return new Promise((resolve, reject) => {
      try {

        const userData = store.state.UserStore.users.find(
          (x) =>
            x.username === user.username &&
            x.password === user.password &&
            x.isActive == true
        );

        if (userData) {
          commit(AuthMutationOptions.createSession, userData);
          resolve({ status: true, message: 'ok' });
        }
        else {
          resolve({ status: false, message: 'Crendenciales inválidas o usuario inactivo' });
        }
      } catch (e) {
        reject(e);
      }
    });
  },

  //delete
  async [AuthActionsOptions.deleteSession](
    { commit }
  ): Promise<StatusResponseType> {
    return new Promise((resolve, reject) => {
      try {
        commit(AuthMutationOptions.deleteSession, undefined);
        resolve({ status: true, message: 'ok' });
      } catch (e) {
        reject(e);
      }
    });
  },
};
