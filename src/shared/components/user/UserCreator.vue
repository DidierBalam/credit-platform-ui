<template>
  <div v-if="!isLoading && !isErrorProcess" class="user-creator">
    <div class="-flex -items-center" style="margin-top: -1.5em">
      <i class="bx bxs-user -title -gray"></i>
      <p class="-title -black -extra-bold -mld3">Completa los campos</p>
    </div>
    <div class="inp -mt3">
      <input
        type="text"
        placeholder="Nombre de usuario"
        v-model.trim="user.username"
        onkeypress="return(event.charCode != 32)"
      />
    </div>
    <div class="inp button-inp -mt2">
      <input
        :type="isPasswordVisible ? 'text' : 'password'"
        placeholder="Contraseña"
        v-model.trim="user.password"
        onkeypress="return(event.charCode != 32)"
      />
      <button @click="isPasswordVisible = !isPasswordVisible">
        <i class="bx general-icon" :class="isPasswordVisible ? 'bx-hide' : 'bx-show'"></i>
      </button>
    </div>
    <div class="-mt3 -flex-center">
      <button class="btn light-btn gray -wd50" @click="closeModal()">
        <p>Cancelar</p>
      </button>
      <button class="btn primary-btn -wd50 -ml2" @click="create()">
        <p>Crear</p>
      </button>
    </div>
  </div>

  <div
    v-else-if="isLoading && !isErrorProcess"
    class="-flex-center -items-center"
    style="height: 25em"
  >
    <LoadingProcess
      :title="createProcessTitle"
      :status="createProcessStatus"
      class="-wd50"
      style="margin-top: -2em"
    />
  </div>

  <div v-else-if="!isLoading && isErrorProcess">
    <p class="-title -mt3 -extra-bold -center-text -yellow">No se pudo completar!</p>
    <div class="-mt2 -flex-center">
      <button class="btn outline-btn gray -wd50" @click="isErrorProcess = false">
        <p>Aceptar</p>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Store
import { useStore } from "@/store/index";

//Types
import { ModalMutationOptions, UserActionOptions } from "../../types/enum/store-enum";
import { UserType } from "@/shared/types/user-type";

//Components
import LoadingProcess from "../LoadingProcess.vue";
import { UserRegisterResponseType } from "@/shared/types/http-response-types";

export default defineComponent({
  name: "UserCreator",
  components: {
    LoadingProcess,
  },
  setup() {
    //Data
    const store = useStore();

    const user: UserType = {
      userId: 0,
      username: "",
      password: "",
    };

    const isLoading = ref<boolean>(false);
    const isErrorProcess = ref<boolean>(false);
    const isPasswordVisible = ref<boolean>(false);

    const createProcessStatus = ref<number>(0);
    const createProcessTitle = ref<string>("");

    //Methods
    const create = () => {
      if (user.username && user.password) {
        isLoading.value = true;
        createProcessTitle.value = "Creando";

        setTimeout(() => {
          createProcessStatus.value = 60;

          setTimeout(() => {
            createProcessStatus.value = 100;
            store
              .dispatch(UserActionOptions.registerUser, user)
              .then((data: UserRegisterResponseType) => {
                if (data.status) {
                  createProcessTitle.value = "Completando";

                  setTimeout(() => {
                    closeModal();
                  }, 500);
                } else {
                  isErrorProcess.value = true;
                  isLoading.value = false;
                }
              })
              .catch(() => {
                isErrorProcess.value = true;
                isLoading.value = false;
              });
          }, 1000);
        }, 200);
      }
    };

    const closeModal = () => {
      store.commit(ModalMutationOptions.closeModal);
    };

    return {
      //Data
      user,
      isLoading,
      createProcessTitle,
      createProcessStatus,
      isPasswordVisible,
      isErrorProcess,
      //Methods
      create,
      closeModal,
    };
  },
});
</script>
