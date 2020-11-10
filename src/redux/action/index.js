export const postRegister = (user, email, password) => ({
  type: "REGISTER",
  user,
  email,
  password,
});

export const postLogin = (input) => ({
  type: "LOGIN",
  input,
});

export const postVideo = (video) => ({
  type: "ADD_VIDEO",
  video,
});

export const postVideoSuccess= (data) =>({
  type: "ADD_VIDEO_SUCCESS",
  data
});

export const postVideoError = (error) => ({
  type: "ADD_VIDEO_ERROR",
  error,
})