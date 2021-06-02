<template>
  <div class="module-layout signin-module">
    <!-- Background -->
    <div class="signin-background">
      <i class="item1 bx bxs-credit-card-front -text1 -purple"></i>
      <i class="item2 bx bxs-dollar-circle -text1 -blue"></i>
      <i class="item3 bx bxs-rocket -text1 -yellow"></i>
      <i class="item4 bx bxs-bulb -text1 -blue"></i>
      <i class="item5 bx bx-money -text1 -purple"></i>
      <i class="item6 bx bxs-shield -text1 -green"></i>
      <i class="item7 bx bxs-coin -text1 -green"></i>
    </div>
    <!-- //Background -->

    <!-- Layout -->
    <div class="center-layout">
      <div class="signin-card">
        <div v-if="!isLoading" class="-wd100">
          <!-- Logo -->
          <div class="logo -mt1">
            <div class="-flex -items-center">
              <i class="bx bx-home-smile -text1 -purple"></i>
              <h2 class="-text2 -extra-bold -purple -mld3">CredHouse</h2>
            </div>
            <p class="-text3 -bold -light-gray">Servicios financieros</p>
          </div>
          <!-- //Logo -->

          <p class="-title -mtd5 -black -extra-bold">Iniciar sesión</p>

          <div class="inp -mt3">
            <input type="text" placeholder="Usuario" />
          </div>

          <div class="inp -mt2">
            <input type="password" placeholder="Contraseña" />
          </div>

          <div class="-mt3">
            <button class="btn primary-btn -wd100" @click="signin()">
              <p>Acceder</p>
            </button>
          </div>

          <div class="-mt2 -flex-center -items-center">
            <p class="-text2 -gray">No tienes cuenta?</p>
            <router-link to="/signup" class="link">
              <button class="btn transparent-btn black">
                <p class="-extra-bold">Regístrate aquí</p>
              </button>
            </router-link>
          </div>
        </div>
        <div v-else class="-wd100">
          <LoadingBar :title="'Iniciando sesión'" />
        </div>
      </div>
    </div>
    <!-- //Layout -->
  </div>
</template>

<script lang="ts">
//Libraries
import router from "@/core/router";
import { defineComponent, ref } from "vue";

//Components
import LoadingBar from "../../shared/components/LoadingBar.vue";

export default defineComponent({
  name: "SinginModule",
  components: {
    LoadingBar,
  },
  setup() {
    //Data
    const isLoading = ref<boolean>(false);

    //Methods

    const signin = async () => {
      isLoading.value = true;
      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    };

    //Lifecycle Hooks

    return {
      //Data
      isLoading,
      //Methods
      signin,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/signin.scss"></style>
