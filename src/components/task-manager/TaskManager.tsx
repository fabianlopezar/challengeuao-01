import { useCallback } from "react";
import "./task-manager.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useTasksRealtime } from "../../hooks/useTasksRealtime";

interface TaskManagerProps {
  networkOnline: boolean;
}

const TaskManager = ({ networkOnline }: TaskManagerProps) => {
  const { tasks, loading, error, addTask, toggleTask, deleteTask } =
    useTasksRealtime();

  const handleAddTask = useCallback(
    async (title: string) => {
      if (!networkOnline) return;
      await addTask(title);
    },
    [addTask, networkOnline]
  );

  const handleToggleTask = useCallback(
    async (id: string, nextCompleted: boolean) => {
      if (!networkOnline) return;
      await toggleTask(id, nextCompleted);
    },
    [toggleTask, networkOnline]
  );

  const handleDeleteTask = useCallback(
    async (id: string) => {
      if (!networkOnline) return;
      await deleteTask(id);
    },
    [deleteTask, networkOnline]
  );

  if (loading) {
    return <p className="ion-padding">Cargando tareas (Realtime DB)...</p>;
  }

  return (
    <div className="task-manager">
      <h1 className="task-manager__title">Tareas (Realtime Database)</h1>
      {error && <p style={{ color: "salmon" }}>{error}</p>}
      {!networkOnline && (
        <p className="task-manager__offline">
          Sin conexión: no puedes crear ni modificar tareas.
        </p>
      )}

      <TaskForm onAddTask={handleAddTask} disabled={!networkOnline} />

      {tasks.length > 0 && (
        <p className="task-manager__stats">
          {tasks.filter((t) => t.completed).length} de {tasks.length} completadas
        </p>
      )}

      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        actionsDisabled={!networkOnline}
      />
    </div>
  );
};

export default TaskManager;
