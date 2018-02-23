const init = {
   /*  users : { 
        byId: {1 : 
            {  login : 1,
              naam : 5,
                 voornaam : 22,
              kinderen:[],
              takken:[],
               voogden:[],
               groepen:[]
         },}, allIds: []} */
 }

 export default function reducer(state = init, action) {
    switch (action.type) {
        case 'ADD_USER': 
        return {...state, users: action.payload};
       
        default:
            return state;
    }
}