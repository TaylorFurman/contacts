import deepcopy from 'deepcopy';

var initialState ={
    contact_list:[
        {name: ""},
        {email: ""},
        {phoneNumber: ""},
        {address: ""},
        {city: ""},
        {state: ""},
        {zipCode: ""}
    ]
}

function contact_reducer(state = initialState, action) {
    console.log(action);

    let new_state = deepcopy(state);
    //console.log(new_state);
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...new_state,
          contact_list: [...state.contact_list, { name: action.data.name, email: action.data.email }]
        };
        
      case "DELETE_CONTACT":
        let arr = state.contact_list;
        //let newContact_list = state.contact_list.splice(Number(action.id), 1);
        return {
          ...new_state,
          contact_list: arr,
        };
        
      default:
        return state;
    }
  }



export default contact_reducer;