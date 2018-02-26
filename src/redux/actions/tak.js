
 export const addTak = (idtak,naam,omschrijving,kinderen) => {
    return {
      type: 'ADD_TAK',
      payload: {
        
        idtak,
        naam,
        omschrijving,
        kinderen
        
      }
    };

  }
    export const addTakken = (takken) => {
      return {
        type: 'ADD_TAKKEN',
        payload: {
          
         takken
          
        }
      };

    }