import { ModalStateType } from '../../../shared/types/store-types';

export const state: ModalStateType = {
  isModalActive: false,
  config: {
    size: '',
    title: '',
    component: null,
    isClose: false,
  },
};
