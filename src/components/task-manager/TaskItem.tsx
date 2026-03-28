import type { Task } from "../../types/task.types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, nextCompleted: boolean) => void | Promise<void>;
  onDelete: (id: string) => void | Promise<void>;
  actionsDisabled?: boolean;
}

const TaskItem = ({
  task,
  onToggle,
  onDelete,
  actionsDisabled = false,
}: TaskItemProps) => {
  return (
    <li className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => void onToggle(task.id, !task.completed)}
          className="task-item__checkbox"
          disabled={actionsDisabled}
        />
        <span className="task-item__title">{task.title}</span>
      </label>
      <button
        type="button"
        onClick={() => void onDelete(task.id)}
        className="task-item__delete"
        aria-label="Eliminar tarea"
        disabled={actionsDisabled}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
