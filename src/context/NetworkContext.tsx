import { createContext, useContext, type ReactNode } from "react";
import useNetwork from "../hooks/useNetwork";

type NetworkContextValue = {
  isOnline: boolean;
  connectionType: string;
};

const NetworkContext = createContext<NetworkContextValue | null>(null);

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const { isOnline, connectionType } = useNetwork();

  return (
    <NetworkContext.Provider value={{ isOnline, connectionType }}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetworkStatus = () => {
  const ctx = useContext(NetworkContext);
  if (!ctx)
    throw new Error("useNetworkStatus debe usarse dentro de NetworkProvider");
  return ctx;
};
