<template>
  <div class="users">
    <div class="-flex-between -items-center">
      <div>
        <p class="-text1 -extra-bold -mtd5">Usuarios</p>
        <p class="-text3 -light-gray -bold">Administra usuarios</p>
      </div>
      <button class="btn transparent-btn gray">
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
        <div class="date -center-text">
          <p
            class="-text3 -extra-bold"
            :class="determineIsNew(item.create) ? '-blue' : '-gray'"
          >
            {{ getLocalTime(item.create) }}
          </p>
        </div>
        <!-- //Date -->

        <!-- Options -->
        <div class="options -flex-end -items-center">
          <button
            class="switch"
            :class="item.isActive ? 'isActive' : ''"
            @click="setUserStatus(item.userId, item.isActive)"
          >
            <p>{{ item.isActive ? "Activo" : "Inactivo" }}</p>
            <div class="switch-tigger"></div>
          </button>
          <button class="btn transparent-btn gray -ml3">
            <i class="bx bxs-pencil general-icon"></i>
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
import { computed, defineComponent } from "vue";

//Store
import { useStore } from "@/store/index";

//Types
import { UserType } from "@/shared/types/user-type";

//Service
import { getLocalTime, determineIsNew } from "@/shared/services/time-service";
import { UserActionOptions } from "@/shared/types/enum/store-enum";

export default defineComponent({
  name: "Applications",
  setup() {
    //Data
    const store = useStore();

    //Computed
    const users = computed((): UserType[] | undefined => {
      return store.getters.userData;
    });

    //Methods
    const setUserStatus = (id: number, currentStatus: boolean) => {
      currentStatus
        ? store
            .dispatch(UserActionOptions.inactiveUser, id)
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        : store
            .dispatch(UserActionOptions.activeUser, id)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };

    return {
      //Computed
      users,
      //Methods
      setUserStatus,
      getLocalTime,
      determineIsNew,
    };
  },
});
</script>
