
 export const addMedicatie = (idmedicatie,naam,opmerking,tijdstippen,kinderen) => {
    return {
      type: 'ADD_MEDICATIE',
      payload: {
        
        iddieet,naam,opmerking,
        tijdstippen,
        kinderen
        
      }
    };
}
const int=(x) => Number.parseInt(x);
 //bij toevoegen van een tijdstip moet de id van dat tijdstip in tijdstippen toegevoegd worden
 const i = {idmedicatie: {id: "1", naam: "rila", opmerking: "oraal", tijdstippen:["1","3"]}}