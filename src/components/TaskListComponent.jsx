import React from "react";

const TaskListComponent = ({ tasks = [], onDelete }) => {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskListComponent;
