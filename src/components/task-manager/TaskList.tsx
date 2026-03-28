import type { Task } from "../../types/task.types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string, nextCompleted: boolean) => void | Promise<void>;
  onDeleteTask: (id: string) => void | Promise<void>;
  actionsDisabled?: boolean;
}

const TaskList = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  actionsDisabled = false,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <p className="task-list__empty">
        No hay tareas. ¡Agrega una para comenzar!
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
          actionsDisabled={actionsDisabled}
        />
      ))}
    </ul>
  );
};

export default TaskList;
