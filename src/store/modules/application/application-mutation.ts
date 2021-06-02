import { MutationTree } from 'vuex';
import {
  ApplicationStateType,
  ApplicationMutationType,
} from '@/shared/types/store-types';
import { ApplicationMutationOptions } from '@/shared/types/enum/store-enum';
import { ApplicationType } from '@/shared/types/application-types';

export const mutations: MutationTree<ApplicationStateType> &
  ApplicationMutationType = {
  //Add
  [ApplicationMutationOptions.addApplication](
    state: ApplicationStateType,
    value: ApplicationType
  ) {
    state.applications.unshift(value);
  },
  //setStatus
  [ApplicationMutationOptions.setStatus](
    state,
    value: { applicationId: number; status: string }
  ) {
    state.applications[
      state.applications.findIndex(
        (x) => x.applicationId == value.applicationId
      )
    ].status = value.status;

    state.applications[
      state.applications.findIndex(
        (x) => x.applicationId == value.applicationId
      )
    ].update = new Date();
  },
};
