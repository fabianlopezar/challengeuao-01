import { useEffect, useState, useCallback } from "react";
import {
  onValue,
  push,
  ref,
  remove,
  update,
  type Unsubscribe,
} from "firebase/database";
import { rtdb } from "../firebase/config";
import type { Task } from "../types/task.types";

const tasksRef = () => ref(rtdb, "tasks");

export const useTasksRealtime = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const r = tasksRef();
    const unsub: Unsubscribe = onValue(
      r,
      (snap) => {
        const val = snap.val() as Record<
          string,
          { title?: string; completed?: boolean; createdAt?: number }
        > | null;

        if (!val) {
          setTasks([]);
        } else {
          const list: Task[] = Object.entries(val).map(([id, v]) => ({
            id,
            title: String(v.title ?? ""),
            completed: Boolean(v.completed),
            createdAt:
              typeof v.createdAt === "number" ? v.createdAt : Date.now(),
          }));
          list.sort((a, b) => a.createdAt - b.createdAt);
          setTasks(list);
        }
        setError(null);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  const addTask = useCallback(async (title: string) => {
    await push(tasksRef(), {
      title: title.trim(),
      completed: false,
      createdAt: Date.now(),
    });
  }, []);

  const toggleTask = useCallback(async (id: string, nextCompleted: boolean) => {
    await update(ref(rtdb, `tasks/${id}`), { completed: nextCompleted });
  }, []);

  const deleteTask = useCallback(async (id: string) => {
    await remove(ref(rtdb, `tasks/${id}`));
  }, []);

  return { tasks, loading, error, addTask, toggleTask, deleteTask };
};
