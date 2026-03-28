import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import HomePage from "./pages/HomePage";
import TaskManagerPage from "./pages/TaskManagerPage";
import FruitsPage from "./pages/FruitsPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskManagerPage />} />
          <Route
            path="/task-manager"
            element={<Navigate to="/tasks" replace />}
          />
          <Route path="/fruits" element={<FruitsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
