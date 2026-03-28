import type { Contact } from "./ContactsApp";

interface Props {
  contacts: Contact[];
  onDelete: (id: string) => void | Promise<void>;
  actionsDisabled?: boolean;
}

const ContactList = ({ contacts, onDelete, actionsDisabled = false }: Props) => {
  if (contacts.length === 0) return <p>No hay contactos</p>;

  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>
          <span>
            {c.name} - {c.phone}
          </span>
          <button
            type="button"
            onClick={() => void onDelete(c.id)}
            disabled={actionsDisabled}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
