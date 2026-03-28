import {
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
} from "@ionic/react";
import { wifiOutline, cellularOutline, cloudOfflineOutline } from "ionicons/icons";
import ContactsApp from "../components/contact/ContactsApp";
import { useNetworkStatus } from "../context/NetworkContext";

const HomePage = () => {
  const { isOnline, connectionType } = useNetworkStatus();

  const getIcon = () => {
    if (!isOnline) return cloudOfflineOutline;
    if (connectionType === "wifi") return wifiOutline;
    return cellularOutline;
  };

  return (
    <>
      <div className="app-header">
        <img
          src="/header-contacts.png"
          alt="Contactos"
          className="header-image"
        />
      </div>

      <div className="ion-padding">
        <IonItem lines="full">
          <IonIcon icon={getIcon()} slot="start" />
          <IonLabel>
            <IonText color={isOnline ? "success" : "danger"}>
              <h2>{isOnline ? "Conectado" : "Sin conexión"}</h2>
            </IonText>
            <p>Tipo: {connectionType ?? "desconocido"}</p>
            {!isOnline && (
              <p>
                <IonText color="warning">
                  Las acciones de Contactos y Tareas requieren red.
                </IonText>
              </p>
            )}
          </IonLabel>
        </IonItem>

        <ContactsApp networkOnline={isOnline} />
      </div>
    </>
  );
};

export default HomePage;
