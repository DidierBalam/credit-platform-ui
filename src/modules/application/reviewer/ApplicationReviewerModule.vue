<template>
  <div class="module-layout application-reviewer-module">
    <!-- Left layout -->
    <div class="left-layout">
      <Sidebar />
    </div>
    <!-- //Left layout -->

    <!-- Center layout -->
    <div class="center-layout">
      <NavBar />

      <div class="main-container" v-if="applicationData">
        <div class="loaded-reviewer">
          <div>
            <button
              class="btn transparent-btn gray"
              style="margin-top: -2em; margin-left: -1.2em"
              @click="$router.go(-1)"
            >
              <i class="bx bx-chevron-left general-icon"></i>
              <p>Regresar</p>
            </button>
          </div>
          <div class="-mt1">
            <h1 class="-title -extra-bold">
              Solicitud {{ applicationData.applicationId }}
            </h1>
          </div>
          <div class="summary -mt3">
            <div class="item">
              <p class="-text2 -black -extra-bold">Creado</p>
              <p
                class="-text2 -bold -mtd5"
                :class="determineIsNew(applicationData.create) ? '-blue' : '-gray'"
              >
                {{
                  applicationData.create ? getLocalTime(applicationData.create) : "---"
                }}
              </p>

              <p class="-text2 -black -extra-bold -mt2">Editado</p>
              <p
                class="-text2 -bold -mtd5"
                :class="
                  applicationData.update
                    ? determineIsNew(applicationData.update)
                      ? '-blue'
                      : '-gray'
                    : '-gray'
                "
              >
                {{
                  applicationData.update ? getLocalTime(applicationData.update) : "---"
                }}
              </p>
            </div>

            <div class="-ml2 item">
              <div>
                <p class="-text2 -black -extra-bold">Estado</p>
                <div
                  class="status -mtd5"
                  :class="{
                    '-green-bg': applicationData.status === ApplicationStatusOptions.ok,
                    '-blue-bg':
                      applicationData.status === ApplicationStatusOptions.waiting,
                    '-yellow-bg':
                      applicationData.status === ApplicationStatusOptions.rejected,
                  }"
                >
                  <p class="-text2 -black -bold -white">
                    {{ translateApplicationStatusName(applicationData.status) }}
                  </p>
                </div>
              </div>
              <div>
                <p class="-text2 -black -extra-bold -mt1">Usuario</p>
                <p class="-bold -text2 -gray">{{ username }}</p>
              </div>
            </div>
          </div>

          <DynamicReviewer class="-mt2" :elementId="id" :application="applicationData" />
        </div>

        <Suspense>
          <template #default>
            <keep-alive>
              <component :is="useComponent" :application="applicationData" />
            </keep-alive>
          </template>
          <template #fallback>
            <div class="-flex-center -items-center" style="height: 17.2em">
              <LoadingBar :title="'Cargando'" style="margin-top: -2em" />
            </div>
          </template>
        </Suspense>
      </div>

      <div v-else>
        <PageErrorMessage class="-mt5" />
      </div>
    </div>
    <!-- //Center layout -->
  </div>
</template>

<script lang="ts">
//Libraries
import { computed, defineAsyncComponent, defineComponent } from "vue";
import router from "@/core/router";

//Store
import { useStore } from "@/store/index";

//Types
import { ApplicationType } from "@/shared/types/application-types";
import { ApplicationStatusOptions } from "@/shared/types/enum/applicaton-status-enum";

//Services
import { translateApplicationStatusName } from "@/shared/services/translate-service";
import { getLocalTime, determineIsNew } from "@/shared/services/time-service";

//Mixins
import { scrollMixin } from "@/shared/mixins/scroll-mixin";

//Component
import Sidebar from "@/shared/components/sidebar/Sidebar.vue";
import NavBar from "@/shared/components/navbar/NavBar.vue";
import DynamicReviewer from "@/shared/components/reviewer/DynamicReviewer.vue";
import LoadingBar from "@/shared/components/LoadingBar.vue";
import PageErrorMessage from "@/shared/components/PageErrorMessage.vue";

export default defineComponent({
  name: "ApplicationReviewer",
  components: {
    Sidebar,
    NavBar,
    DynamicReviewer,
    LoadingBar,
    PageErrorMessage,
  },
  mixins: [scrollMixin],
  setup() {
    //Data
    const store = useStore();
    const id: number = parseInt(router.currentRoute.value.params["id"].toString());

    //Computed
    const applicationData = computed((): ApplicationType | undefined => {
      return store.state.ApplicationStore.applications.find((x) => x.applicationId == id);
    });

    const useComponent = computed(() => {
      return store.getters.isAdmin
        ? defineAsyncComponent(() => import("./AdminOptions.vue"))
        : defineAsyncComponent(() => import("./UserOptions.vue"));
    });

    const username = computed(() => {
      return store.state.UserStore.users.find(
        (x) => x.userId == applicationData.value?.userId
      )?.username;
    });

    return {
      //Data
      id,
      //Types
      ApplicationStatusOptions,
      //Computed
      applicationData,
      useComponent,
      username,
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
  src="../../../assets/scss/modules/application/application-reviewer.scss"
></style>
