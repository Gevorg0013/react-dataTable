import React, { useState } from "react";
import "../App.css";

const TableHead = ({
  // eslint-disable-next-line react/prop-types
  filteredNames,
  // eslint-disable-next-line react/prop-types
  setFilteredNames,
}) => {
  const [direct, setDirect] = useState(0);
  const [directSurName, setDirectSurName] = useState(0);
  const [directAge, setDirectAge] = useState(0);

  const [closeName, setCloseName] = useState(0);
  const [closeSurName, setCloseSurName] = useState(0);
  const [closeAge, setCloseAge] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState(filteredNames);

  const sortByNameUp = () => {
    let a = [...filteredNames];
    a.sort(function (a, b) {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      else return 0;
    });
    setFilteredNames(a);
  };

  const sortByNameDown = () => {
    let a = [...filteredNames];
    a.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      else return 0;
    });
    setFilteredNames(a);
  };

  const sortBySurNameUp = () => {
    let a = [...filteredNames];
    a.sort((a, b) => {
      if (a.SurName > b.SurName) return 1;
      if (a.SurName < b.SurName) return -1;
      else return 0;
    });
    setFilteredNames(a);
  };

  const sortBySurnameDown = () => {
    let a = [...filteredNames];
    a.sort((a, b) => {
      if (a.SurName < b.SurName) return 1;
      if (a.SurName > b.SurName) return -1;
      else return 0;
    });
    setFilteredNames(a);
  };

  const sortByAgeUp = () => {
    let a = [...filteredNames];
    a.sort((a, b) => {
      if (a.age > b.age) return 1;
      if (a.age < b.age) {
        return -1;
      } else return 0;
    });
    setFilteredNames(a);
  };

  const sortByAgeDown = () => {
    let a = [...filteredNames];
    a.sort((a, b) => {
      if (a.age < b.age) return 1;
      if (a.age > b.age) return -1;
      else return 0;
    });
    setFilteredNames(a);
  };

  const onHoverClick = (event) => {
    let img = event.currentTarget.querySelector("img");
    img.classList.add("activeIcon");
    img.classList.remove("inactiveIcon");
  };

  const ofHoverClick = (event) => {
    let img = event.currentTarget
      .closest(".filter-block")
      .querySelector(".iconImg");
    console.log(img);
    img.classList.add("inactiveIcon");
    img.classList.remove("activeIcon");
    setCloseName(!closeName);
    setFilteredNames(users);
  };

  const ofHoverClick1 = (event) => {
    let img = event.currentTarget
      .closest(".filter-block")
      .querySelector(".iconImg");
    img.classList.add("inactiveIcon");
    img.classList.remove("activeIcon");
    setCloseSurName(!closeSurName);
    setFilteredNames(users);
  };
  const [countName, setCountName] = useState(0);
  const [countSurName, setCountSurName] = useState(0);
  const [countAge, setCountAge] = useState(0);

  const ofHoverClick2 = (event) => {
    let img = event.currentTarget
      .closest(".filter-block")
      .querySelector(".iconImg");
    console.log(img);
    img.classList.add("inactiveIcon");
    img.classList.remove("activeIcon");
    setCloseAge(!closeAge);
    setFilteredNames(users);
  };

  return (
    <tr>
      <th className="Th" id="name">
        <div className="filter-block">
          <div className="table-column" id="SortByName" onClick={onHoverClick}>
            <strong>Name</strong>
            <div className="icon-box">
              <img
                alt="XImg"
                className="iconImg inactiveIcon"
                src={direct || countName === 0 ? "up11.png" : "down.png"}
                onClick={() => {
                  !direct ? sortByNameUp() : sortByNameDown();
                  setCloseName(1);
                  setDirect(!direct);
                  setCountName(countName + 1);
                }}
              />
            </div>
          </div>
          <div className="reset-box">
            <img
              alt="XImg"
              src="x.png"
              className={!closeName ? "closeActive" : "closeInActive"}
              onClick={ofHoverClick}
            />
          </div>
        </div>
      </th>
      <th className="Th" id="surName">
        <div className="filter-block">
          <div
            className="table-column"
            id="SortBySurNames"
            onClick={onHoverClick}
          >
            <strong>Surname</strong>
            <div className="icon-box">
              <img
                alt="imgIcon"
                className="iconImg inactiveIcon"
                src={
                  directSurName || countSurName === 0 ? "up11.png" : "down.png"
                }
                onClick={() => {
                  setDirectSurName(!directSurName);
                  !directSurName ? sortBySurNameUp() : sortBySurnameDown();
                  setCloseSurName(1);
                  setCountSurName(countSurName + 1);
                }}
              />
            </div>
          </div>
          <div className="reset-box">
            <img
              alt="xImg"
              src="x.png"
              width="10px"
              className={!closeSurName ? "closeActive" : "closeInActive"}
              onClick={ofHoverClick1}
            />
          </div>
        </div>
      </th>
      <th className="Th" id="age">
        <div className="filter-block">
          <div className="table-column" id="SortByAge" onClick={onHoverClick}>
            <strong>Age</strong>
            <div className="icon-box">
              <img
                alt="iconImg"
                className="iconImg inactiveIcon"
                src={directAge || countAge === 0 ? "up11.png" : "down.png"}
                onClick={() => {
                  setDirectAge(!directAge);
                  !directAge ? sortByAgeUp() : sortByAgeDown();
                  setCloseAge(1);
                  setCountAge(countAge + 1);
                }}
              />
            </div>
          </div>
          <div className="reset-box">
            <img
              alt="xPng"
              src="x.png"
              className={!closeAge ? "closeActive" : "closeInActive"}
              onClick={ofHoverClick2}
            />
          </div>
        </div>
      </th>
    </tr>
  );
};
export default TableHead;
