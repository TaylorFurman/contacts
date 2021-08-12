import deepcopy from 'deepcopy';

var initialState ={
    contact_list:[
        {name: "", data_input: false},
        {email: "", data_input: false},
        {phoneNumber: "", data_input: false},
        {address: "", data_input: false},
        {city: "", data_input: false},
        {state: "", data_input: false},
        {zipCode: "", data_input: false}
    ]
}

function contact_reducer(state, action){
    if (state === undefined){
        return initialState;
    }
    console.log(action);
    let new_state = deepcopy(state);
    if (action.type === 'ADD_CONTACT'){
        new_state.contact_list[action.data_input.index].data_input = !state.contact_list[action.data_input.index].in_cart;
    }else if (action.type === 'DELETE_CONTACT'){
        new_state.contact_list.pop({name: action.data_input.name, data_input: false});
    }
    return new_state;
}

export default contact_reducer;