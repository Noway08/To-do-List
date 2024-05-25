import React from "react";

function Todolist(props) {
  return (
    <div className="container" style={{ color: "black", width: "45%" }}>
      <table className="table table-striped table-bordered rounded-3 bg-dark">
        <tbody>
          <tr className="">
            <div className="d-flex">
              <b style={{ margin: "5px" }}>{props.item}</b>

              <span style={{ margin: "2px" }}>
                <button
                  className="btn btn-danger rounded-2"
                  onClick={(e) => props.deleteList(props.index)}
                  style={{ marginRight: "2px", height: "auto" }}>
                  Delete
                </button>
              </span>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
