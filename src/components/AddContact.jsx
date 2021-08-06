import React, {Component} from 'react';

class MyForm extends Component{
    constructor(){
        super();
        this.state={name: '', color: 'red'};
    }
    update_state (event, key){
        this.setState({[key]: event.target.value});
    }
    handleSubmit(event){
        console.log('submitted: ' + this.state.name);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>Your Name?</label>
                <input 
                type="text"
                value={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
                <br/>
                <select value={this.state.color}
                onChange={event => this.update_state(event, 'color')}>
                    <option value='red'>Red</option>
                    <option value='blue'>Blue</option>
                </select>
                <br/>
                <button type="submit">Submit</button>





            </form>
        )
    }
}

// function AddContact(props){
//     return(
//         <div className="add-contact">
//             <form>
//             <label for="name">Name:</label><br>
//             <input type="text" value="name..."><br>
//             <label for="lname">Last name:</label><br>
//             <input type="text" id="lname" name="lname" value="Doe"><br><br>
//             <input type="submit" value="Submit"></input>
//             </form>
//         </div>
//     )
// }
// name, e-mail, phone number, address, city, state, and zip code

export default MyForm;