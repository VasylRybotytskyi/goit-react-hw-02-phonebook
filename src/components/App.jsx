import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { GlobalStyle } from './GlobalStyle';

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

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };

  static defaultProps = {
    contacts: [],
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
    const { name } = data;
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), ...data };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedContact = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedContact)
    );

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter onChange={this.filterContacts} value={filter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
