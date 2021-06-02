<template>
  <nav class="navbar">
    <div class="nav-child">
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
          <p>DidierBalam</p>
          <i class="bx bx-chevron-down general-icon drop"></i>
        </button>

        <!-- Options -->
        <div class="dropdown-options -flex-end">
          <div class="dropdown-options-child">
            <button class="btn transparent-btn gray">
              <i class="fi-rr-heart general-icon"></i>
              <p>Planes y Precios</p>
            </button>
            <button class="btn transparent-btn gray">
              <i class="fi-rr-copyright general-icon"></i>
              <p>Acerda de</p>
            </button>
            <button class="btn transparent-btn gray">
              <i class="fi-rr-sign-out general-icon" style="transform: scale(-1)"></i>
              <p>Salir</p>
            </button>
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
import { defineComponent, onMounted, onUnmounted } from "vue";

//Services
import { executeDropdown } from "@/shared/services/dom-service";

export default defineComponent({
  name: "NavBar",
  setup() {
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
      //Methods
      executeDropdown,
    };
  },
});
</script>
