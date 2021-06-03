
//Libraries
import { ref } from "vue";
import router from "@/core/router";

//Store
import { useStore } from "@/store/index";

//Types
import { UserType } from "@/shared/types/user-type";
import { AuthActionsOptions } from "@/shared/types/enum/store-enum";
import { StatusResponseType } from "@/shared/types/http-response-types";


export default function () {
    //Data
    const store = useStore();

    const user = ref<UserType>({ userId: 0 });

    const isLoading = ref<boolean>(false);

    const registerResponse = ref<StatusResponseType>({
        status: true,
        message: "",
    });


    const isPasswordVisible = ref<boolean>(false);

    //Methods

    const signin = async () => {
        if (user.value.username && user.value.password) {
            isLoading.value = true;
            setTimeout(() => {
                store
                    .dispatch(AuthActionsOptions.createSession, user.value)
                    .then((response: StatusResponseType) => {
                        setTimeout(() => {
                            if (response.status) {
                                store.getters.isAdmin ? router.push("/admin") : router.push("/");
                            } else showError(response.message);
                        }, 500);
                    })
                    .catch((err) => showError(err));
            }, 1000);
        }
    };

    const showError = (err: string) => {
        isLoading.value = false;
        registerResponse.value.status = false;
        registerResponse.value.message = err;
    };

    //Lifecycle Hooks

    return {
        //Data
        store,
        user,
        isLoading,
        registerResponse,
        isPasswordVisible,
        //Methods
        signin,
        showError
    };

}