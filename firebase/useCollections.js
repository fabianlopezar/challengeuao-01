import { useState } from "react";
import { db } from "./config";
import {
  collection, query, where, getDocs,
  addDoc, updateDoc, deleteDoc,
  doc, serverTimestamp,
} from "firebase/firestore";

const useCollection = (table) => {
  const [results, setResults] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const getAll = async (filters = []) => {
    setIsPending(true);
    setError(null);

    try {
      let q = query(collection(db, table));

      for (const [field, op, value] of filters) {
        q = query(q, where(field, op, value));
      }

      const snapshot = await getDocs(q);
      const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));

      setResults(docs);
      setIsPending(false);
      return docs;
    } catch (err) {
      setError(err.message);
      setIsPending(false);
      return [];
    }
  };

  // Agregar documento
  const add = async (data) => {

  };

  // Actualizar documento
  const update = async (id, data) => {

  };

  // Eliminar documento
  const remove = async (id) => {

  };

  return { results, isPending, error, getAll, add, update, remove };
};

export default useCollection;