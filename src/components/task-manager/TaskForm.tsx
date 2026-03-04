import { useState } from "react";
import type { FormEvent } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      onAddTask(trimmed);
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
      />
      <button type="submit" className="task-form__submit">
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
