const init = {
    kinderen : { byId: {}, allIds: []}
 }
 export default function reducer(state = init, action) {
    switch (action.type) {
        case 'ADD_KIND': 
        
            
        return {...state, kinderen:{ byId: [ ...state.kinderen.byId, action.payload]}};
        case 'ADD_KINDEREN': 
        return {...state, kinderen:[action.payload]};
       
        default:
            return state;
    }
}
