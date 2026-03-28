import { useState } from "react";
import type { FormEvent } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void | Promise<void>;
  disabled?: boolean;
}

const TaskForm = ({ onAddTask, disabled = false }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    const trimmed = inputValue.trim();
    if (trimmed) {
      void onAddTask(trimmed);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nueva tarea..."
        className="task-form__input"
        aria-label="Descripción de la tarea"
        disabled={disabled}
      />
      <button type="submit" className="task-form__submit" disabled={disabled}>
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
