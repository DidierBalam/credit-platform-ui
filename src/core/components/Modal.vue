<template>
  <div class="modal -primary-font" v-if="isActive" :class="size">
    <div class="modal-bg" @click="closeModal()"></div>
    <div class="modal-content">
      <div class="-flex-between -items-center">
        <p class="-text2 -bold -gray">{{ title }}</p>
        <button
          class="btn transparent-btn gray circle-btn"
          @click="closeModal()"
          style="margin-right: -2em"
        >
          <i class="bx bx-x general-icon"></i>
        </button>
      </div>
      <Suspense>
        <template #default>
          <keep-alive>
            <component :is="useComponent" :elementId="elementId" />
          </keep-alive>
        </template>
        <template #fallback>
          <div class="-flex-center -items-center" style="height: 17.2em">
            <LoadingBar :title="'Cargando'" style="margin-top: -2em" />
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { computed, defineAsyncComponent, defineComponent } from "vue";

//Store
import { useStore } from "../../store/index";

//Types
import { ModalMutationOptions } from "../../shared/types/enum/store-enum";

//Components
import LoadingBar from "../../shared/components/LoadingBar.vue";

export default defineComponent({
  name: "Modal",
  components: {
    LoadingBar,
  },
  setup() {
    //Data
    const store = useStore();

    //Computed
    const isActive = computed(() => {
      return store.state.ModalStore.isModalActive;
    });

    const size = computed(() => {
      return store.state.ModalStore.config.size;
    });

    const title = computed(() => {
      return store.state.ModalStore.config.title;
    });

    const useComponent = computed(() => {
      return defineAsyncComponent(store.state.ModalStore.config.component);
    });

    const elementId = computed(() => {
      return store.state.ModalStore.config.elementId;
    });

    //Methods
    const closeModal = () => {
      store.commit(ModalMutationOptions.closeModal);
    };

    return {
      //Computed
      isActive,
      size,
      title,
      useComponent,
      elementId,
      //Methods
      closeModal,
    };
  },
});
</script>
