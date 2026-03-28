import { useState } from "react";

interface Props {
  onAddContact: (name: string, phone: string) => void | Promise<void>;
  disabled?: boolean;
}

const ContactForm = ({ onAddContact, disabled = false }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (disabled) {
      setError("Sin conexión: no puedes agregar contactos.");
      return;
    }

    if (!name.trim() || !phone.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    void onAddContact(name, phone);
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
        disabled={disabled}
      />

      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={disabled}
      />

      <button type="submit" disabled={disabled}>
        Agregar
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {disabled && (
        <p style={{ opacity: 0.8 }}>Activa conexión para gestionar contactos.</p>
      )}
    </form>
  );
};

export default ContactForm;
