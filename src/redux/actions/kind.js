
 export const addKind = (idkind,naam,voornaam,geboortedatum,zwemmen,sport,dafi,opmerking,meldingen,takken,medicaties,dieeten,ziektes,voogden) => {
    return {
      type: 'ADD_KIND',
      payload: {
        
        idkind,
        naam,
        voornaam,
        geboortedatum:'lala'/* date(geboortedatum) */,
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

export const addKinderen = (kinderen) => {
  return {
    type: 'ADD_KINDEREN',
    payload: {
      kinderen
    }
  }
}
const date=(x) => Date.parse(x);
