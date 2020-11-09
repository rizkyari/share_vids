import produce from "immer";
export const initialState = {
  register: {
    user: false,
    email: false,
    password: false,
  },
  login: {
    user: false,
    email: false,
    password: false,
  },
};

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "REGISTER":
        draft.register.user = action.user;
        draft.register.email = action.email;
        draft.register.password = action.password;
        break;
      default:
        break;
    }
  });

export default userReducer;
