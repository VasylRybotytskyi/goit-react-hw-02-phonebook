import { nanoid } from 'nanoid';
import { ContactItem } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <>
        <p>Find contacts by name</p>
        {/* <input type="text" value={filter} onChange={handleFilterChange} /> */}
      </>
      <ul>
        {contacts.map(contact => (
          <ContactItem key={nanoid()}>
            <p>{contact.name}</p>
            <button onClick={() => onDeleteContact(contact.id)}>delete</button>
          </ContactItem>
        ))}
      </ul>
    </>
  );
};
