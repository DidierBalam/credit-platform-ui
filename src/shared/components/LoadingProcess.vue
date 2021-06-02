<template>
  <div>
    <div class="-flex-center">
      <p class="-text2 -bold -gray -primary-font">{{ title }}</p>
    </div>
    <div class="loading-process -mt1">
      <div class="loading-process-child" :style="`width:${status}%`"></div>
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
    status: Number,
  },
});
</script>
