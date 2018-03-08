const init = {
    sliders : []
   

 }
 export default function reducer(state = init, action) {
    switch (action.type) {
        case 'ADD_SLIDER': 
        var x={...state.sliders};
        var y=x[action.payload.idkind] ? x[action.payload.idkind] :'add';
        if(y==='add'){
            return {...state, sliders:{...state.sliders, [action.payload.idkind] : action.payload.val} };

        }else{
            x[action.payload.idkind]=action.payload.val;
            return {...state, sliders:x};
        }


       // var x=action.payload.idkind;
          //  var idkind=action.payload.idkind;
        //return {...state, sliders:{...state.sliders, [action.payload.idkind] : {'val':action.payload.val}} };
    //    return {...state, sliders:{...state.sliders, [action.payload.idkind] : action.payload.val} };
       
        default:
            return state;
    }
}
