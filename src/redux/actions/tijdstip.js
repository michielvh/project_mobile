
 export const addTijdstip = (idtijdstip,dosis,tijdstip) => {
    return {
      type: 'ADD_TIJDSTIP',
      payload: {
        
        idtijdstip,
        dosis,
        //Nakijken of dit nu moet of bij het opvragen
        tijdstip:date(tijdstip)
        
      }
    };
}
const date=(x) => Date.parse(x);
const i = {idtijdstip: {id: "1", dosis: "3", tijdstip: "2017:10:10 00:00:00"}}