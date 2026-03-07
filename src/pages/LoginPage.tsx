import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setAuthenticated } from "../auth/auth";
import "./LoginPage.css";

const VALID_EMAIL = "user@mail.com";
const VALID_PASSWORD = "123";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? "/list";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setAuthenticated();
      navigate(from, { replace: true });
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@mail.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••"
              required
              autoComplete="current-password"
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
