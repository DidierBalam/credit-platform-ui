<template>
  <div class="users">
    <div class="-flex-between -items-center">
      <div>
        <p class="-text1 -extra-bold -mtd5">Usuarios</p>
        <p class="-text3 -light-gray -bold">Administra usuarios</p>
      </div>
      <button class="btn transparent-btn gray" @click="createUser()">
        <i class="bx bx-plus general-icon"></i>
        <p>Nuevo usuario</p>
      </button>
    </div>

    <!-- User items -->
    <div class="-mt3">
      <div class="user" v-for="item of users" :key="item.userId">
        <!-- Name -->
        <button class="key general-btn -flex-left -items-center -p1">
          <i class="bx bxs-user-circle -text1 -light-gray"></i>
          <p class="-text2 -bold -black -mld5 -thinking-text">{{ item.username }}</p>
        </button>
        <!-- //Name -->
        <!-- Date -->
        <div class="date -flex -items-center">
          <p
            class="-text3 -extra-bold"
            :class="determineIsNew(item.create) ? '-blue' : '-gray'"
          >
            {{ getLocalTime(item.create) }}
          </p>
          <i class="bx bxs-calendar-event -text2 -gray -mld5"></i>
        </div>
        <!-- //Date -->

        <!-- Options -->
        <div class="options -flex-end -items-center">
          <button
            class="switch -mr2"
            :class="item.isActive ? 'isActive' : ''"
            @click="setUserStatus(item.userId, item.isActive)"
          >
            <p>{{ item.isActive ? "Activo" : "Inactivo" }}</p>
            <div class="switch-tigger"></div>
          </button>
          <button class="btn transparent-btn gray -ml1" @click="updateUser(item.userId)">
            <i class="bx bxs-pencil general-icon"></i>
            <p>Editar</p>
          </button>
        </div>
        <!-- //Options -->
      </div>
    </div>
    <!-- //User items -->

    <div class="-mt2 -flex-end">
      <router-link to="/admin/users" class="link"
        ><button class="btn transparent-btn purple">
          <p>Ver todo</p>
          <i class="bx bx-chevron-right general-icon"></i></button
      ></router-link>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

//Composables
import useUser from "@/shared/composables/useUser";

export default defineComponent({
  name: "Applications",
  setup() {
    //Use
    const {
      users,
      setUserStatus,
      getLocalTime,
      createUser,
      updateUser,
      determineIsNew,
    } = useUser();

    return {
      //Data
      users,
      //Methods
      setUserStatus,
      getLocalTime,
      createUser,
      updateUser,
      determineIsNew,
    };
  },
});
</script>
