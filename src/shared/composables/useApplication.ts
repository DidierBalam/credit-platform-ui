//Libraries
import { computed } from 'vue';

//Store
import { useStore } from '@/store/index';

//Types
import { ApplicationStatusOptions } from '@/shared/types/enum/applicaton-status-enum';
import { ApplicationType } from '../types/application-types';

//Services
import { translateApplicationStatusName } from '@/shared/services/translate-service';
import { getLocalTime, determineIsNew } from '@/shared/services/time-service';

export default function() {
  //Data
  const store = useStore();

  //Computed
  const applications = computed((): ApplicationType[] | undefined => {
    return store.getters.applicationData;
  });

  return {
    //Data
    applications,
    //Types
    ApplicationStatusOptions,
    //Methods
    translateApplicationStatusName,
    getLocalTime,
    determineIsNew,
  };
}
