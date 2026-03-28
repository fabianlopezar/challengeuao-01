import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import db from "./db";

const useDexie = (table, filterFn = null) => {
  const [manualResults, setManualResults] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // --- Tiempo real ---
  const liveResults = useLiveQuery(async () => {
    try {
      if (filterFn) {
        return await db[table].filter(filterFn).toArray();
      }
      return await db[table].toArray();
    } catch (err) {
      console.error(err);
      return [];
    }
  }, [table, filterFn]) ?? [];

  // --- Lectura manual ---
  const getAll = async () => {
    setIsPending(true);
    setError(null);
    try {
      let data;
      if (filterFn) {
        data = await db[table].filter(filterFn).toArray();
      } else {
        data = await db[table].toArray();
      }
      setManualResults(data);
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  // --- Agregar ---
  const add = async (data) => {
    setIsPending(true);
    setError(null);
    try {
      await db[table].add({
        ...data,
        createdAt: new Date().toISOString(),
      });
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  // --- Actualizar ---
  const update = async (id, data) => {
    setIsPending(true);
    setError(null);
    try {
      await db[table].update(id, {
        ...data,
        updatedAt: new Date().toISOString(),
      });
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  // --- Eliminar ---
  const deleteItem = async (id) => {
    setIsPending(true);
    setError(null);
    try {
      await db[table].delete(id);
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return {
    liveResults,
    manualResults,
    isPending,
    error,
    getAll,
    add,
    update,
    deleteItem,
  };
};

export default useDexie;
