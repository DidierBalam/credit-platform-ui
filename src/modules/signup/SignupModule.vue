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

          <p v-if="!registerResponse.status" class="-mt1 -text3 -yellow -center-text">
            **{{ registerResponse.message }}**
          </p>

          <div class="inp -mt3">
            <input
              type="text"
              placeholder="Nombre de usuario"
              v-model="user.username"
              onkeypress="return(event.charCode != 32)"
            />
          </div>

          <div class="inp button-inp -mt2">
            <input
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="Contraseña"
              v-model.trim="user.password"
              onkeypress="return(event.charCode != 32)"
            />
            <button @click="isPasswordVisible = !isPasswordVisible">
              <i
                class="bx general-icon"
                :class="isPasswordVisible ? 'bx-hide' : 'bx-show'"
              ></i>
            </button>
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
          <LoadingBar :title="loadingTitle" />
        </div>
      </div>
    </div>
    <!-- //Layout -->
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Composable
import useLogin from "@/shared/composables/useLogin";

//Types
import { UserActionOptions } from "@/shared/types/enum/store-enum";

//Components
import LoadingBar from "../../shared/components/LoadingBar.vue";
import { UserRegisterResponseType } from "@/shared/types/http-response-types";

export default defineComponent({
  name: "SignupModule",
  components: {
    LoadingBar,
  },
  setup() {
    //Data
    const {
      store,
      user,
      isPasswordVisible,
      isLoading,
      registerResponse,
      signin,
      showError,
    } = useLogin();

    const loadingTitle = ref<string>("");

    //Methods
    const signup = () => {
      if (user.value.username && user.value.password) {
        isLoading.value = true;
        loadingTitle.value = "Registrando";
        store
          .dispatch(UserActionOptions.registerUser, user.value)
          .then((data: UserRegisterResponseType) => {
            setTimeout(() => {
              if (data.status) {
                loadingTitle.value = "Iniciando sesión";
                signin();
              } else {
                showError(data.message ? data.message : "Error");
              }
            }, 1000);
          })
          .catch((err) => showError(err));
      }
    };

    return {
      //Data
      user,
      isLoading,
      registerResponse,
      loadingTitle,
      isPasswordVisible,
      //Methods
      signup,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/signup.scss"></style>
