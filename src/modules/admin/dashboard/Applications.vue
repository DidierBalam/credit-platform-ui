<template>
  <div class="applications">
    <div>
      <p class="-text1 -extra-bold">Solicitudes</p>
      <p class="-text3 -light-gray -bold">Administra solicitudes</p>
    </div>
    <!-- Application items -->
    <div class="-mt2">
      <div class="application" v-for="item of applications" :key="item.id">
        <button class="key general-btn -flex-left -p1">
          <p class="-text2 -extra-bold -black">{{ item.applicationId }}</p>
        </button>
        <!-- Date -->
        <div class="date -flex -items-center">
          <p
            class="-text3 -extra-bold"
            :class="determineIsNew(item.create) ? '-blue' : '-gray'"
          >
            {{ getLocalTime(item.create) }}
          </p>
          <i class="bx bxs-calendar-event -text2 -gray -mld5"></i>
        </div>
        <!-- //Date -->
        <div class="status">
          <div
            :class="{
              '-green-bg': item.status === ApplicationStatusOptions.ok,
              '-blue-bg': item.status === ApplicationStatusOptions.waiting,
              '-yellow-bg': item.status === ApplicationStatusOptions.rejected,
            }"
          >
            <p class="-text3 -white -extra-bold">
              {{ translateApplicationStatusName(item.status) }}
            </p>
          </div>
        </div>
        <div class="options -flex-end">
          <router-link class="link" :to="`/application/${item.applicationId}`">
            <button class="btn transparent-btn gray">
              <i class="bx bxs-show general-icon"></i>
              <p>Revisar</p>
            </button></router-link
          >
        </div>
      </div>
    </div>
    <!-- //Application items -->

    <div class="-mt1 -flex-end">
      <router-link to="/admin/applications" class="link"
        ><button class="btn transparent-btn purple">
          <p>Ver todo</p>
          <i class="bx bx-chevron-right general-icon"></i></button
      ></router-link>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

//Composables
import useApplication from "@/shared/composables/useApplication";

export default defineComponent({
  name: "Applications",
  setup() {
    const {
      applications,
      ApplicationStatusOptions,
      translateApplicationStatusName,
      getLocalTime,
      determineIsNew,
    } = useApplication();

    return {
      //Data
      applications,
      //Type
      ApplicationStatusOptions,
      //Methods
      translateApplicationStatusName,
      getLocalTime,
      determineIsNew,
    };
  },
});
</script>
