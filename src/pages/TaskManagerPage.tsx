import { Link } from "react-router-dom";
import { TaskManager } from "../components/task-manager";

const TaskManagerPage = () => {
  return (
    <div className="page page--task-manager">
      <Link to="/" className="page__back-link">
        ← Volver a Contactos
      </Link>
      <TaskManager />
    </div>
  );
};

export default TaskManagerPage;
