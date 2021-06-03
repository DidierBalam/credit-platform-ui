<template>
  <div class="-flex-center -mt4 response-creation">
    <div class="-center-text">
      <i class="bx bx-wink-smile -light-gray response-icon"></i>
      <p class="-title -extra-bold -green -primary-font -mtd5">¡En hora buena!</p>
      <p class="-text2 -bold -gray">Tu solicitud ha sido creada y enviada</p>
      <div class="-mt3 -flex-center">
        <button class="btn outline-btn green -wd70" @click="hideModal()">
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
  name: "SuccesCreation",
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
