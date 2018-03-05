export const login = (username, password, token) => {
    return {
        type: 'LOGIN',
        username: username,
        password: password,
        token: token
    };
};
 
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};