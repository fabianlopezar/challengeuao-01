import { useState, useCallback } from "react";
import "./task-manager.css";
import type { Task } from "../../types/task.types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const createTask = (title: string): Task => ({
  id: crypto.randomUUID(),
  title,
  completed: false,
  createdAt: Date.now(),
});

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = useCallback((title: string) => {
    setTasks((prev) => [...prev, createTask(title)]);
  }, []);

  const handleToggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const handleDeleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="task-manager">
      <h1 className="task-manager__title">📋 Gestor de Tareas</h1>

      <TaskForm onAddTask={handleAddTask} />

      {tasks.length > 0 && (
        <p className="task-manager__stats">
          {completedCount} de {tasks.length} completadas
        </p>
      )}

      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskManager;
