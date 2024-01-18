import "./App.css";
import TableHeader from "./components/TableHeader.jsx";
import TaskTable from "./components/TaskTable.jsx";
import TaskInput from "./components/TaskInput.jsx";
import { useState, useEffect } from "react";
import * as api from "./index.js";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const json = await api.getTasks();
      setData(json);
    };

    fetchTasks();
  }, []);

  return (
    <>
      <h1 color="blue"> My Task List </h1>
      <TableHeader />
      <TaskInput data={data} setData={setData} />
      <TaskTable data={data} setData={setData} />
    </>
  );
}

export default App;
