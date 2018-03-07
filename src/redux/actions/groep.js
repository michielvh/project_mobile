
 export const addGroep = (idgroep,naam,plaats,postcode,straat,huisnr,bus,email,link,takkenids) => {
    return {
      type: 'ADD_GROEP',
      payload: {
        
        idgroep,
        naam,
        plaats,
        postcode,
        straat,
        huisnr,
        bus,
        email,
        link,
        takkenids
        
      }
    };
  }
    export const addGroepen = (groepen) => {
      return {
        type: 'ADD_GROEPEN',
        payload: {
          
         groepen
          
        }
      };
}