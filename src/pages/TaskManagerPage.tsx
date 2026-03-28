import { TaskManager } from "../components/task-manager";
import { useNetworkStatus } from "../context/NetworkContext";

const TaskManagerPage = () => {
  const { isOnline } = useNetworkStatus();

  return (
    <div className="ion-padding">
      <TaskManager networkOnline={isOnline} />
    </div>
  );
};

export default TaskManagerPage;
