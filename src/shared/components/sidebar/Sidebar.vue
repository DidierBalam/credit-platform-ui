<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="logo">
      <div class="-flex-center -items-center">
        <i class="bx bx-home-smile -title -purple"></i>
        <h2 class="-text1 -extra-bold -purple -mld3">CredHouse</h2>
      </div>
      <p class="-text2 -bold -light-gray -center-text">Servicios financieros</p>
    </div>
    <!-- //Logo -->

    <Suspense>
      <template #default>
        <keep-alive>
          <component :is="useComponent" />
        </keep-alive>
      </template>
      <template #fallback>
        <div class="options">
          <div class="loading-text -wd50 -mt2"></div>
          <div class="loading-text -wd75 -mt2"></div>
          <div class="loading-text -wd60 -mt2"></div>
          <div class="loading-text -wd75 -mt2"></div>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
//Libraries
import { computed, defineAsyncComponent, defineComponent } from "vue";

//Store
import { useStore } from "@/store/index";

export default defineComponent({
  name: "Sidebar",
  setup() {
    //Data
    const store = useStore();

    //Computed
    const useComponent = computed(() => {
      return store.getters.isAdmin
        ? defineAsyncComponent(() => import("./AdminOptions.vue"))
        : defineAsyncComponent(() => import("./UserOptions.vue"));
    });

    return {
      //Computed
      useComponent,
    };
  },
});
</script>
