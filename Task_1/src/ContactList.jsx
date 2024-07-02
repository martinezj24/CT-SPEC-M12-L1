import React, { useContext } from 'react';
import { ContactContext } from './context/ContactContext';

const ContactList = () => {
    const { contacts, setSelectedContact } = useContext(ContactContext);
    return (
        <div>
          <h2>Contact List</h2>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id} style={{ margin: '5px 0' }}>
                <button onClick={() => setSelectedContact(contact)}>
                  {contact.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default ContactList