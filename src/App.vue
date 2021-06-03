<template>
  <router-view />

  <Modal />
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";
import { useStore } from "./store";

//Types
import { ModalMutationOptions } from "./shared/types/enum/store-enum";

//Components
import Modal from "./core/components/Modal.vue";

export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    //Data
    const store = useStore()

    //Lifecycle Hooks
    store.commit(ModalMutationOptions.closeModal);
  },
});
</script>

<style lang="scss" src="./assets/scss/library/library.scss"></style>
