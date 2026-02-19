import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import ContactsApp from "./components/contact/ContactsApp";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱️ 5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader text="Cargando aplicación..." />;

  return (
    <div>
      <header className="app-header">
        <img
          src="/header-contacts.png"
          alt="Contactos - Gestión de contactos"
          className="header-image"
        />
      </header>
      <ContactsApp></ContactsApp>
    </div>
  );
};

export default App;