<template>
  <div>
    <div class="-flex-center">
      <p class="-text2 -bold -light-gray -primary-font">{{ title }}</p>
    </div>
    <div class="loading-bar -mt1">
      <div class="loading-bar-child"></div>
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
