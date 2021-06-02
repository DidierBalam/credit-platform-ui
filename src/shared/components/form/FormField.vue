<template>
  <div>
    <div v-if="data.type === 'string'">
      <p class="-text2 -gray">{{ data.label }}</p>
      <div class="inp -mt1">
        <input type="text" v-model="data.value" />
      </div>
    </div>
    <!-- DropDown -->
    <div v-else-if="data.type === 'dropdown'">
      <p class="-text2 -gray">{{ data.label }}</p>
      <div class="dropdown form-dropdown -mt1" :id="`${data.key}-dropdown`">
        <div
          class="dropdown-bg"
          @click="executeDropdown(false, `${data.key}-dropdown`)"
        ></div>
        <button
          class="btn outline-btn gray tigger"
          @click="executeDropdown(true, `${data.key}-dropdown`)"
        >
          <p>{{ data.value ? data.value : "Seleccionar" }}</p>
          <i class="bx bx-chevron-down general-icon drop"></i>
        </button>

        <!-- Options -->
        <div class="dropdown-options">
          <div class="dropdown-options-child">
            <button
              v-for="option of data.options"
              :key="option.fieldOptionId"
              class="btn transparent-btn gray"
              @click="
                data.value = option.name;
                executeDropdown(false, `${data.key}-dropdown`);
              "
            >
              <p>{{ option.name }}</p>
            </button>
          </div>
        </div>
        <!-- //Options -->
      </div>
    </div>
    <!-- //Account DropDown -->

    <!-- DropFile -->
    <div v-else-if="data.type === 'file'">
      <div>
        <p class="-text2 -gray">{{ data.label }}</p>
        <button class="dropfile -mt1">
          <p class="-thinking-text -text3 -bold -gray">
            {{ data.value ? data.value : "Subir archivo" }}
          </p>
          <input type="file" @change="uploadFile" accept="application/pdf" />
        </button>
      </div>
    </div>
    <!-- //DropFile -->

    <div v-else-if="data.type === 'amount'">
      <p class="-text2 -gray">{{ data.label }}</p>
      <div class="inp number-inp -mt1">
        <div class="-flex -items-center">
          <input type="number" v-model="data.value" />
        </div>
        <div class="tiggers">
          <button
            class="btn transparent-btn gray"
            style="align-items: flex-end"
            @click="data.value++"
          >
            <i class="bx bx-chevron-up general-icon"></i>
          </button>
          <button
            class="btn transparent-btn gray"
            style="align-items: flex-start"
            @click="data.value > 0 ? data.value-- : null"
          >
            <i class="bx bx-chevron-down general-icon"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="-text2 -gray -bold">Input desconocido :(</p>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, reactive, watch, ref, onMounted, onUnmounted } from "vue";

//Types
import { FormFieldType } from "@/shared/types/form-types";

//Services
import { executeDropdown } from "@/shared/services/dom-service";

export default defineComponent({
  name: "FormField",
  props: {
    field: null,
    sectionId: null,
    subgroupId: null,
  },
  setup(props, { emit }) {
    //Data
    const data = reactive<FormFieldType>(props.field);
    const sectionId = ref(props.sectionId);
    const subgroupId = ref(props.subgroupId);

    //Watch
    watch(data, (newValue: FormFieldType) => {
      emit("updateField", { newValue, sectionId, subgroupId });
    });

    //Methods
    const uploadFile = (e: any) => {
      var files = e.target.files;
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        data.value = files[0].name;
        data.file = reader.result;
      });
      reader.readAsDataURL(files[0]);
    };

    //Lifecycle Hooks

    onMounted(() => {
      if (data.type === "dropdown") {
        window.addEventListener("scroll", () => {
          executeDropdown(false, `${data.key}-dropdown`);
        });
      }
    });

    onUnmounted(() => {
      if (data.type === "dropdown") {
        window.removeEventListener("scroll", () => {
          executeDropdown(false, `${data.key}-dropdown`);
        });
      }
    });

    return {
      //Data
      data,
      //Methods
      executeDropdown,
      uploadFile,
    };
  },
});
</script>
