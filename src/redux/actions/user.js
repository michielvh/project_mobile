

 export const addUser = (login,role,password,naam,voornaam,tel,groepen,voogden,kinderen,takken) => {
    return {
      type: 'ADD_USER',
      payload: {
        
        login,
        role,
        password,
        naam,
        voornaam,
        tel,    //volgende collecties zijn de ID's
        groepen, //groepen miss uit takken halen
        voogden,
        kinderen,
        takken
        
      }
    };
}