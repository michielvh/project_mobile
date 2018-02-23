
 export const addKind = (idkind,naam,voornaam,geboortedatum,zwemmen,sport,dafi,opmerking,meldingen,takken,medicaties,dieeten,ziektes,voogden) => {
    return {
      type: 'ADD_KIND',
      payload: {
        
        idkind,
        naam,
        voornaam,
        geboortedatum:date(geboortedatum),
        zwemmen,
        sport,
        dafi,
        opmerking,
        meldingen,
        takken,
        medicaties,
        dieeten,
        ziektes,
        voogden
        
      }
    };
}
const date=(x) => Date.parse(x);
