//Libraries
import { computed } from 'vue';

//Store
import { useStore } from '@/store/index';

//Types
import { UserType } from '@/shared/types/user-type';

//Service
import { getLocalTime, determineIsNew } from '@/shared/services/time-service';
import {
  ModalMutationOptions,
  UserActionOptions,
} from '@/shared/types/enum/store-enum';

export default function () {
  //Data
  const store = useStore();

  //Computed
  const users = computed((): UserType[] | undefined => {
    return store.getters.userData?.filter(x => {
      return x.type != "admin"
    })
  });

  //Methods
  const setUserStatus = (id: number, currentStatus: boolean) => {
    currentStatus
      ? store
        .dispatch(UserActionOptions.inactiveUser, id)
        .then((data) => {
          if (!data) console.log('error');
        })
        .catch((err) => console.log(err))
      : store
        .dispatch(UserActionOptions.activeUser, id)
        .then((data) => {
          if (!data) console.log('error');
        })
        .catch((err) => console.log(err));
  };

  const createUser = () => {
    store.commit(ModalMutationOptions.activateModal, {
      size: 'min',
      title: 'Creando usuario',
      isClose: false,
      component: () => import('@/shared/components/user/UserCreator.vue'),
    });
  };

  const updateUser = (id: number) => {
    store.commit(ModalMutationOptions.activateModal, {
      size: 'min',
      title: 'Editando usuario',
      isClose: false,
      elementId: id,
      component: () => import('@/shared/components/user/UserEditor.vue'),
    });
  };

  return {
    //Computed
    users,
    //Methods
    setUserStatus,
    getLocalTime,
    createUser,
    updateUser,
    determineIsNew,
  };
}
