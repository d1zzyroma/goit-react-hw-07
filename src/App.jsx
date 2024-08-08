import { useSelector, useDispatch } from 'react-redux';
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { setFilter, addContact, deleteContact } from './redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSetFilter = (value) => {
    dispatch(setFilter(value));
  };

  const filteredValues = () => {
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox 
        inputValue={filter} 
        setInputValue={handleSetFilter} 
      />
      <ContactList 
        contactData={filteredValues()} 
        deleteContact={handleDeleteContact} 
      />
    </div>
  );
}

export default App;
