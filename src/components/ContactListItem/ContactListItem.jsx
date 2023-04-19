import { ContactItemWrapper, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(contact => (
        <ContactItemWrapper key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            delete
          </DeleteButton>
        </ContactItemWrapper>
      ))}
    </>
  );
};
