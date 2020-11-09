export const postRegister = (user,email,password) => ({
    type: 'REGISTER',
    user,
    email,
    password
});

export const postLogin = () => ({
    type : 'LOGIN',
});