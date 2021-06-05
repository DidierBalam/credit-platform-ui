<template>
  <div class="dynamic-form">
    <div v-for="section of dataLoaded.data" :key="section.sectionId" class="-mb4">
      <p class="-text1 -bold -black">{{ section.sectionName }}</p>
      <!-- Section Fields -->
      <div class="-mt2 fields" v-if="section.fields">
        <FormField v-for="field of section.fields" :key="field.fieldId" :field="field" />
      </div>
      <!-- //Section Fields -->

      <!-- SubGroup -->
      <div class="-mt3" v-if="section.subgroups">
        <div v-for="subgroup of section.subgroups" :key="subgroup.subgroupId">
          <p class="-text2 -extra-bold -black">{{ subgroup.name }}</p>
          <p class="-text2 -bold -gray -mtd3">{{ subgroup.description }}</p>
          <!-- Subgroup Fields -->
          <div class="-mt2 fields" v-if="subgroup.fields">
            <FormField
              v-for="field of subgroup.fields"
              :key="field.fieldId"
              :field="field"
            />
          </div>

          <!-- //Subgroup Fields -->
        </div>
      </div>
      <!-- //SubGroup -->
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Types
import { FormType } from "@/shared/types/form-types";

//Components
import FormField from "./FormField.vue";

export default defineComponent({
  name: "DynamicForm",
  components: {
    FormField,
  },
  props: {
    form: null,
  },
  setup(props) {
    //Data
    const dataLoaded = ref<FormType>(props.form);

    return {
      //Data
      dataLoaded,
      //Methos
      // update,
    };
  },
});
</script>
