<template>
  <div class="module-layout application-manager-module">
    <!-- Left layout -->
    <div class="left-layout">
      <Sidebar />
    </div>
    <!-- //Left layout -->

    <!-- Center layout -->
    <div class="center-layout">
      <NavBar />

      <div class="main-container">
        <div>
          <p class="-title -extra-bold">Solicitudes</p>
          <p class="-text3 -light-gray -bold">Administrador de solicitudes</p>
        </div>

        <div class="-mt3">
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
            <!-- Update -->
            <div class="update -flex -items-center">
              <p
                class="-text3 -extra-bold"
                :class="
                  item.update
                    ? determineIsNew(item.update)
                      ? '-blue'
                      : '-gray'
                    : '-gray'
                "
              >
                {{ item.update ? getLocalTime(item.update) : "---" }}
              </p>
              <i class="bx bxs-pencil -text2 -gray -mld5"></i>
            </div>
            <!-- //Update -->
            <div class="status">
              <div
                :class="{
                  '-green-bg': item.status === ApplicationStatusOptions.ok,
                  '-blue-bg': item.status === ApplicationStatusOptions.waiting,
                  '-yellow-bg': item.status === ApplicationStatusOptions.rejected,
                }"
              >
                <p class="-text3 -white -extra-bold">
                  {{ translateApplicationStatusName(item.status) }}
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
      </div>
    </div>
    <!-- //Center layout -->
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

//Mixins
import { scrollMixin } from "@/shared/mixins/scroll-mixin";

//Composables
import useApplication from "@/shared/composables/useApplication";

//Component
import Sidebar from "../../../shared/components/sidebar/Sidebar.vue";
import NavBar from "../../../shared/components/navbar/NavBar.vue";

export default defineComponent({
  name: "ApplicationManagerModule",
  components: {
    Sidebar,
    NavBar,
  },
  mixins: [scrollMixin],
  setup() {
    //Use
    const {
      applications,
      ApplicationStatusOptions,
      translateApplicationStatusName,
      getLocalTime,
      determineIsNew,
    } = useApplication();

    return {
      //Data
      applications,
      //Type
      ApplicationStatusOptions,
      //Methods
      translateApplicationStatusName,
      getLocalTime,
      determineIsNew,
    };
  },
});
</script>

<style
  lang="scss"
  src="../../../assets/scss/modules/admin/application-manager.scss"
></style>
