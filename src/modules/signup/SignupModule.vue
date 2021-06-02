<template>
  <div class="module-layout signup-module">
    <!-- Background -->
    <div class="signup-background">
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
      <div class="signup-card">
        <div v-if="!isLoading" class="-wd100">
          <router-link to="/signin" class="link">
            <button class="btn transparent-btn gray" style="margin-left: -1.3em">
              <i class="bx bx-chevron-left -title"></i>
              <p class="-mtd1">Acceder</p>
            </button>
          </router-link>

          <p class="-title -black -extra-bold">Crear cuenta</p>

          <div class="inp -mt3">
            <input type="text" placeholder="Nombre de usuario" />
          </div>

          <div class="inp -mt2">
            <input type="password" placeholder="Contraseña" />
          </div>

          <div class="-mt3">
            <button class="btn primary-btn -wd100" @click="signup()">
              <p>Registrarme</p>
            </button>
          </div>

          <div class="-mt2 -flex-center -items-center">
            <p class="-text2 -gray">Tienes cuenta?</p>
            <router-link to="/signin" class="link">
              <button class="btn transparent-btn black">
                <p class="-extra-bold">Inicia sesión</p>
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
import { defineComponent, ref } from "vue";
//Components
import LoadingBar from "../../shared/components/LoadingBar.vue";

export default defineComponent({
  name: "SignupModule",
  components: {
    LoadingBar,
  },
  setup() {
    //Data
    const isLoading = ref<boolean>(false);

    //Methods

    const signup = async () => {
      isLoading.value = true;
    };

    return {
      //Data
      isLoading,
      //Methods
      signup,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/signup.scss"></style>
