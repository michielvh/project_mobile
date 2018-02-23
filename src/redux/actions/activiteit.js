
 export const addActiviteit = (idactiviteit,begindatum,einddatum) => {
    return {
      type: 'ADD_ACTIVITEIT',
      payload: {
        
        idactiviteit,
        //Nakijken of dit nu moet of bij het opvragen
        begindatum:date(begindatum),
        einddatum:date(einddatum)
        
      }
    };
}
const date=(x) => Date.parse(x);
