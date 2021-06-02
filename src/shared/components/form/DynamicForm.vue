<template>
  <div class="dynamic-form">
    <div v-for="section of dataLoaded.data" :key="section.sectionId" class="-mb4">
      <p class="-text1 -bold -black">{{ section.sectionName }}</p>
      <!-- Section Fields -->
      <div class="-mt2 fields" v-if="section.fields">
        <FormField
          v-for="field of section.fields"
          :key="field.fieldId"
          :field="field"
          :sectionId="section.sectionId"
          @updateField="update"
        />
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
              :sectionId="section.sectionId"
              :subgroupId="subgroup.subgroupId"
              @updateField="update"
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
  emits: ["update"],
  setup(props, { emit }) {
    //Data
    const dataLoaded = ref<FormType>(props.form);

    //Methods
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const update = (value: any) => {
      if (value.sectionId.value && !value.subgroupId.value) {
        for (let x = 0; x < dataLoaded.value.data.length; x++) {
          for (let y = 0; y < dataLoaded.value.data[x].fields.length; y++) {
            if (
              dataLoaded.value.data[x].sectionId == value.sectionId.value &&
              dataLoaded.value.data[x].fields[y].fieldId == value.newValue.fieldId
            ) {
              dataLoaded.value.data[x].fields[y] = value.newValue;
              emit("update", dataLoaded);
              break;
            }
          }
          break;
        }
      } else if (value.sectionId.value && value.subgroupId.value) {
        for (let x = 0; x < dataLoaded.value.data.length; x++) {
          for (let y = 0; y < dataLoaded.value.data[x].subgroups.length; y++) {
            for (
              let z = 0;
              z < dataLoaded.value.data[x].subgroups[y].fields.length;
              z++
            ) {
              if (
                dataLoaded.value.data[x].sectionId == value.sectionId.value &&
                dataLoaded.value.data[x].subgroups[y].subgroupId ==
                  value.subgroupId.value &&
                dataLoaded.value.data[x].subgroups[y].fields[z].fieldId ==
                  value.newValue.fieldId
              ) {
                dataLoaded.value.data[x].subgroups[y].fields[z] = value.newValue;
                emit("update", dataLoaded);
                break;
              }
            }
          }
        }
      } else console.log("error");
    };

    return {
      //Data
      dataLoaded,
      //Methos
      update,
    };
  },
});
</script>
