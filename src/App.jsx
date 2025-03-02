import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    // Check for PreviousData in LS
    const storedData = window.localStorage.getItem("storedData");
    if (storedData !== null) {
      return JSON.parse(storedData);
    }
    // If no data
    return initialContacts;
  });

  const [searchValue, setSearchValue] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contacts) => contacts.id !== id);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("storedData", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((el) => {
    return el.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchValue} onSearch={setSearchValue} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
