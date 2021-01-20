import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts.js'

class App extends Component{
  constructor(){
    super();
    this.addContact = this.addContact.bind(this)
  }
  state = {
    contacts: [
      {
        name: "rahman",
        number: "565465465465"
      },
      {
        name:"elnur",
        number:"598821819"
      }
    ]
  }
  addContact(contact){
    let {contacts} = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    })
   
  }
  render(){
    return (
      <div className="App">
        <Contacts contacts ={this.state.contacts} addContact = {this.addContact}/>
      </div>
    );
  }
}

export default App;
