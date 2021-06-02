type ApplicationRegisterResponseType = {
  applicationId: number;
  status: boolean;
  message?: string;
};

type UserRegisterResponseType = {
  userId: number;
  status: boolean;
  message?: string;
};

type StatusResponseType = {
  status: boolean;
  message?: string;
};

export {
  ApplicationRegisterResponseType,
  UserRegisterResponseType,
  StatusResponseType,
};
