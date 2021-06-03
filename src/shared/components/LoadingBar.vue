<template>
  <div class="loading">
    <div class="-flex-center">
      <p class="-text2 -bold -gray -primary-font">{{ title ? title : "Cargando" }}</p>
    </div>
    <div class="-wd100 -flex-center">
      <div class="loading-bar -mt1">
        <div class="loading-bar-child"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingBar",
  props: {
    title: String,
  },
});
</script>
