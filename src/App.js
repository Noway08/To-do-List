import "./App.css";
import React, { useState } from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

function App() {
  const [taskList, setList] = useState([]);
  const addList = (newTask) => {
    if (newTask.trim() !== "") setList([...taskList, newTask]);
  };

  const deleteList = (key) => {
    const newTodo = taskList.filter((elements, i) => i !== key);
    setList(newTodo);
  };
  return (
    <div className="App">
      <Todoinput addList={addList} />
      {taskList.map((task, i) => {
        return (
          <Todolist key={i} index={i} deleteList={deleteList} item={task} />
        );
      })}
    </div>
  );
}

export default App;
