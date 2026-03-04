import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskManagerPage from "./pages/TaskManagerPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage loading={loading} />} />
        <Route path="/task-manager" element={<TaskManagerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
