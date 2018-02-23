
 export const addZiekte = (idziekte,naam,symptomen,behandeling,kinderen) => {
    return {
      type: 'ADD_ZIEKTE',
      payload: {
        
        idziekte,naam,symptomen,behandeling,kinderen
        
      }
    };
}
const int=(x) => Number.parseInt(x);