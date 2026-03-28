import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

export interface FirestoreContact {
  id: string;
  name: string;
  phone: string;
}

const contactsCol = collection(db, "contacts");

export const useContactsFirestore = () => {
  const [contacts, setContacts] = useState<FirestoreContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(
      contactsCol,
      (snap) => {
        const list: FirestoreContact[] = [];
        snap.forEach((d) => {
          const data = d.data();
          list.push({
            id: d.id,
            name: String(data.name ?? ""),
            phone: String(data.phone ?? ""),
          });
        });
        list.sort((a, b) => a.name.localeCompare(b.name));
        setContacts(list);
        setError(null);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
    return unsub;
  }, []);

  const addContact = async (name: string, phone: string) => {
    await addDoc(contactsCol, {
      name: name.trim(),
      phone: phone.trim(),
      createdAt: serverTimestamp(),
    });
  };

  const deleteContact = async (id: string) => {
    await deleteDoc(doc(db, "contacts", id));
  };

  return { contacts, loading, error, addContact, deleteContact };
};
