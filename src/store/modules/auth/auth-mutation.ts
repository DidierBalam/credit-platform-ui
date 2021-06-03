import { MutationTree } from "vuex";
import { AuthStateType, AuthMutationType } from "../../../shared/types/store-types";
import { AuthMutationOptions } from "../../../shared/types/enum/store-enum";
import { UserType } from "@/shared/types/user-type";
import { getToken } from "@/core/services/token-service";

export const mutations: MutationTree<AuthStateType> & AuthMutationType = {
    [AuthMutationOptions.createSession](state, user: UserType) {
        state.userData = user;
        state.token = getToken()
    },
    [AuthMutationOptions.deleteSession](state) {
        state.userData = undefined;
        state.token = '';
    }
}