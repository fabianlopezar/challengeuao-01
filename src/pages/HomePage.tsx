import { Link } from "react-router-dom";
import Loader from "../components/loader/Loader";
import ContactsApp from "../components/contact/ContactsApp";

interface HomePageProps {
  loading: boolean;
}

const HomePage = ({ loading }: HomePageProps) => {
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
      <nav className="app-nav">
        <Link to="/task-manager" className="app-nav__link">
          Ir al Gestor de Tareas →
        </Link>
      </nav>
      <ContactsApp />
    </div>
  );
};

export default HomePage;
