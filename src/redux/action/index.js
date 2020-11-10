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
