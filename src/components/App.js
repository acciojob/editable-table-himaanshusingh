import React, { useState, useRef } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Ram", age: 25 },
    { id: 2, name: "Shyam", age: 30 },
    { id: 3, name: "Ali", age: 35 },
    { id: 4, name: "Shaw", age: 20 },
    { id: 5, name: "Tavneet", age: 50 },
    { id: 6, name: "Lakshmi", age: 40 },
  ]);
  const editedRows = useRef(new Set());

  function handleChange(e, id) {
    const { name, value } = e.target;
    editedRows.current.add(id);
    data[id][name] = value;
    setData(data);
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
          <thead><tr><th>ID</th><th>Name</th><th>Age</th></tr></thead>
          <tbody>
            {data.map(({ id, name, age }) => (
              <tr key={id}>
                <td>{id}</td>
                <td><input defaultValue={name} onChange={(e) => handleChange(e, id)} name="name"/></td>
                <td><input defaultValue={age} type="number" onChange={(e) => handleChange(e, id)} name="age"/></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Save Changes</button>
      </form>
    </div>
  ); // prettier-ignore
};

export default App;
