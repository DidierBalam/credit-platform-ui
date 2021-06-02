<template>
  <div v-if="!isLoading" class="user-creator">
    <div class="-flex -items-center" style="margin-top: -1.5em">
      <i class="fi-rr-trophy -title -black -mtd3"></i>
      <p class="-title -black -extra-bold -mld3">Ingresa un Nombre</p>
    </div>
    <div class="inp -mt2">
      <input type="text" placeholder="UserName" />
    </div>
    <div class="inp -mt2">
      <input type="text" placeholder="Contraseña" />
    </div>
    <div class="-mt3 -flex-center">
      <button class="btn light-btn gray -wd50" @click="closeModal()">
        <p>Canccelar</p>
      </button>
      <button class="btn primary-btn -wd50 -ml2" @click="create()">
        <p>Crear</p>
      </button>
    </div>
  </div>

  <div v-else class="-flex-center -items-center" style="height: 17.2em">
    <LoadingProcess
      :title="createProcessTitle"
      :status="createProcessStatus"
      class="-wd50"
      style="margin-top: -2em"
    />
  </div>
</template>

<script lang="ts">
//Libraries
import router from "@/core/router";
import { defineComponent, ref } from "vue";

//Store
import { useStore } from "@/store/index";

//Types
import { ModalMutationOptions } from "../../types/enum/store-enum";

//Components
import LoadingProcess from "../LoadingProcess.vue";

export default defineComponent({
  name: "UserCreator",
  components: {
    LoadingProcess,
  },
  setup() {
    //Data
    const store = useStore();

    const isLoading = ref<boolean>(false);

    const createProcessStatus = ref<number>(0);

    const createProcessTitle = ref<string>("");

    //Methods
    const create = () => {
      isLoading.value = true;
      createProcessTitle.value = "Creando";

      setTimeout(() => {
        createProcessStatus.value = 60;

        setTimeout(() => {
          createProcessStatus.value = 100;
          createProcessTitle.value = "Redirigiendo";

          setTimeout(() => {
            router.push("/game");
            closeModal();
          }, 1200);
        }, 1200);
      }, 200);
    };

    const closeModal = () => {
      store.commit(ModalMutationOptions.closeModal);
    };

    return {
      //Data
      isLoading,
      createProcessTitle,
      createProcessStatus,
      //Methods
      create,
      closeModal,
    };
  },
});
</script>
