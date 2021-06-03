import { ActionContext } from 'vuex';
import { ApplicationType } from './application-types';
import { ModalConfig } from './config/modal-config';
import {
  ApplicationActionOptions,
  ApplicationMutationOptions,
  AuthActionsOptions,
  AuthMutationOptions,
  ModalMutationOptions,
  UserActionOptions,
  UserMutationOptions,
} from './enum/store-enum';
import { UserType } from './user-type';
import {
  ApplicationRegisterResponseType,
  StatusResponseType,
  UserRegisterResponseType,
} from '@/shared/types/http-response-types';
import { MetricCountType } from './metric-count-type';

//State
type ModalStateType = {
  isModalActive: boolean;
  config: ModalConfig;
};

type AuthStateType = {
  userData: UserType | undefined;
  token: string;
};

type ApplicationStateType = {
  applications: ApplicationType[];
};

type UserStateType = {
  users: UserType[];
};

//Getters
type AuthGetterType = {
  isAuth(state: AuthStateType): boolean;
  isAdmin(state: AuthStateType): boolean;
};

type ApplicationGetterType = {
  applicationData(state: ApplicationStateType): ApplicationType[] | undefined;
  getApprovedCount(state: ApplicationStateType): MetricCountType | undefined;
  getRejectedCount(state: ApplicationStateType): MetricCountType | undefined;
  getWarningCount(state: ApplicationStateType): MetricCountType | undefined;
};

type UserGetterType = {
  userData(state: UserStateType): UserType[] | undefined;
  getUserCount(state: UserStateType): number;
  getActiveCount(state: UserStateType): MetricCountType | undefined;
  getInactiveCount(state: UserStateType): MetricCountType | undefined;
};

//Mutation
type ModalMutationType = {
  [ModalMutationOptions.activateModal](
    state: ModalStateType,
    config: ModalConfig
  ): void;
  [ModalMutationOptions.closeModal](state: ModalStateType): void;
};

type ApplicationMutationType = {
  [ApplicationMutationOptions.addApplication](
    state: ApplicationStateType,
    value: ApplicationType
  ): void;
  [ApplicationMutationOptions.setStatus](
    state: ApplicationStateType,
    values: { applicationId: number; status: string }
  ): void;
};

type UserMutationType = {
  [UserMutationOptions.setStatus](
    state: UserStateType,
    values: { userId: number; isActive: boolean }
  ): void;
  [UserMutationOptions.addUser](state: UserStateType, user: UserType): void;
  [UserMutationOptions.updateUser](state: UserStateType, user: UserType): void;
};

type AuthMutationType = {
  [AuthMutationOptions.createSession](
    state: AuthStateType,
    user: UserType,
  ): void;
  [AuthMutationOptions.deleteSession](
    state: AuthStateType
  ): void;
}

//Actions
type ApplicationActionType = {
  [ApplicationActionOptions.registerApplication](
    { commit }: ApplicationAugmentedActionContext,
    application: ApplicationType
  ): Promise<ApplicationRegisterResponseType>;

  [ApplicationActionOptions.rejectApplication](
    { commit }: ApplicationAugmentedActionContext,
    id: number
  ): Promise<boolean>;

  [ApplicationActionOptions.approveApplication](
    { commit }: ApplicationAugmentedActionContext,
    id: number
  ): Promise<boolean>;
};

type UserActionType = {
  [UserActionOptions.activeUser](
    { commit }: UserAugmentedActionContext,
    id: number
  ): Promise<boolean>;
  [UserActionOptions.inactiveUser](
    { commit }: UserAugmentedActionContext,
    id: number
  ): Promise<boolean>;
  [UserActionOptions.registerUser](
    { commit }: UserAugmentedActionContext,
    user: UserType
  ): Promise<UserRegisterResponseType>;
  [UserActionOptions.updateUser](
    { commit }: UserAugmentedActionContext,
    user: UserType
  ): Promise<StatusResponseType>;
};

type AuthActionType = {
  [AuthActionsOptions.createSession](
    { commit }: AthAugmentedActionContext,
    user: UserType
  ): Promise<StatusResponseType>;
  [AuthActionsOptions.deleteSession](
    { commit }: AthAugmentedActionContext): Promise<StatusResponseType>
}

//Action Arguments
type ApplicationAugmentedActionContext = {
  commit<K extends keyof ApplicationMutationType>(
    key: K,
    payload: Parameters<ApplicationMutationType[K]>[1]
  ): ReturnType<ApplicationMutationType[K]>;
} & Omit<ActionContext<ApplicationStateType, RootState>, 'commit'>;

type UserAugmentedActionContext = {
  commit<K extends keyof UserMutationType>(
    key: K,
    payload: Parameters<UserMutationType[K]>[1]
  ): ReturnType<UserMutationType[K]>;
} & Omit<ActionContext<UserStateType, RootState>, 'commit'>;

type AthAugmentedActionContext = {
  commit<K extends keyof AuthMutationType>(
    key: K,
    payload: Parameters<AuthMutationType[K]>[1]
  ): ReturnType<AuthMutationType[K]>;
} & Omit<ActionContext<AuthStateType, RootState>, 'commit'>;

//Root
type RootState = {
  ModalStore: ModalStateType;
  AuthStore: AuthStateType;
  ApplicationStore: ApplicationStateType;
  UserStore: UserStateType;
};

export {
  //State
  ModalStateType,
  AuthStateType,
  ApplicationStateType,
  UserStateType,
  //Getters
  AuthGetterType,
  ApplicationGetterType,
  UserGetterType,
  //Mutations
  ModalMutationType,
  ApplicationMutationType,
  UserMutationType,
  AuthMutationType,
  //Actions
  ApplicationActionType,
  UserActionType,
  AuthActionType,
  //Root
  RootState,
};
