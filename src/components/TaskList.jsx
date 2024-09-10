import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TaskList = React.lazy(() => import("./TaskListComponent"));

const TaskListContainer = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </React.Suspense>
  );
};

export default TaskListContainer;
