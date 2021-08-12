import deepcopy from 'deepcopy';

var initialState ={
    contact_list:[
        {name: "fdsa"},
        {email: "fdsa"},
        {phoneNumber: "fdsa"},
        {address: "fdsa"},
        {city: "fdsa"},
        {state: "fdsa"},
        {zipCode: "fdsa"}
    ]
}

function contact_reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...state,
          contact_list: [...state.contact_list, { name: action.data.contact_list }],
        };
      case "DELETE_CONTACT":
        let arr = state.contact_list;
        let newContact_list = state.contact_list.splice(Number(action.id), 1);
        return {
          ...state,
          contact_list: arr,
        };
      default:
        return state;
    }
  }



// function contact_reducer(state, action){
//     if (state === undefined){
//         return initialState;
//     }

//     let new_state = deepcopy(state);
//     if (action.type === 'ADD_CONTACT'){
//         new_state.contact_list[action.data.index].data_input = !state.contact_list[action.data.index].data_input;
//     }else if (action.type === 'DELETE_CONTACT'){
//         new_state.contact_list.pop({name: action.data.name, data_input: false});
//     }
//     return new_state;
// }

export default contact_reducer;