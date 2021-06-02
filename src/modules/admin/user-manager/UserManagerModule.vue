<template>
  <div class="module-layout user-manager-module">
    <!-- Left layout -->
    <div class="left-layout">
      <Sidebar />
    </div>
    <!-- //Left layout -->

    <!-- Center layout -->
    <div class="center-layout">
      <NavBar />

      <div class="main-container">
        <div class="-flex-between">
          <div>
            <p class="-title -extra-bold">Usuarios</p>
            <p class="-text3 -light-gray -bold">Administrador de usuarios</p>
          </div>
          <button class="btn outline-btn purple" @click="createUser()">
            <i class="bx bx-plus general-icon"></i>
            <p>Nuevo usuario</p>
          </button>
        </div>
        <div class="-mt4">
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

            <!-- Update -->
            <div class="update -flex -items-center">
              <p
                class="-text3 -extra-bold"
                :class="
                  item.update
                    ? determineIsNew(item.update)
                      ? '-blue'
                      : '-gray'
                    : '--gray'
                "
              >
                {{ item.update ? getLocalTime(item.update) : "---" }}
              </p>
              <i class="bx bxs-pencil -text2 -gray -mld5"></i>
            </div>
            <!-- //Update -->

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
              <button
                class="btn transparent-btn gray -ml4"
                @click="updateUser(item.userId)"
              >
                <i class="bx bxs-pencil general-icon"></i>
                <p>Editar</p>
              </button>
            </div>
            <!-- //Options -->
          </div>
        </div>
      </div>
    </div>
    <!-- //Center layout -->
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
import { ModalMutationOptions, UserActionOptions } from "@/shared/types/enum/store-enum";

//Component
import Sidebar from "../../../shared/components/sidebar/Sidebar.vue";
import NavBar from "../../../shared/components/navbar/NavBar.vue";

export default defineComponent({
  name: "UserManagerModule",
  components: {
    Sidebar,
    NavBar,
  },
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
            .then((data) => {
              if (!data) console.log("error");
            })
            .catch((err) => console.log(err))
        : store
            .dispatch(UserActionOptions.activeUser, id)
            .then((data) => {
              if (!data) console.log("error");
            })
            .catch((err) => console.log(err));
    };

    const createUser = () => {
      store.commit(ModalMutationOptions.activateModal, {
        size: "min",
        title: "Creando usuario",
        isClose: false,
        component: () => import("@/shared/components/user/UserCreator.vue"),
      });
    };

    const updateUser = (id: number) => {
      store.commit(ModalMutationOptions.activateModal, {
        size: "min",
        title: "Editando usuario",
        isClose: false,
        elementId: id,
        component: () => import("@/shared/components/user/UserEditor.vue"),
      });
    };

    return {
      //Computed
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

<style lang="scss" src="../../../assets/scss/modules/admin/user-manager.scss"></style>
