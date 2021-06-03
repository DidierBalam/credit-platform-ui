<template>
  <div class="module-layout dashboard-module">
    <!-- Left layout -->
    <div class="left-layout">
      <Sidebar />
    </div>
    <!-- //Left layout -->

    <!-- Center layout -->
    <div class="center-layout">
      <NavBar />

      <div class="main-container">
        <div class="summary">
          <Applications />

          <Users />
        </div>

        <div class="statistics">
          <p class="-text1 -extra-bold -black -p1 -extra-light-gray-bg">Estadísticas</p>
          <ApplicationStatistics />
          <UserStatistics />
        </div>
      </div>
    </div>
    <!-- //Center layout -->
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Mixins
import { scrollMixin } from "@/shared/mixins/scroll-mixin";

//Component
import Sidebar from "../../../shared/components/sidebar/Sidebar.vue";
import NavBar from "../../../shared/components/navbar/NavBar.vue";
import Applications from "./Applications.vue";
import Users from "./Users.vue";
import ApplicationStatistics from "./statistics/ApplicationStatistics.vue";
import UserStatistics from "./statistics/UserStatistics.vue";

export default defineComponent({
  name: "DashboardModule",
  components: {
    Sidebar,
    NavBar,
    Applications,
    Users,
    ApplicationStatistics,
    UserStatistics,
  },
  mixins: [scrollMixin],
  setup() {
    //Data
    const isLoading = ref<boolean>(false);

    return {
      //Data
      isLoading,
    };
  },
});
</script>

<style lang="scss" src="../../../assets/scss/modules/admin/dashboard.scss"></style>
