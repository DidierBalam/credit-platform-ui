<template>
  <div class="-mt4 -mld5">
    <p class="-text2 -gray -bold">Usuarios registrados</p>
    <div class="-flex -items-center">
      <i class="bx bxs-user -blue -title"></i>
      <p class="-text1 -extra-bold -black -mld5">250</p>
    </div>
  </div>
  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Activos</p>
    <p class="-text1 -extra-bold -black">250</p>
    <div class="progress-bar -mtd5">
      <div class="progress-bar-line -blue-bg" style="width: 80%"></div>
    </div>
  </div>

  <div class="-mt4 -mld5 -wd90">
    <p class="-text2 -gray -bold">Inactivos</p>
    <p class="-text1 -extra-bold -black">250</p>
    <div class="progress-bar -mtd5">
      <div class="progress-bar-line -blue-bg" style="width: 20%"></div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UserStatistics",
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
