import { nanoid } from 'nanoid';
export const Contacts = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={nanoid()}>
            <p>{contact.name}</p>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
