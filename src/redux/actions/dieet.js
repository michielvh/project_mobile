
 export const addDieet = (iddieet,naam,opmerking) => {
    return {
      type: 'ADD_DIEET',
      payload: {
        
        iddieet,naam,opmerking
        
      }
    };
}
const int=(x) => Number.parseInt(x);