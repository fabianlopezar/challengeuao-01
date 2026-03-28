import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";
import { useCallback, useState } from "react";

export interface FrutaRow {
  id?: number;
  nombre: string;
  proveedor?: string;
  fechaCosecha?: string;
  createdAt?: string;
}

export const useDexieFruits = () => {
  const [error, setError] = useState<string | null>(null);

  const frutas = useLiveQuery(async () => {
    try {
      return await db.frutas.orderBy("id").reverse().toArray();
    } catch (e) {
      console.error(e);
      return [];
    }
  }, []) as FrutaRow[] | undefined;

  const addFruta = useCallback(async (nombre: string) => {
    setError(null);
    try {
      await db.frutas.add({
        nombre: nombre.trim(),
        createdAt: new Date().toISOString(),
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al guardar");
    }
  }, []);

  return {
    frutas: frutas ?? [],
    isPending: frutas === undefined,
    error,
    addFruta,
  };
};
