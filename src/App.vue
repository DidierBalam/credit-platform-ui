<template>
  <router-view />

  <Modal />
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

//Components
import Modal from "./core/components/Modal.vue";

export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    //Lifecycle Hooks
  },
});
</script>

<style lang="scss" src="./assets/scss/library/library.scss"></style>
