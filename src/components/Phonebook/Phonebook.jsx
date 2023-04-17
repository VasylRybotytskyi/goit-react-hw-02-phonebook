import { Contacts } from 'components/Contacts/Contacts';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  handleAddContact = () => {
    const { contacts, name } = this.state;
    const newContact = { id: nanoid(), name };
    this.setState({ contacts: [...contacts, newContact], name: '' });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button type="button" onClick={this.handleAddContact}>
            Add contact
          </button>
        </>
        <Contacts contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
