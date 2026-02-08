import { useState } from "react";

interface Props {
  onAddContact: (name: string, phone: string) => void;
}

const ContactForm = ({ onAddContact }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("❌ Todos los campos son obligatorios");
      return;
    }

    onAddContact(name, phone);
    setName("");
    setPhone("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Agregar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default ContactForm;