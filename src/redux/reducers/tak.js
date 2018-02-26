const init = {
    takken : { byId: {}, allIds: []}
 }
 export default function reducer(state = init, action) {
    switch (action.type) {
        case 'ADD_TAK': 
        return {...state, takken:[ ...state.takken.byId, action.payload]};
        case 'ADD_TAKKEN': 
        return {...state, takken:[ ...state.takken, action.payload]};
       
        default:
            return state;
    }
}
