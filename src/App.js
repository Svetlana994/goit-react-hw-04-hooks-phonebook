import { useState, useEffect } from 'react';
import Section from './components/Section/Section';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContact] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    if (
      contacts.find(
        contact => data.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in contacts.`);
    } else {
      setContact(prevState => [...prevState, { ...data, id: uuidv4() }]);
    }
  };

  const changeFilter = event => setFilter(event.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContact(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          options={getVisibleContacts()}
          onDelete={deleteContact}
        ></Contacts>
      </Section>
    </>
  );
}

export default App;
