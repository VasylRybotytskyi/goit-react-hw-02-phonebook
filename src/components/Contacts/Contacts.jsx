import { nanoid } from 'nanoid';

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
          <li key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDeleteContact(contact.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
