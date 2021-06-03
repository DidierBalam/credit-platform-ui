import { ApplicationType } from '@/shared/types/application-types';
import { GetterTree } from 'vuex';

import {
  ApplicationGetterType,
  RootState,
  ApplicationStateType,
} from '@/shared/types/store-types';
import { ApplicationStatusOptions } from '@/shared/types/enum/applicaton-status-enum';
import { MetricCountType } from '@/shared/types/metric-count-type';

export const getters: GetterTree<ApplicationStateType, RootState> &
  ApplicationGetterType = {
  applicationData(state: ApplicationStateType): ApplicationType[] | undefined {
    return state.applications;
  },
  getApprovedCount(state: ApplicationStateType): MetricCountType {
    return {
      count: state.applications.filter(x => x.status == ApplicationStatusOptions.ok).length,
      percentage: (state.applications.filter(x => x.status == ApplicationStatusOptions.ok).length / state.applications.length) * 100
    }
  },
  getRejectedCount(state: ApplicationStateType): MetricCountType {
    return {
      count: state.applications.filter(x => x.status == ApplicationStatusOptions.rejected).length,
      percentage: (state.applications.filter(x => x.status == ApplicationStatusOptions.rejected).length / state.applications.length) * 100
    }
  },
  getWarningCount(state: ApplicationStateType): MetricCountType {
    return {
      count: state.applications.filter(x => x.status == ApplicationStatusOptions.waiting).length,
      percentage: (state.applications.filter(x => x.status == ApplicationStatusOptions.waiting).length / state.applications.length) * 100
    }
  }
};
