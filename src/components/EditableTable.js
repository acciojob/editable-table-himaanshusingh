import React, { useRef, useState } from "react";

function EditableTable() {
  const [data, setData] = useState([
    { id: 1, name: "Ram", age: 25 },
    { id: 2, name: "Shyam", age: 30 },
    { id: 3, name: "Ali", age: 35 },
    { id: 4, name: "Shaw", age: 20 },
    { id: 5, name: "Tavneet", age: 50 },
    { id: 6, name: "Lakshmi", age: 40 },
  ]);

  const editedRows = useRef(new Set()); 

  function handleChange(id, field, value) {
    editedRows.current.add(id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Edited rows:", Array.from(editedRows.current));
  }

  return (
    <div>
      <h1>Track edited cells to log updates for future</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <input
                    type="text"
                    defaultValue={row.name}
                    onChange={(e) =>
                      handleChange(row.id, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={row.age}
                    onChange={(e) =>
                      handleChange(row.id, "age", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Save changes</button>
      </form>
    </div>
  );
}

export default EditableTable;