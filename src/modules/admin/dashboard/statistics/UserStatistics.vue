<template>
  <div class="-mt4 -mld5">
    <p class="-text2 -gray -bold">Usuarios registrados</p>
    <div class="-flex -items-center">
      <i class="bx bxs-user -blue -title"></i>
      <p class="-text1 -extra-bold -black -mld5">{{ all }}</p>
    </div>
  </div>
  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Activos</p>
    <p class="-text1 -extra-bold -black">{{ active.count }}</p>
    <div class="progress-bar -mtd5">
      <div
        class="progress-bar-line -blue-bg"
        :style="`width:${active.percentage}%`"
      ></div>
    </div>
  </div>

  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Inactivos</p>
    <p class="-text1 -extra-bold -black">{{ inactive.count }}</p>
    <div class="progress-bar -mtd5">
      <div
        class="progress-bar-line -blue-bg"
        :style="`width:${inactive.percentage}%`"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { computed, defineComponent } from "vue";

//Store
import { useStore } from "@/store";
import { MetricCountType } from "@/shared/types/metric-count-type";

export default defineComponent({
  name: "UserStatistics",
  setup() {
    //Data
    const store = useStore();

    //Computed
    const all = computed(() => {
      return store.getters.getUserCount;
    });

    const active = computed((): MetricCountType | undefined => {
      return store.getters.getActiveCount;
    });

    const inactive = computed((): MetricCountType | undefined => {
      return store.getters.getInactiveCount;
    });

    return {
      //Computed
      all,
      active,
      inactive,
    };
  },
});
</script>
