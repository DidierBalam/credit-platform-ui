<template>
  <nav class="navbar">
    <div class="nav-child">
      <div class="-flex -items-center -mr1" v-if="isAdmin">
        <i class="bx bxs-cctv -text2 -purple"></i>
        <p class="-text3 -extra-bold -purple -mld3">Modo administrador</p>
      </div>
      <!-- Account DropDown -->
      <div class="dropdown" id="account-dropdown">
        <div
          class="dropdown-bg"
          @click="executeDropdown(false, 'account-dropdown')"
        ></div>
        <button
          class="btn transparent-btn gray tigger"
          @click="executeDropdown(true, 'account-dropdown')"
        >
          <i class="bx bxs-user general-icon"></i>
          <p>{{ username }}</p>
          <i class="bx bx-chevron-down general-icon drop"></i>
        </button>

        <!-- Options -->
        <div class="dropdown-options -flex-end">
          <div class="dropdown-options-child">
            <router-link to="/signin" class="link">
              <button class="btn transparent-btn gray" @click="logout()">
                <i class="bx bx-log-out general-icon"></i>
                <p>Cerrar sesión</p>
              </button>
            </router-link>
          </div>
        </div>
        <!-- //Options -->
      </div>
      <!-- //Account DropDown -->
      <button class="btn transparent-btn gray">
        <i class="bx bxs-bell general-icon"></i>
      </button>
      <button class="btn transparent-btn gray">
        <i class="bx bxs-cog general-icon"></i>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
//Libraries
import { computed, defineComponent, onMounted, onUnmounted } from "vue";
import router from "@/core/router";

//Store
import { useStore } from "@/store/index";

//Services
import { executeDropdown } from "@/shared/services/dom-service";
import { AuthActionsOptions } from "@/shared/types/enum/store-enum";
import { StatusResponseType } from "@/shared/types/http-response-types";

export default defineComponent({
  name: "NavBar",
  setup() {
    //Data

    const store = useStore();

    //Computed
    const username = computed(() => {
      return store.state.AuthStore.userData?.username;
    });

    const isAdmin = computed(() => {
      return store.getters.isAdmin;
    });

    //Methods
    const logout = () => {
      store
        .dispatch(AuthActionsOptions.deleteSession, undefined)
        .then((res: StatusResponseType) => {
          if (res.status) {
            router.push("/signin");
          } else alert(res.message);
        })
        .catch((err) => alert(err));
    };

    //Lifecycle Hooks

    onMounted(() => {
      window.addEventListener("scroll", () => {
        executeDropdown(false, "account-dropdown");
      });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", () => {
        executeDropdown(false, "account-dropdown");
      });
    });

    return {
      //Computed
      isAdmin,
      username,
      //Methods
      logout,
      executeDropdown,
    };
  },
});
</script>
