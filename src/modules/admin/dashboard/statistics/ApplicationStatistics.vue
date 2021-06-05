<template>
  <div class="-mt4 -mld5">
    <p class="-text2 -gray -bold">Solicitudes recibidas</p>
    <div class="-flex -items-center">
      <i class="bx bxs-doughnut-chart -purple -title"></i>
      <p class="-text1 -extra-bold -black -mld5">{{ all }}</p>
    </div>
  </div>
  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Aprobadas</p>
    <p class="-text1 -extra-bold -black">{{ approved.count }}</p>
    <div class="progress-bar -mtd5">
      <div
        class="progress-bar-line -purple-bg"
        :style="`width:${approved.percentage}%`"
      ></div>
    </div>
  </div>

  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Pendientes</p>
    <p class="-text1 -extra-bold -black">{{ warning.count }}</p>
    <div class="progress-bar -mtd5">
      <div
        class="progress-bar-line -purple-bg"
        :style="`width:${warning.percentage}%`"
      ></div>
    </div>
  </div>

  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Rechazadas</p>
    <p class="-text1 -extra-bold -black">{{ rejected.count }}</p>
    <div class="progress-bar -mtd5">
      <div
        class="progress-bar-line -purple-bg"
        :style="`width:${rejected.percentage}%`"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { computed, defineComponent } from "vue";

//Store
import { useStore } from "@/store/index";

//Types
import { MetricCountType } from "@/shared/types/metric-count-type";

export default defineComponent({
  name: "ApplicationStatistics",
  setup() {
    //Data

    const store = useStore();

    //Computed
    const all = computed(() => {
      return store.state.ApplicationStore.applications.length;
    });

    const approved = computed((): MetricCountType | undefined => {
      return store.getters.getApprovedCount;
    });

    const warning = computed((): MetricCountType | undefined => {
      return store.getters.getWarningCount;
    });

    const rejected = computed((): MetricCountType | undefined => {
      return store.getters.getRejectedCount;
    });

    //Lifecycle Hooks

    return {
      //Computed
      all,
      approved,
      warning,
      rejected,
    };
  },
});
</script>
