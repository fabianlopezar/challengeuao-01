import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonSpinner,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import { useDexieFruits } from "../hooks/useDexieFruits";

const FruitsPage = () => {
  const [nombre, setNombre] = useState("");
  const { frutas, isPending, error, addFruta } = useDexieFruits();

  const handleAgregar = async () => {
    if (!nombre.trim()) return;
    await addFruta(nombre);
    setNombre("");
  };

  return (
    <div className="ion-padding">
      <h2>Frutas (Dexie / local)</h2>
      <IonText color="medium">
        <p className="ion-margin-bottom">
          Los datos se guardan en IndexedDB; no requieren conexión.
        </p>
      </IonText>

      <IonItem>
        <IonLabel position="floating">Nombre de la fruta</IonLabel>
        <IonInput
          value={nombre}
          placeholder="Ej: Mango"
          onIonInput={(e) => setNombre(String(e.detail.value ?? ""))}
        />
      </IonItem>

      <IonButton
        expand="block"
        className="ion-margin-top"
        onClick={() => void handleAgregar()}
        disabled={isPending}
      >
        {isPending ? <IonSpinner name="crescent" /> : "Agregar"}
      </IonButton>

      {error && (
        <IonText color="danger">
          <p>{error}</p>
        </IonText>
      )}

      <IonList className="ion-margin-top">
        {frutas.map((fruta) => (
          <IonItem key={fruta.id}>
            <IonLabel>{fruta.nombre}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default FruitsPage;
