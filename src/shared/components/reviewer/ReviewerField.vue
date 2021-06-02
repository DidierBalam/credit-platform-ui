<template>
  <div>
    <p class="-text2 -gray -extra-bold -thinking-text">{{ data.name }}</p>
    <div v-if="data.value">
      <div style="width: 100%; position: relative; display: grid">
        <p class="-text2 -black -thinking-text -mtd5">{{ data.value }}</p>
      </div>
      <div v-if="data.file">
        <button
          class="general-btn -flex -items-center -mtd5"
          @click="downloadFile(data.file)"
        >
          <i class="bx bxs-download -light-gray -text1"></i>
          <p class="-gray -text3 -mld3">Descargar</p>
        </button>
      </div>
    </div>
    <div v-else>
      <p class="-text2 -bold -light-gray -mtd5">Dato no proporcionado</p>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Types
import { ApplicationFieldType } from "@/shared/types/application-types";

//Services
import { downloadFile } from "@/shared/services/download-file-service";

export default defineComponent({
  name: "ReviewerField",
  props: {
    field: null,
  },
  setup(props) {
    //Data
    const data = ref<ApplicationFieldType>(props.field);

    return {
      //Data
      data,
      //Methods
      downloadFile,
    };
  },
});
</script>
