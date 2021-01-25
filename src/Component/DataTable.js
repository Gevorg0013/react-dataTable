/* eslint-disable */
import React, { useState } from "react";
import "../App.css";
import TableHead from "./TableHead";

const DataTable = (props) => {
let filteredNames=props.filteredNames;
let setFilteredNames=props.setFilteredNames;

  const [user, setUsers] = useState(filteredNames);
  const refName = React.createRef();
  const refSurName = React.createRef();
  const refAge = React.createRef();

  const addEl = () => {
    const rName = refName.current.value;
    const rSurName = refSurName.current.value;
    const rAge = refAge.current.value;
    if (rAge === "" || rSurName === "" || rName === "") {
      alert("try again");
    } else {
      setUsers((current) => [
        ...current,
        { name: rName, SurName: rSurName, age: rAge },
      ]);
      // eslint-disable-next-line react/prop-types
      setFilteredNames((current) => [
        ...current,
        { name: rName, SurName: rSurName, age: rAge },
      ]);
    }
    refName.current.value = " ";
    refSurName.current.value = " ";
    refAge.current.value = " ";
  };

  return (
    <table id="myTable">
      <TableHead
        filteredNames={filteredNames}
        setFilteredNames={setFilteredNames}
      />
      {filteredNames.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.SurName}</td>
            <td>{user.age}</td>
          </tr>
        );
      })}

      <th className="lastRow">
        <label>
          insert name
          <input type="text" id="input" ref={refName} />
        </label>{" "}
      </th>
      <th className="lastRow">
        <label>
          insert SurName
          <input type="text" id="input" ref={refSurName} />
        </label>{" "}
      </th>
      <th className="lastRow">
        {" "}
        <label>
          insert Age <input type="number" id="input" ref={refAge} />
        </label>
      </th>
      <tr>
        <button className="insertElButton" onClick={addEl}>
          insert
        </button>
      </tr>
    </table>
  );
};

export default DataTable;
