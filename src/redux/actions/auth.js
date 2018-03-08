import axios from 'axios';

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

const loadCounts = async () => {
    const response = await fetch('http://example.com/counts');
    const counts = await response.json();
    return {
    type: 'RECEIVE_COUNTS',
    payload: {
    news: json
    }
    };
};




export const fixTokenAction =  (username, password) => {
    var x = async () => {
    var token='';
 var response= await axios.post('https://test-dot-medicamp-so.appspot.com/api/auth/login', {
    login: username,
    password: password
}); 
token=await response.headers.authorization;
/* .then((response)=>{
  // x= response.headers.authorization;
  token= response.headers.authorization
});  */
   
   
   
   /*  const response = await fetch('https://test-dot-medicamp-so.appspot.com/api/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: 1,
          password: 1
        }),
      }); */
   // const json = await response.json();
    return {
    type: 'RECEIVE_TOKEN',
    payload: {
        username: username,
        password: password,
    token :  response.headers.authorization 
    }
    };
};
};


/* fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
}); */