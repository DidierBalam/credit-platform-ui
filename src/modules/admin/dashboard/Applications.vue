<template>
  <div class="applications">
    <div>
      <p class="-text1 -extra-bold">Solicitudes</p>
      <p class="-text3 -light-gray -bold">Administra solicitudes</p>
    </div>
    <!-- Application items -->
    <div class="-mt2">
      <div class="application" v-for="item of applications" :key="item.id">
        <button class="key general-btn -flex-left -p1">
          <p class="-text2 -extra-bold -black">{{ item.applicationId }}</p>
        </button>
        <!-- Date -->
        <div class="date -flex -items-center">
          <p
            class="-text3 -extra-bold"
            :class="determineIsNew(item.create) ? '-blue' : '-gray'"
          >
            {{ getLocalTime(item.create) }}
          </p>
          <i class="bx bxs-calendar-event -text2 -gray -mld5"></i>
        </div>
        <!-- //Date -->
        <div class="status">
          <div
            :class="{
              '-green-bg': item.status === ApplicationStatusOptions.ok,
              '-blue-bg': item.status === ApplicationStatusOptions.waiting,
              '-yellow-bg': item.status === ApplicationStatusOptions.rejected,
            }"
          >
            <p class="-text3 -white -extra-bold">
              {{ translateStatusName(item.status) }}
            </p>
          </div>
        </div>
        <div class="options -flex-end">
          <router-link class="link" :to="`/application/${item.applicationId}`">
            <button class="btn transparent-btn gray">
              <i class="bx bxs-show general-icon"></i>
              <p>Revisar</p>
            </button></router-link
          >
        </div>
      </div>
    </div>
    <!-- //Application items -->

    <div class="-mt1 -flex-end">
      <router-link to="/admin/applications" class="link"
        ><button class="btn transparent-btn purple">
          <p>Ver todo</p>
          <i class="bx bx-chevron-right general-icon"></i></button
      ></router-link>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { computed, defineComponent } from "vue";

//Types
import { ApplicationStatusOptions } from "@/shared/types/enum/applicaton-status-enum";

//Store
import { useStore } from "@/store/index";

//Services
import { translateStatusName } from "../../../shared/services/application-service";
import { ApplicationType } from "@/shared/types/application-types";
import { getLocalTime, determineIsNew } from "@/shared/services/time-service";

export default defineComponent({
  name: "Applications",
  setup() {
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
      translateStatusName,
      getLocalTime,
      determineIsNew,
    };
  },
});
</script>
