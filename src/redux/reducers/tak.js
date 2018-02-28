import { List, Map } from 'immutable';

const init = {
    takken : { byId: {}, allIds: []}
 }
 export default function reducer(state = init, action) {
    switch (action.type) {
        case 'ADD_TAK': 
        return {...state, takken:[ ...state.takken.byId, action.payload]};
        case 'ADD_TAKKEN': 
        return {...state, takken:[ /* ...state.takken, */ action.payload]};
        case 'ADD_KIDS_TO_TAK': 
        
       
        return {  ...state,takken:[  ...state/* .takken */, {idtak:action.payload.idtak.idtak,naam:action.payload.idtak.naam,omschrijving:action.payload.idtak.omschrijving,kinderen: action.payload.kidsIds}]};
        
/* 
        return state.takken.map(t => {
            if(t.get('idtak') === action.payload.idtak) {
                return t.update('kinderen', action.payload.kinderen);
              } 
              return t;
            }); */

        default:
            return state;
    }
}
