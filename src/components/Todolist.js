import React from "react";

function TodoListItem({ item, index, deleteList }) {
  const handleDelete = () => {
    deleteList(index);
  };

  return (
    <div className="container" style={{ color: "black", width: "45%" }}>
      <table className="table table-striped table-bordered rounded-3 bg-dark">
        <tbody>
          <tr className="">
            <td>
              <b style={{ margin: "5px" }}>{item}</b>
            </td>
            <td>
              <button
                className="btn btn-danger rounded-2"
                onClick={handleDelete}
                style={{ margin: "2px", height: "auto" }}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoListItem;
