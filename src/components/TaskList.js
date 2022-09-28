import React from "react";

function TaskList({ Tasks, onDelete }) {
  const taskList = Tasks.map((task, index) => <task key={task.text}
  text={task.text} category={task.category} onDeleteTask={onDelete} id={index}/>)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */{taskList}}
    </div>
  );
}

export default TaskList;
