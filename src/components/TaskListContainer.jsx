import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice"; // Ensure correct path
const TaskListComponent = React.lazy(() => import("./TaskListComponent")); // Lazy-loaded

const TaskListContainer = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <TaskListComponent tasks={tasks} onDelete={handleDelete} />
    </React.Suspense>
  );
};

export default TaskListContainer;
