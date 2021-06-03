//Libraries
import { computed } from 'vue';

//Store
import { useStore } from '@/store/index';

//Types
import { ApplicationStatusOptions } from '@/shared/types/enum/applicaton-status-enum';

//Services
import { translateApplicationStatusName } from '@/shared/services/translate-service';
import { getLocalTime, determineIsNew } from '@/shared/services/time-service';
import { ApplicationType } from '../types/application-types';

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
