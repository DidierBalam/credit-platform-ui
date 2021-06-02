<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="logo">
      <div class="-flex-center -items-center">
        <i class="bx bx-home-smile -title -purple"></i>
        <h2 class="-text1 -extra-bold -purple -mld3">CredHouse</h2>
      </div>
      <p class="-text2 -bold -light-gray -center-text">Servicios financieros</p>
    </div>
    <!-- //Logo -->

    <div class="options">
      <router-link class="link" to="/admin">
        <button class="btn primary-btn purple -wd100">
          <p>Dashboard</p>
        </button>
      </router-link>
      <router-link class="link" to="/admin/applications">
        <button class="btn transparent-btn gray -wd100 -mt1">
          <p>Solicitudes</p>
        </button>
      </router-link>
      <router-link class="link" to="/admin/users">
        <button class="btn transparent-btn gray -wd100 -mt1">
          <p>Usuarios</p>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  setup() {
    //
  },
});
</script>
