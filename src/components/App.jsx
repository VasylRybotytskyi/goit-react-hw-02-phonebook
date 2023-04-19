import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  //Функція фільтрації контактів
  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };
  // Функція видалення контактів
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  //Функція яка приймає data із ContactForm і записує в state.contacts.
  formSubmitHandler = data => {
    const newContact = { id: nanoid(), ...data };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter onChange={this.filterContacts} value={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
