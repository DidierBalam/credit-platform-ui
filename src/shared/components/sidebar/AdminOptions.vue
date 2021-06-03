<template>
  <div class="options">
    <router-link class="link navigation" to="/admin">
      <button class="btn -wd100">
        <p>Dashboard</p>
      </button>
    </router-link>
    <router-link class="link navigation" to="/admin/applications">
      <button class="btn gray -wd100 -mt1">
        <p>Solicitudes</p>
      </button>
    </router-link>
    <router-link class="link navigation" to="/admin/users">
      <button class="btn gray -wd100 -mt1">
        <p>Usuarios</p>
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarAdminOptions",
  setup() {
    //
  },
});
</script>
