import Loader from "../loader/Loader";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { useContactsFirestore } from "../../hooks/useContactsFirestore";

export interface Contact {
  id: string;
  name: string;
  phone: string;
}

interface ContactsAppProps {
  networkOnline: boolean;
}

const ContactsApp = ({ networkOnline }: ContactsAppProps) => {
  const { contacts, loading, error, addContact, deleteContact } =
    useContactsFirestore();

  const addContactSafe = async (name: string, phone: string) => {
    if (!networkOnline) return;
    await addContact(name, phone);
  };

  const deleteContactSafe = async (id: string) => {
    if (!networkOnline) return;
    await deleteContact(id);
  };

  if (loading) return <Loader text="Cargando contactos (Firestore)..." />;

  return (
    <div>
      <h1>Contactos (Firestore)</h1>
      {error && <p style={{ color: "salmon" }}>{error}</p>}
      <ContactForm
        onAddContact={addContactSafe}
        disabled={!networkOnline}
      />
      <ContactList
        contacts={contacts}
        onDelete={deleteContactSafe}
        actionsDisabled={!networkOnline}
      />
    </div>
  );
};

export default ContactsApp;
