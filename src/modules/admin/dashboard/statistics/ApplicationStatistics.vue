<template>
  <div class="-mt4 -mld5">
    <p class="-text2 -gray -bold">Solicitudes recibidas</p>
    <div class="-flex -items-center">
      <i class="bx bxs-doughnut-chart -purple -title"></i>
      <p class="-text1 -extra-bold -black -mld5">250</p>
    </div>
  </div>
  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Aprobadas</p>
    <p class="-text1 -extra-bold -black">250</p>
    <div class="progress-bar -mtd5">
      <div class="progress-bar-line -purple-bg" style="width: 40%"></div>
    </div>
  </div>

  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Pendientes</p>
    <p class="-text1 -extra-bold -black">250</p>
    <div class="progress-bar -mtd5">
      <div class="progress-bar-line -purple-bg" style="width: 50%"></div>
    </div>
  </div>

  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Rechazadas</p>
    <p class="-text1 -extra-bold -black">250</p>
    <div class="progress-bar -mtd5">
      <div class="progress-bar-line -purple-bg" style="width: 20%"></div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ApplicationStatistics",
  setup() {
    //Data
    const isLoading = ref<boolean>(false);

    //Lifecycle Hooks

    return {
      //Data
      isLoading,
    };
  },
});
</script>
