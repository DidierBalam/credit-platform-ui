import { GetterTree } from 'vuex';

import {
  RootState,
  UserStateType,
  UserGetterType,
} from '@/shared/types/store-types';
import { UserType } from '@/shared/types/user-type';
import { MetricCountType } from '@/shared/types/metric-count-type';

export const getters: GetterTree<UserStateType, RootState> & UserGetterType = {
  userData(state: UserStateType): UserType[] | undefined {
    return state.users;
  },
  getUserCount(state: UserStateType): number {
    return state.users.filter(x => x.type != "admin").length
  },
  getActiveCount(state: UserStateType): MetricCountType | undefined {
    return {
      count: state.users.filter(x => x.isActive == true && x.type != "admin").length,
      percentage: (state.users.filter(x => x.isActive == true && x.type != "admin").length / state.users.length) * 100
    };
  },
  getInactiveCount(state: UserStateType): MetricCountType | undefined {
    return {
      count: state.users.filter(x => x.isActive == false && x.type != "admin").length,
      percentage: (state.users.filter(x => x.isActive == false && x.type != "admin").length / state.users.length) * 100
    };
  },
};
