import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWraper } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListWraper>
      <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ContactListWraper>
  );
};
