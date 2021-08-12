import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions.js'

// name, e-mail, phone number, address, city, state, and zip code
class AddContact extends Component{
    constructor(){
        super();
        this.state={name: '', email: '', phoneNumber:'',address:'',city:'', state:'', zipCode:''};
    }
    update_state (event, key){
        this.setState({[key]: event.target.value});
    }
    handleSubmit(event){
        console.log(event);
        event.preventDefault();
        if(!this.state.name){
            alert("Input something");
        }else{
            this.props.addContact({name: this.state.name, 
                email: this.state.email,
                phoneNumber: this.state.phoneNumber, 
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipCode: this.state.zipCode})
        }
        
        console.log('submitted: ' + this.state.name + 
        this.state.email + 
        this.state.phoneNumber + 
        this.state.address + 
        this.state.city + 
        this.state.state + 
        this.state.zipCode);
        
    }
    render(){
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>Name: </label>
                <input 
                type="text"
                value={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
                <br/>
                <label>Email: </label>
                <input 
                type="text"
                value={this.state.email}
                onChange={event => this.update_state(event, 'email')}/>
                <br/>
                <label>Phone Number: </label>
                <input 
                type="text"
                value={this.state.phoneNumber}
                onChange={event => this.update_state(event, 'phoneNumber')}/>
                <br/>
                <label>Street Address: </label>
                <input 
                type="text"
                value={this.state.address}
                onChange={event => this.update_state(event, 'address')}/>
                <br/>
                <label>City: </label>
                <input 
                type="text"
                value={this.state.city}
                onChange={event => this.update_state(event, 'city')}/>
                <br/>
                <label>State: </label>
                <input 
                type="text"
                value={this.state.state}
                onChange={event => this.update_state(event, 'state')}/>
                <br/>
                <label>Zip Code: </label>
                <input 
                type="text"
                value={this.state.zipCode}
                onChange={event => this.update_state(event, 'zipCode')}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return{
        addContact: function (data){
            dispatch(addContact(data));
        }
    }
}

const connectedAddingContact = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContact);


export default connectedAddingContact;