//Mutations
enum ModalMutationOptions {
  activateModal = 'ACTIVATE_MODAL',
  closeModal = 'CLOSE_MODAL',
}

enum ApplicationMutationOptions {
  addApplication = 'ADD_APPLICATION',
  setStatus = 'SET_APPLICATION_STATUS',
}

enum UserMutationOptions {
  setStatus = 'SET_USER_STATUS',
  addUser = 'ADD_USER',
  updateUser = 'UPDATE_USER',
}

enum AuthMutationOptions {
  createSession = 'CREATE_SESSION',
  deleteSession = 'DELETE_SESSION'
}

//Actions

enum ApplicationActionOptions {
  registerApplication = 'REGISTER_APPLICATION',
  rejectApplication = 'REJECT_APPLICATION',
  approveApplication = 'APPROVE_APPLICATION',
}

enum UserActionOptions {
  activeUser = 'ACTIVE_USER',
  inactiveUser = 'INACTIVE_USER',
  registerUser = 'REGISTER_USER',
  updateUser = 'UPDATE_USER',
}

enum AuthActionsOptions {
  createSession = 'CREATE_SESSION',
  deleteSession = 'DELETE_SESSION'
}

export {
  //Mutations
  ModalMutationOptions,
  ApplicationMutationOptions,
  UserMutationOptions,
  AuthMutationOptions,
  //Actions
  ApplicationActionOptions,
  UserActionOptions,
  AuthActionsOptions
};
