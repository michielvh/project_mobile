
 export const addGroep = (idgroep,naam,plaats,postcode,straat,huisnr,bus,email,link,takken) => {
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
        takken
        
      }
    };
}