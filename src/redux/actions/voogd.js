
 export const addVoogd = (idvoogd,naam,voornaam,plaats,postcode,straat,huisnr,tel,bus,kinderen) => {
    return {
      type: 'ADD_VOOGD',
      payload: {
        
        idvoogd,
        naam,
        voornaam,
        plaats,
        postcode,
        straat,
        huisnr:int(huisnr),
        tel,
        bus,
        kinderen
        
      }
    };
}
const int=(x) => Number.parseInt(x);