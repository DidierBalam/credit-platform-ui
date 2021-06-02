import { ApplicationType } from '@/shared/types/application-types';
import { GetterTree } from 'vuex';

import {
  ApplicationGetterType,
  RootState,
  ApplicationStateType,
} from '@/shared/types/store-types';

export const getters: GetterTree<ApplicationStateType, RootState> &
  ApplicationGetterType = {
  applicationData(state: ApplicationStateType): ApplicationType[] | undefined {
    return state.applications;
  },
};
