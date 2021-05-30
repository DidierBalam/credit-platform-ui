<template>
  <div class="module-layout login-module">
    <div class="center-layout">
      <div class="login-card">
        <div v-if="!isLoading">
          <p class="-title -black -extra-bold">Iniciar sesión</p>

          <div class="inp -mt3">
            <input type="text" placeholder="Usuario" />
          </div>

          <div class="inp -mt2">
            <input type="password" placeholder="Contraseña" />
          </div>

          <div class="-mt3">
            <button class="btn primary-btn -wd100" @click="login()">
              <p>Acceder</p>
            </button>
          </div>

          <div class="-mt2 -flex -items-center">
            <p class="-text2 -gray">No tienes cuenta?</p>
            <a href="#" class="link">
              <button class="btn transparent-btn black">
                <p class="-extra-bold">Regístrate aquí</p>
              </button>
            </a>
          </div>
        </div>
        <div v-else>
          <LoadingBar :title="'Iniciando sesión'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Type

//Store

//Composables

//Components
import LoadingBar from "../../shared/components/LoadingBar.vue";

export default defineComponent({
  name: "LoginModule",
  components: {
    LoadingBar,
  },
  setup() {
    //Data
    const isLoading = ref<boolean>(false);

    //Use

    //Methods

    const login = async () => {
      isLoading.value = true;
    };

    //Lifecycle Hooks

    return {
      //Data
      isLoading,
      //Methods
      login,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/login.scss"></style>
