import type { Contact } from "./ContactsApp";


interface Props {
  contacts: Contact[];
  onDelete: (id: number) => void;
}

const ContactList = ({ contacts, onDelete }: Props) => {
  if (contacts.length === 0) return <p>📭 No hay contactos</p>;

  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>
          <span>
            {c.name} - {c.phone}
          </span>
          <button onClick={() => onDelete(c.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;