<template>
  <div class="options">
    <router-link class="link" to="/">
      <button class="btn primary-btn purple -wd100">
        <p>Home</p>
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarUserOptions"
});
</script>
