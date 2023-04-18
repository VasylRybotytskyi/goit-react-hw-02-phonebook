import { nanoid } from 'nanoid';
import { ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
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
