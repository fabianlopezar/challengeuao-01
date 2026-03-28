import { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
} from "@ionic/react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./LoginPage.css";

const LoginPage = () => {
  const { user, loading, login, register } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  if (!loading && user) return <Navigate to="/" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "login") await login(email.trim(), password);
      else await register(email.trim(), password);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error de autenticación"
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>{mode === "login" ? "Iniciar sesión" : "Registro"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSegment
          value={mode}
          onIonChange={(e) =>
            setMode(e.detail.value === "register" ? "register" : "login")
          }
        >
          <IonSegmentButton value="login">
            <IonLabel>Entrar</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="register">
            <IonLabel>Registrar</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <form onSubmit={(e) => void handleSubmit(e)} className="login-form-ion">
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonInput={(ev) => setEmail(String(ev.detail.value ?? ""))}
              required
              autocomplete="email"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonInput={(ev) => setPassword(String(ev.detail.value ?? ""))}
              required
              autocomplete={
                mode === "login" ? "current-password" : "new-password"
              }
            />
          </IonItem>

          {error && (
            <IonText color="danger">
              <p className="ion-padding-start">{error}</p>
            </IonText>
          )}

          <IonButton type="submit" expand="block" className="ion-margin-top" disabled={busy}>
            {busy ? <IonSpinner name="crescent" /> : mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </IonButton>
        </form>

        <IonText color="medium">
          <p className="ion-padding ion-text-center">
            Firebase Auth (email/contraseña). Activa el método en la consola
            de Firebase.
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
