import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setupIonicReact, IonApp } from "@ionic/react";
import { AuthProvider } from "./context/AuthContext";
import { NetworkProvider } from "./context/NetworkContext";
import App from "./App.tsx";
import "./index.css";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/display.css";

setupIonicReact();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IonApp>
      <AuthProvider>
        <NetworkProvider>
          <App />
        </NetworkProvider>
      </AuthProvider>
    </IonApp>
  </StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker registrado"))
      .catch((err) => console.log("Error:", err));
  });
}
