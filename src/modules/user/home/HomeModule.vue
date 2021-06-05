<template>
  <div class="module-layout home-module">
    <!-- Left layout -->
    <div class="left-layout">
      <Sidebar />
    </div>
    <!-- //Left layout -->

    <!-- Center layout -->
    <div class="center-layout">
      <NavBar />

      <div class="main-container">
        <div class="-flex-between">
          <div>
            <p class="-title -extra-bold">Mis solicitudes</p>
            <p class="-text3 -light-gray -bold">Administrador de solicitudes</p>
          </div>

          <div>
            <router-link to="/application/create" class="link">
              <button class="btn outline-btn purple">
                <i class="bx bx-plus general-icon"></i>
                <p>Nueva solicitud</p>
              </button>
            </router-link>
          </div>
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
import { defineComponent, computed } from "vue";

//Store
import { useStore } from "@/store/index";

//Types
import { ApplicationStatusOptions } from "@/shared/types/enum/applicaton-status-enum";
import { ApplicationType } from "@/shared/types/application-types";

//Services
import { translateApplicationStatusName } from "@/shared/services/translate-service";
import { getLocalTime, determineIsNew } from "@/shared/services/time-service";

//Mixins
import { scrollMixin } from "@/shared/mixins/scroll-mixin";

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
    //Data
    const store = useStore();

    //Computed
    const applications = computed((): ApplicationType[] | undefined => {
      return store.state.ApplicationStore.applications.filter(
        (x) => x.userId == store.state.AuthStore.userData?.userId
      );
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
  },
});
</script>

<style lang="scss" src="../../../assets/scss/modules/user/home.scss"></style>
