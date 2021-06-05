<template>
  <div class="dynamic-form" v-if="dataLoaded">
    <div v-for="section of dataLoaded.data" :key="section.sectionId" class="-mb4 -mt3">
      <p class="-text1 -bold -black">{{ section.sectionName }}</p>
      <!-- Section Fields -->
      <div class="-mt2 fields" v-if="section.fields">
        <ReviewerField
          v-for="field of section.fields"
          :field="field"
          :key="field.fieldId"
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
            <ReviewerField
              v-for="field of subgroup.fields"
              :field="field"
              :key="field.fieldId"
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
import { ApplicationType } from "@/shared/types/application-types";

//Components
import ReviewerField from "./ReviewerField.vue";

export default defineComponent({
  name: "DynamicForm",
  components: {
    ReviewerField,
  },
  props: {
    application: null,
  },
  emits: ["update"],
  setup(props) {
    //Data
    const dataLoaded = ref<ApplicationType>(props.application);

    return {
      //Data
      dataLoaded,
    };
  },
});
</script>
