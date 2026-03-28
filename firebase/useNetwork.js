import { useState, useEffect } from "react";
import { Network } from "@capacitor/network";

const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [connectionType, setConnectionType] = useState("unknown");

  useEffect(() => {
    let listener;

    const initNetwork = async () => {
      try {
        // Estado inicial
        const status = await Network.getStatus();
        setIsOnline(status.connected);
        setConnectionType(status.connectionType);

        // Escuchar cambios
        listener = await Network.addListener("networkStatusChange", (status) => {
          setIsOnline(status.connected);
          setConnectionType(status.connectionType);
        });
      } catch (err) {
        console.error("Error al obtener estado de red:", err);
      }
    };

    initNetwork();

    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, []);

  return { isOnline, connectionType };
};

export default useNetwork;
