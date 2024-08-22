import { Contact } from "../components/ContactsList/dtos";
import { useContext, createContext } from "react";

interface ContactsContextType {
    contacts : Contact[] | undefined | null;
    setContacts : (contacts : Contact[]) => void;
    selectedContact : Contact | null | undefined;
    setSelectedContact : (contact : Contact) => void;
};

const ContactsContext = createContext<ContactsContextType>({
    contacts : [],
    setContacts : () => {},
    selectedContact : null,
    setSelectedContact : () => {}
});

const useContactsContext = () => useContext(ContactsContext);

export {ContactsContext, useContactsContext};