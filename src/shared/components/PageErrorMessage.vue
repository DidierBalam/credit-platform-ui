<template>
  <div class="-flex-center -mt4">
    <p class="-title -extra-bold -gray -primary-font">No se pudo cargar la página :(</p>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageMessage",
  props: {
    title: String,
  },
});
</script>
