import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
} from "@ionic/react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../loader/Loader";

const ProtectedLayout = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  if (loading) return <Loader text="Comprobando sesión..." />;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>UAO Challenge</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => void logout()}>Cerrar sesión</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonButtons>
            <IonButton onClick={() => navigate("/")}>Contactos</IonButton>
            <IonButton onClick={() => navigate("/tasks")}>Tareas</IonButton>
            <IonButton onClick={() => navigate("/fruits")}>Frutas</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Outlet />
      </IonContent>
    </IonPage>
  );
};

export default ProtectedLayout;
