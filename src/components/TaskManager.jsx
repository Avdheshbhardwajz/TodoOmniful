import React, { useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskListContainer from "./TaskListContainer";

const TaskManager = () => {
  useEffect(() => {
    console.log("Fetching tasks...");

    return () => {
      console.log("Cleanup tasks...");
    };
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskListContainer />
    </div>
  );
};

export default TaskManager;
