<template>
  <div class="-flex-center -mt4 response-creation">
    <div class="-center-text">
      <i class="bx bx-tired -light-gray response-icon"></i>
      <p class="-title -extra-bold -yellow -primary-font -mtd5">Lo sentimos...</p>
      <p class="-text2 -bold -gray">La solicitud no pudo ser generada, intente de nuevo</p>
      <div class="-mt3 -flex-center">
        <button class="btn outline-btn gray -wd70" @click="hideModal()">
          <p>Aceptar</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

//Store
import { useStore } from "@/store";

//Types
import { ModalMutationOptions } from "@/shared/types/enum/store-enum";
export default defineComponent({
  name: "ErrorCreation",
  setup() {
    //Data
    const store = useStore();

    //Methods
    const hideModal = () => {
      store.commit(ModalMutationOptions.closeModal);
    };

    return {
      //Methods
      hideModal,
    };
  },
});
</script>
