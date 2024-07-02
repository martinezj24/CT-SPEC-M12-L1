import React, { createContext, useState } from 'react'

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
    const [contacts] = useState([
        { id: 1, name: 'Joshua Martinez', email: 'jmartinez@mail.com', phone: '123-555-5555' },
        { id: 2, name: 'Cristina Martinez', email: 'cmartinez@mail.com', phone: '124-555-5555' },
        { id: 3, name: 'George Pantoja', email: 'gpantoja@mail.com', phone: '125-555-5555' },
        { id: 3, name: 'Nydia Pantoja', email: 'npantoja@mail.com', phone: '126-555-5555' }
    ]);

    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider