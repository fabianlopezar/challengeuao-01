import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";

/** Capacitor Network en nativo; en web usa navigator + eventos online/offline. */
const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator !== "undefined" ? navigator.onLine : true
  );
  const [connectionType, setConnectionType] = useState<string>("unknown");

  useEffect(() => {
    let removeListener: (() => void) | undefined;

    const init = async () => {
      try {
        if (Capacitor.isNativePlatform()) {
          const { Network } = await import("@capacitor/network");
          const status = await Network.getStatus();
          setIsOnline(status.connected);
          setConnectionType(status.connectionType);

          const handle = await Network.addListener("networkStatusChange", (s) => {
            setIsOnline(s.connected);
            setConnectionType(s.connectionType);
          });
          removeListener = () => void handle.remove();
        } else {
          setIsOnline(navigator.onLine);
          setConnectionType(navigator.onLine ? "wifi" : "none");

          const onOnline = () => {
            setIsOnline(true);
            setConnectionType("wifi");
          };
          const onOffline = () => {
            setIsOnline(false);
            setConnectionType("none");
          };
          window.addEventListener("online", onOnline);
          window.addEventListener("offline", onOffline);
          removeListener = () => {
            window.removeEventListener("online", onOnline);
            window.removeEventListener("offline", onOffline);
          };
        }
      } catch {
        setIsOnline(navigator.onLine);
        setConnectionType("unknown");
      }
    };

    void init();

    return () => {
      removeListener?.();
    };
  }, []);

  return { isOnline, connectionType };
};

export default useNetwork;
