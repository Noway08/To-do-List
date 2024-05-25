import React, { useState } from "react";

function Todoinput(props) {
  const [newTask, setTask] = useState("");
  return (
    <div>
      <div className="d-flex align-items-center mt-10%">
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
          }}>
          <h2 style={{ color: "white", marginTop: "20px" }}>To-do List</h2>
          <input
            type="text"
            placeholder="Enter the task"
            value={newTask}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            style={{
              margin: "5px",
              alignItems: "center",
              width: "40%",
            }}
          />
          <button
            className="btn btn-success text-dark m-5"
            onClick={() => {
              props.addList(newTask);
              setTask("");
            }}
            style={{
              margin: "5px",
              alignItems: "center",

              width: "45px",
              padding: "2px",
            }}>
            ADD
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Todoinput;
