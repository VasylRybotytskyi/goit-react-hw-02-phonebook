import { ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button onClick={() => onDeleteContact(contact.id)}>delete</button>
        </ContactItem>
      ))}
    </ul>
  );
};
