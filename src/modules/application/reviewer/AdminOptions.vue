<template>
  <div class="information">
    <p class="-text1 -extra-bold -gray">Administrar</p>

    <p class="-text2 -bold -gray -mt2">
      Cambia el estado de la Solicitud para reflejarlo al usuario.
    </p>

    <div class="-mt3">
      <button
        class="btn outline-btn green -wd100"
        v-if="
          dataLoaded.status === ApplicationStatusOptions.waiting ||
          dataLoaded.status === ApplicationStatusOptions.rejected
        "
        @click="approveApplication()"
      >
        <p>Aprobar</p>
      </button>
      <button
        class="btn outline-btn yellow -wd100 -mt2"
        v-if="
          dataLoaded.status === ApplicationStatusOptions.waiting ||
          dataLoaded.status === ApplicationStatusOptions.ok
        "
        @click="rejectApplication()"
      >
        <p>Rechazar</p>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Types
import { ApplicationType } from "@/shared/types/application-types";
import { ApplicationStatusOptions } from "@/shared/types/enum/applicaton-status-enum";

//Store
import { useStore } from "@/store/index";
import { ApplicationActionOptions } from "@/shared/types/enum/store-enum";

export default defineComponent({
  name: "AdminOptions",
  props: {
    application: null,
  },
  setup(props) {
    //Data

    const store = useStore();
    const dataLoaded = ref<ApplicationType>(props.application);

    const rejectApplication = () => {
      store
        .dispatch(
          ApplicationActionOptions.rejectApplication,
          dataLoaded.value.applicationId
        )
        .then((response: boolean) => {
          response ? console.log("ok") : console.log("error");
        })
        .catch((err) => console.log(err));
    };

    const approveApplication = () => {
      store
        .dispatch(
          ApplicationActionOptions.approveApplication,
          dataLoaded.value.applicationId
        )
        .then((response: boolean) => {
          response ? console.log("ok") : console.log("error");
        })
        .catch((err) => console.log(err));
    };

    return {
      //Data
      dataLoaded,
      //Types
      ApplicationStatusOptions,
      //Methods
      rejectApplication,
      approveApplication,
    };
  },
});
</script>
