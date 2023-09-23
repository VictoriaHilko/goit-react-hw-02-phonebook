import { ContactForm } from "./ContactForm/ContactForm";
import { Contacts } from "./Contacts/Contacts";

const { Component } = require("react")

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: '',
    name: '',
    number: ''
  };

  saveContact = data => {
    this.setState(({ contacts }) =>
      contacts.some(contact => contact.name === data.name)
        ? alert(`${data.name} is already present in contacts list`)
        : { contacts: [...contacts, data] }
    );
  };


  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactForm onSubmit={this.saveContact} />
        <Contacts contacts={contacts} />
      </>
    );
  }
}