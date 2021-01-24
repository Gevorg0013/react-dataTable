import React, { useState } from "react";
import "./App.css";
import DataTable from "./Component/DataTable";

const App = () => {
  let usersObj = [
    { name: "Gevorg", SurName: "Ayvazyan", age: 24 },
    { name: "Aram", SurName: "Poxosyan", age: 20 },
    { name: "Erik", SurName: "Xlxatyan", age: 25 },
    { name: "Edgar", SurName: "Vardanyan", age: 23 },
    { name: "Sergey", SurName: "Mxitaryan", age: 22 },
    { name: "Aram", SurName: "Kirakosyan", age: 26 },
  ];

  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState(usersObj);
  // eslint-disable-next-line no-unused-vars
  const [users1, setUsers1] = useState(users);
  let [filteredNames, setFilteredNames] = useState(users);

  const filterUser = (event) => {
    let usersAsString = users.map((user) => {
      return user.name
        .toLowerCase()
        .concat(" ")
        .concat(user.SurName.toLowerCase())
        .concat(" ")
        .concat(user.age);
    });
    // let val = event.target.value;

    const valueAsArray = event.target.value.toLowerCase().split(" ");
    valueAsArray.map((str) => {
      usersAsString = usersAsString.filter((userString) => {
        return userString.includes(str);
      });
    });

    const userArray = usersAsString.map((item) => {
      let userInfo = item.split(" ");
      return {
        name: userInfo[0].charAt(0).toUpperCase().concat(userInfo[0].slice(1)),
        SurName: userInfo[1]
          .charAt(0)
          .toUpperCase()
          .concat(userInfo[1].slice(1)),
        age: userInfo[2],
      };
    });
    setFilteredNames(userArray);
  };

  return (
    <body>
      <div className="App">
        <div className="column">
          <div className="inputDiv">
            <input type="text" placeholder="filter" onChange={filterUser} />
          </div>
          <div className="imagesDiv">
            <div className="divList">
              <DataTable
                className="ListUl"
                filteredNames={filteredNames}
                setFilteredNames={setFilteredNames}
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
