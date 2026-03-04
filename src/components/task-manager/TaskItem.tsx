import type { Task } from "../../types/task.types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <li className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-item__checkbox"
        />
        <span className="task-item__title">{task.title}</span>
      </label>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="task-item__delete"
        aria-label="Eliminar tarea"
      >
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
