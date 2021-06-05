
//Libraries
import { ref } from "vue";
import router from "@/core/router";

//Store
import { useStore } from "@/store/index";

//Types
import { AuthActionsOptions } from "@/shared/types/enum/store-enum";
import { StatusResponseType } from "@/shared/types/http-response-types";
import { UserType } from "@/shared/types/user-type";


export default function () {
    //Data
    const store = useStore();
 
    const isLoading = ref<boolean>(false);
    const isPasswordVisible = ref<boolean>(false);
    
    const user = ref<UserType>({ userId: 0 });
    const registerResponse = ref<StatusResponseType>({
        status: true,
        message: "",
    });

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