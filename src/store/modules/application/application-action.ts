import { ApplicationType } from '@/shared/types/application-types';
import {
  ApplicationActionOptions,
  ApplicationMutationOptions,
} from '@/shared/types/enum/store-enum';
import {
  ApplicationActionType,
  ApplicationStateType,
  RootState,
} from '@/shared/types/store-types';
import { ActionTree } from 'vuex';
import { generateId } from '@/shared/services/idgenerator-service';
import { ApplicationStatusOptions } from '@/shared/types/enum/applicaton-status-enum';
import { ApplicationRegisterResponseType } from '@/shared/types/http-response-types';

export const actions: ActionTree<ApplicationStateType, RootState> &
  ApplicationActionType = {
  //Register
  async [ApplicationActionOptions.registerApplication](
    { commit },
    application: ApplicationType
  ): Promise<ApplicationRegisterResponseType> {
    return new Promise((resolve, reject) => {
      try {
        application.applicationId = generateId();
        application.create = new Date();
        application.status = ApplicationStatusOptions.waiting;

        commit(ApplicationMutationOptions.addApplication, application);

        resolve({
          applicationId: application.applicationId,
          status: true,
          message: 'Ok',
        });
      } catch (e) {
        reject({ applicationId: undefined, status: false, message: e });
      }
    });
  },
  //Reject
  async [ApplicationActionOptions.rejectApplication](
    { commit },
    id: number
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        commit(ApplicationMutationOptions.setStatus, {
          applicationId: id,
          status: ApplicationStatusOptions.rejected,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  },
  //Approve
  async [ApplicationActionOptions.approveApplication](
    { commit },
    id: number
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        commit(ApplicationMutationOptions.setStatus, {
          applicationId: id,
          status: ApplicationStatusOptions.ok,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  },
};
