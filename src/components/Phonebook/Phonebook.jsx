import { Contacts } from '../Contacts/Contacts';
import { nanoid } from 'nanoid';

export const Phonebook = ({ contacts, onAddContact, onDeleteContact }) => {
  const handleAddContact = () => {
    const { name, number } = contacts;
    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
  };

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
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="button" onClick={handleAddContact}>
          Add contact
        </button>
      </>
      <Contacts contacts={contacts} onDeleteContact={onDeleteContact} />
    </>
  );
};
