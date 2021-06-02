import { generateId } from '@/shared/services/idgenerator-service';
import {
  UserActionOptions,
  UserMutationOptions,
} from '@/shared/types/enum/store-enum';
import {
  StatusResponseType,
  UserRegisterResponseType,
} from '@/shared/types/http-response-types';
import {
  RootState,
  UserActionType,
  UserStateType,
} from '@/shared/types/store-types';
import { UserType } from '@/shared/types/user-type';
import { ActionTree } from 'vuex';

export const actions: ActionTree<UserStateType, RootState> & UserActionType = {
  //Active
  async [UserActionOptions.activeUser](
    { commit },
    id: number
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        commit(UserMutationOptions.setStatus, {
          userId: id,
          isActive: true,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  },
  //Inactive
  async [UserActionOptions.inactiveUser](
    { commit },
    id: number
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        commit(UserMutationOptions.setStatus, {
          userId: id,
          isActive: false,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  },
  //Register
  async [UserActionOptions.registerUser](
    { commit },
    user: UserType
  ): Promise<UserRegisterResponseType> {
    return new Promise((resolve, reject) => {
      try {
        user.userId = generateId();
        user.create = new Date();
        user.isActive = false;
        user.type = 'user';

        commit(UserMutationOptions.addUser, user);

        resolve({
          userId: user.userId,
          status: true,
          message: 'Ok',
        });
      } catch (e) {
        reject({
          userId: undefined,
          status: false,
          message: e,
        });
      }
    });
  },

  //Update
  async [UserActionOptions.updateUser](
    { commit },
    user: UserType
  ): Promise<StatusResponseType> {
    return new Promise((resolve, reject) => {
      try {
        commit(UserMutationOptions.updateUser, user);
        resolve({
          status: true,
          message: 'Ok',
        });
      } catch (e) {
        reject({
          userId: undefined,
          status: false,
          message: e,
        });
      }
    });
  },
};
