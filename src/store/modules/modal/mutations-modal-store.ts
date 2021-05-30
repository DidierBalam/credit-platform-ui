import { MutationTree } from "vuex";
import { ModalStateType, ModalMutationType } from "../../../shared/types/store-types";
import { ModalMutationOptions } from "../../../shared/types/enum/store-enum";
import { ModalConfig } from "@/shared/types/config/modal-config";

export const mutations: MutationTree<ModalStateType> & ModalMutationType = {
    [ModalMutationOptions.activateModal](state, config: ModalConfig) {
        state.isModalActive = true;
        state.config = config;
    },
    [ModalMutationOptions.closeModal](state) {
        state.isModalActive = false;
    }
}