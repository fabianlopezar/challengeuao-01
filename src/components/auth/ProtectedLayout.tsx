import { useNavigate, Link, Outlet } from "react-router-dom";
import "../../pages/ListPage.css";
import { clearAuthenticated } from "../../auth/auth";

const ProtectedLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthenticated();
    navigate("/login", { replace: true });
  };

  return (
    <div className="protected-layout">
      <header className="protected-layout__header">
        <nav className="protected-layout__nav">
          <Link to="/list">Lista</Link>
          <Link to="/">Contactos</Link>
          <Link to="/task-manager">Tareas</Link>
        </nav>
        <button type="button" onClick={handleLogout} className="logout-btn">
          Cerrar sesión
        </button>
      </header>
      <main className="protected-layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
