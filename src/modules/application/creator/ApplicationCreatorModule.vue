<template>
  <div class="module-layout application-creator-module">
    <!-- Left layout -->
    <div class="left-layout">
      <Sidebar />
    </div>
    <!-- //Left layout -->

    <!-- Center layout -->
    <div class="center-layout">
      <NavBar />

      <div class="main-container">
        <div class="loaded-form">
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
            <h1 class="-title -extra-bold">Crear solicitud</h1>
          </div>

          <DynamicForm class="-mt2" :form="form" />

          <div class="-mt5 -flex-center">
            <button class="btn outline-btn purple -wd100" @click="save()">
              <p>Enviar solicitud</p>
            </button>
          </div>

          <div class="-mt5 -flex-center">
            <p class="-text3 -gray">
              **Tus datos son protegidos, no los compartiremos y no haremos uso lucrativo.
            </p>
          </div>
        </div>
        <div class="information">
          <p class="-text1 -extra-bold -gray">Nota</p>

          <p class="-text2 -bold -gray -mt1">
            Crea tu solicitud con unos sencillos pasos, no permitas que el tiempo te
            detenga.
          </p>

          <p class="-text2 -bold -gray -mt1">
            Te responderemos en aproximadamente 5 días.
          </p>

          <p class="-title -light-gray -center-text -extra-bold -mt1">¡Vamos!</p>
        </div>
      </div>
    </div>
    <!-- //Center layout -->
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";
import router from "@/core/router";

//Store
import { useStore } from "@/store/index";

//Types
import { ApplicationRegisterResponseType } from "@/shared/types/http-response-types";
import { FormType } from "@/shared/types/form-types";
import {
  ApplicationActionOptions,
  ModalMutationOptions,
} from "@/shared/types/enum/store-enum";

//Services
import { getFormData } from "@/shared/presenters/application-presenter";

//Mixins
import { scrollMixin } from "@/shared/mixins/scroll-mixin";

//Component
import Sidebar from "@/shared/components/sidebar/Sidebar.vue";
import NavBar from "@/shared/components/navbar/NavBar.vue";
import DynamicForm from "@/shared/components/form/DynamicForm.vue";

export default defineComponent({
  name: "ApplicationModule",
  components: {
    Sidebar,
    NavBar,
    DynamicForm,
  },
  mixins: [scrollMixin],
  setup() {
    //Data
    const store = useStore();

    const form = ref<FormType>({ data: [] });

    //Methods
    const save = async () => {
      showModal(import("@/shared/components/LoadingBar.vue"));

      setTimeout(async () => {
        store
          .dispatch(ApplicationActionOptions.registerApplication, {
            applicationId: 0,
            userId: store.state.AuthStore.userData?.userId,
            data: await getFormData(form.value),
          })
          .then((res: ApplicationRegisterResponseType) => {
            res.status
              ? (() => {
                  router.push(`/application/${res.applicationId}`);
                  showModal(import("@/shared/components/application/SuccesCreation.vue"));
                })()
              : showModal(import("@/shared/components/application/ErrorCreation.vue"));
          })
          .catch(() =>
            showModal(import("@/shared/components/application/ErrorCreation.vue"))
          );
      }, 1800);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const showModal = (component: any) => {
      store.commit(ModalMutationOptions.activateModal, {
        size: "med",
        title: "Creando solicitud",
        isClose: false,
        component: () => component,
      });
    };

    //Lifecycle hooks
    form.value = require("./config/form.json");

    return {
      //Data
      form,
      //Methods
      save,
    };
  },
});
</script>

<style
  lang="scss"
  src="../../../assets/scss/modules/application/application-creator.scss"
></style>
