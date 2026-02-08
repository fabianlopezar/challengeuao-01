import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export interface Contact {
  id: number;
  name: string;
  phone: string;
}


const initialContacts: Contact[] = [
  { id: 1, name: "Estefanny Arias", phone: "3001234567" },
  { id: 2, name: "María Gómez", phone: "3109876543" },
  { id: 3, name: "Jason Molina", phone: "3205558888" },
];

const ContactsApp = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setContacts(initialContacts); // cargamos la lista inicial
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const addContact = (name: string, phone: string) => {
    const newContact: Contact = {
      id: Date.now(),
      name,
      phone,
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  if (loading) return <Loader text="Cargando contactos..." />;

  return (
    <div>
      <h1>📞 Contactos</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default ContactsApp;