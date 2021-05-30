import { ModalConfig } from "./config/modal-config";
import { ModalMutationOptions } from "./enum/store-enum";

//State
type ModalStateType = {
    isModalActive: boolean,
    config: ModalConfig
}

//Mutation
type ModalMutationType = {
    [ModalMutationOptions.activateModal](state: ModalStateType, config: ModalConfig): void
    [ModalMutationOptions.closeModal](state: ModalStateType): void
}

//Root
type RootState = {
    ModalStore: ModalStateType;
};

export {
    ModalStateType,
    ModalMutationType,
    RootState
}

