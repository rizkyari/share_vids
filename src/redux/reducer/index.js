import produce from "immer";
export const initialState = {
  register: {
    user: false,
    email: false,
    password: false,
  },
  login: {
    input: false,
  },
  video: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "REGISTER":
        draft.register.user = action.user;
        draft.register.email = action.email;
        draft.register.password = action.password;
        break;
      case "LOGIN":
        draft.login.input = action.input;
        break;
      case "ADD_VIDEO":
        draft.isLoading = true;
        draft.isSuccess = false;
        break;
      case "ADD_VIDEO_SUCCESS":
        draft.isLoading = false;
        draft.isSuccess = true;
        draft.video.push(action.data.items[0]);
        break;
      case "ADD_VIDEO_ERROR":
        draft.isLoading = false;
        draft.isError = true;
        break;
      default:
        break;
    }
  });

export default userReducer;
