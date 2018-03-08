const defaultState = {
    isLoggedIn: false,
    username: '',
    password: '',
    token: ''
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return Object.assign({}, state, { 
                isLoggedIn: true,
                username: action.username,
                password: action.password,
                token: action.token
            });
        case 'LOGOUT':
            return Object.assign({}, state, { 
                isLoggedIn: false,
                username: '',
                password: ''
            });
            case 'RECEIVE_TOKEN':
            return Object.assign({}, state, { 
                isLoggedIn: true,
                username: action.payload.username,
                password: action.payload.password,
                token: action.payload.token
            });

        default:
            return state;
    }
}
