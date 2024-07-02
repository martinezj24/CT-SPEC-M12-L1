import React from 'react';
import ContactProvider from './context/ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

const App = () => {
  return (
    <ContactProvider>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px' }}>
        <ContactList />
        <ContactDetails />
      </div>
    </ContactProvider>
  );
};

export default App;
